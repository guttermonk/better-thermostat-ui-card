import { css, CSSResultGroup, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import memoizeOne from "memoize-one";
import { mdiTuneVariant } from "@mdi/js";
import { LovelaceCardEditor } from "mushroom-cards/src/ha";
import { GENERIC_LABELS } from "mushroom-cards/src/utils/form/generic-fields";
import { MushroomBaseElement } from "mushroom-cards/src/utils/base-element";
import { HaFormSchema } from "mushroom-cards/src/utils/form/ha-form";
import { loadHaComponents } from "mushroom-cards/src/utils/loader";
import { BetterThermostatUINormalCardConfig } from "./climate-card-config";
import { CLIMATE_CARD_EDITOR_NAME, CLIMATE_ENTITY_DOMAINS } from "./const";
import { isBtEntity } from "../shared/bt";
import {
  PresetDisplayOptions,
  getPresetDisplayName,
  orderPresetModes,
} from "../shared/climate";
import { createChainedLocalize } from "../shared/localize";
import {
  computeColorLabel,
  computeColorsSchema,
  computeDisplaySection,
  computeFeaturesSection,
  computeInteractionSection,
  computeSensorsSection,
  computeWarningsSection,
  prunePresetOptions,
  splitPresets,
} from "../shared/editor-schema";
import "../shared/presets-editor";

// The form is split in two around the custom presets panel (ha-form cannot
// host the drag-and-drop rows). Both halves are bound to the same data and
// the same value-changed handler.
const computeSchemaBefore = memoizeOne(
  (
    isBt: boolean,
    hvacModes?: string,
    presetModes?: string,
    presetSourceLabel?: string,
    hvacSourceLabel?: string,
  ): HaFormSchema[] => [
    {
      name: "entity",
      selector: { entity: { domain: CLIMATE_ENTITY_DOMAINS } },
    },
    { name: "name", selector: { text: {} } },
    ...(!isBt ? [computeSensorsSection()] : []),
    computeDisplaySection([
      { name: "show_current_as_primary" },
      { name: "show_secondary" },
    ]),
    computeColorsSchema(
      hvacModes,
      presetModes,
      presetSourceLabel,
      hvacSourceLabel,
    ),
  ],
);

const computeSchemaAfter = memoizeOne((isBt: boolean): HaFormSchema[] => [
  computeInteractionSection(),
  computeFeaturesSection(),
  // Warnings rely on BT-only attributes (batteries, errors, degraded_mode)
  ...(isBt ? [computeWarningsSection(true)] : []),
]);

@customElement(CLIMATE_CARD_EDITOR_NAME)
export class NormalClimateCardEditor
  extends MushroomBaseElement
  implements LovelaceCardEditor
{
  @state() private _config?: BetterThermostatUINormalCardConfig;

  static get styles(): CSSResultGroup {
    const base = super.styles;
    const baseArray = Array.isArray(base) ? base : base ? [base] : [];
    return [
      ...baseArray,
      css`
        :host {
          display: block;
          padding-bottom: 16px;
        }
        ha-alert {
          display: block;
          margin-bottom: 16px;
        }
        ha-expansion-panel.section-presets {
          display: block;
          margin: 24px 0;
        }
        .section-presets .section-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .section-presets .content {
          padding: 16px 8px 4px;
        }
      `,
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    void loadHaComponents();
  }

  public setConfig(config: BetterThermostatUINormalCardConfig): void {
    this._config = config;
  }

  private get _stateObj() {
    return this._config?.entity
      ? this.hass?.states[this._config.entity]
      : undefined;
  }

  // Joined preset list for the colors schema and the presets panel — from
  // the preset_entity select when configured, else the climate entity.
  private get _presetModesString(): string | undefined {
    const presetEntityObj = this._config?.preset_entity
      ? this.hass?.states[this._config.preset_entity]
      : undefined;
    if (presetEntityObj) {
      return ((presetEntityObj.attributes.options as string[]) ?? []).join(
        ",",
      );
    }
    const stateObj = this._stateObj;
    return stateObj
      ? (stateObj.attributes.preset_modes ?? []).join(",")
      : undefined;
  }

  protected render() {
    if (!this.hass) return html``;
    const localize = createChainedLocalize(this.hass);

    // Non Better Thermostat entities don't provide window/humidity data via
    // attributes — offer external sensor pickers instead and hide BT-only
    // options. Without a resolvable entity, fall back to the full BT form.
    const stateObj = this._stateObj;
    const isBt = !stateObj || isBtEntity(stateObj);
    const presetModes = this._presetModesString;
    const schemaBefore = computeSchemaBefore(
      isBt,
      stateObj ? (stateObj.attributes.hvac_modes ?? []).join(",") : undefined,
      presetModes,
      localize("editor.card.climate.color_source_preset"),
      localize("editor.card.climate.color_source_hvac"),
    );
    const schemaAfter = computeSchemaAfter(isBt);
    const orderedPresets = orderPresetModes(
      splitPresets(presetModes),
      this._config?.preset_order,
    );

    const data = {
      ...this._config,
      low_battery_threshold: this._config?.low_battery_threshold ?? 10,
      // Mirror the card's effective defaults so the toggles reflect
      // reality: secondary info is shown unless explicitly disabled, and
      // setConfig() defaults disable_buttons to true.
      show_secondary: this._config?.show_secondary ?? true,
      disable_buttons: this._config?.disable_buttons ?? true,
    };

    const computeLabel = (schema: HaFormSchema) => {
      if (schema.name === "entity") {
        // Use the same localize chain to ensure the generic translation
        return (
          localize("ui.panel.lovelace.editor.card.generic.entity") ||
          schema.name
        );
      }
      if (schema.name === "colors") {
        return localize("editor.card.climate.section_colors") || schema.name;
      }
      const colorLabel = computeColorLabel(
        this.hass!,
        stateObj,
        schema.name,
        localize,
      );
      if (colorLabel !== undefined) return colorLabel;
      if (GENERIC_LABELS.includes(schema.name)) {
        return localize(`editor.card.generic.${schema.name}`) || schema.name;
      }
      return localize(`editor.card.climate.${schema.name}`) || schema.name;
    };
    const computeHelper = (schema: HaFormSchema) =>
      schema.name === "colors"
        ? localize("editor.card.climate.section_colors_helper")
        : undefined;

    return html`
      ${!isBt
        ? html`
            <ha-alert alert-type="info">
              ${localize("editor.card.climate.not_bt_info")}
            </ha-alert>
          `
        : ""}
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${schemaBefore}
        .computeLabel=${computeLabel}
        .computeHelper=${computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
      ${orderedPresets.length
        ? html`
            <ha-expansion-panel outlined class="section-presets">
              <div slot="header" class="section-header">
                <ha-svg-icon .path=${mdiTuneVariant}></ha-svg-icon>
                ${localize("editor.card.climate.section_presets")}
              </div>
              <div class="content">
                <bt-presets-editor
                  .hass=${this.hass}
                  .presets=${orderedPresets}
                  .options=${this._config?.preset_options}
                  .getLabel=${(preset: string) =>
                    stateObj
                      ? getPresetDisplayName(
                          this.hass!,
                          stateObj as any,
                          preset,
                          this._config?.preset_entity,
                        )
                      : preset}
                  .showLabelTemplate=${localize(
                    "editor.card.climate.preset_show",
                  )}
                  @bt-presets-changed=${this._presetsChanged}
                ></bt-presets-editor>
              </div>
            </ha-expansion-panel>
          `
        : nothing}
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${schemaAfter}
        .computeLabel=${computeLabel}
        .computeHelper=${computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _presetsChanged(
    ev: CustomEvent<{
      order: string[];
      options: Record<string, PresetDisplayOptions>;
    }>,
  ) {
    ev.stopPropagation();
    if (!this._config) return;
    const value = { ...this._config };
    const pruned = prunePresetOptions(ev.detail.options);
    if (pruned) {
      value.preset_options = pruned;
    } else {
      delete value.preset_options;
    }
    // Only persist an order that differs from the detected one.
    const natural = splitPresets(this._presetModesString);
    if (ev.detail.order.join(" ") !== natural.join(" ")) {
      value.preset_order = ev.detail.order;
    } else {
      delete value.preset_order;
    }
    this._config = value;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _valueChanged(ev: CustomEvent) {
    ev.stopPropagation();
    const value = {
      ...(ev.detail.value as BetterThermostatUINormalCardConfig),
    };
    // ha-form emits colors: {} (or empty-string entries) when pickers are
    // cleared — don't persist that noise in the YAML.
    if (value.colors) {
      const colors = Object.fromEntries(
        Object.entries(value.colors).filter(([, v]) => v),
      );
      if (Object.keys(colors).length === 0) {
        delete value.colors;
      } else {
        value.colors = colors;
      }
    }
    this._config = value;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: value },
        bubbles: true,
        composed: true,
      }),
    );
  }
}
