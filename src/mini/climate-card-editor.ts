import { css, CSSResultGroup, html, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import memoizeOne from "memoize-one";
import { mdiTuneVariant } from "@mdi/js";
import { fireEvent, LovelaceCardEditor } from "mushroom-cards/src/ha";
import { computeActionsFormSchema } from "mushroom-cards/src/shared/config/actions-config";
import { APPEARANCE_FORM_SCHEMA } from "mushroom-cards/src/shared/config/appearance-config";
import { MushroomBaseElement } from "mushroom-cards/src/utils/base-element";
import { GENERIC_LABELS } from "mushroom-cards/src/utils/form/generic-fields";
import { HaFormSchema } from "mushroom-cards/src/utils/form/ha-form";
import { loadHaComponents } from "mushroom-cards/src/utils/loader";
import { BetterThermostatUISmallCardConfig } from "./climate-card-config";
import { CLIMATE_CARD_EDITOR_NAME, CLIMATE_ENTITY_DOMAINS } from "./const";
import { isBtEntity } from "../shared/bt";
import { showModeButtons } from "../shared/config";
import {
  PresetDisplayOptions,
  getPresetDisplayName,
  orderPresetModes,
} from "../shared/climate";
import { createChainedLocalize } from "../shared/localize";
import {
  CLIMATE_LABELS,
  computeColorLabel,
  computeColorsSchema,
  computeDisplaySection,
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
    {
      name: "icon",
      selector: { icon: {} },
      context: { icon_entity: "entity" },
    },
    ...APPEARANCE_FORM_SCHEMA,
    ...(!isBt ? [computeSensorsSection()] : []),
    computeDisplaySection([
      { name: "show_temperature_control" },
      { name: "collapsible_controls" },
      { name: "disable_humidity" },
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
  // No plus/minus, menu, or scroll toggles: the mini card doesn't read
  // those — its temperature control and tap/hold actions are configured in
  // the display and actions sections instead.
  computeInteractionSection([
    { name: "show_mode_buttons" },
    { name: "disable_eco" },
    // Form-only positive alias for the (unchanged) inverted disable_presets
    // config key — mapped back in _valueChanged.
    { name: "show_presets" },
    { name: "show_all_presets" },
  ]),
  // Warnings rely on BT-only attributes (batteries, errors, degraded_mode)
  ...(isBt ? [computeWarningsSection(true)] : []),
  ...computeActionsFormSchema(),
]);

@customElement(CLIMATE_CARD_EDITOR_NAME)
export class ClimateCardEditor
  extends MushroomBaseElement
  implements LovelaceCardEditor
{
  @state() private _config?: BetterThermostatUISmallCardConfig;

  static get styles(): CSSResultGroup {
    const base = super.styles;
    return [
      ...(Array.isArray(base) ? base : [base]),
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

  public setConfig(config: BetterThermostatUISmallCardConfig): void {
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

  private _computeLabel = (schema: HaFormSchema) => {
    const localize = createChainedLocalize(this.hass!);
    if (schema.name === "colors") {
      return localize("editor.card.climate.section_colors");
    }
    const colorLabel = computeColorLabel(
      this.hass!,
      this._stateObj,
      schema.name,
      localize,
    );
    if (colorLabel !== undefined) return colorLabel;
    if (GENERIC_LABELS.includes(schema.name)) {
      return localize(`editor.card.generic.${schema.name}`);
    }
    if (CLIMATE_LABELS.includes(schema.name)) {
      return localize(`editor.card.climate.${schema.name}`);
    }
    return this.hass!.localize(
      `ui.panel.lovelace.editor.card.generic.${schema.name}`,
    );
  };

  private _computeHelper = (schema: HaFormSchema) =>
    schema.name === "colors"
      ? createChainedLocalize(this.hass!)(
          "editor.card.climate.section_colors_helper",
        )
      : undefined;

  protected render() {
    if (!this.hass || !this._config) {
      return nothing;
    }

    // Non Better Thermostat entities don't provide window/humidity data via
    // attributes — offer external sensor pickers instead and hide BT-only
    // options. An unresolvable entity is treated as non-BT so typos or
    // unloaded entities don't accidentally show the BT-only form.
    const stateObj = this._stateObj;
    const isBt = stateObj ? isBtEntity(stateObj) : false;
    const entityMissing = !stateObj && !!this._config.entity;
    const presetModes = this._presetModesString;
    const localize = createChainedLocalize(this.hass);
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
      this._config.preset_order,
    );
    const data = {
      low_battery_threshold: 10,
      ...this._config,
      // Resolves the inverted legacy disable_all_buttons key so the toggle
      // reflects what the card actually shows; show_presets presents the
      // inverted disable_presets key positively.
      show_mode_buttons: showModeButtons(this._config),
      show_presets: !this._config.disable_presets,
    };

    return html`
      ${entityMissing
        ? html`
            <ha-alert alert-type="warning">
              ${this.hass.localize(
                "ui.panel.lovelace.warning.entity_not_found",
                { entity: this._config.entity },
              )}
            </ha-alert>
          `
        : nothing}
      ${stateObj && !isBt
        ? html`
            <ha-alert alert-type="info">
              ${localize("editor.card.climate.not_bt_info")}
            </ha-alert>
          `
        : nothing}
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${schemaBefore}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
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
                  .options=${this._config.preset_options}
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
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
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
    if (ev.detail.order.join(" ") !== natural.join(" ")) {
      value.preset_order = ev.detail.order;
    } else {
      delete value.preset_order;
    }
    this._config = value;
    fireEvent(this, "config-changed", { config: value });
  }

  private _valueChanged(ev: CustomEvent): void {
    const value = {
      ...(ev.detail.value as BetterThermostatUISmallCardConfig & {
        show_presets?: boolean;
      }),
    };
    // The form edits show_mode_buttons — drop the legacy inverted key so
    // stale YAML doesn't linger alongside it.
    if (value.show_mode_buttons !== undefined) {
      delete value.disable_all_buttons;
    }
    // show_presets is form-only: the YAML keeps the inverted disable_presets
    // key the card reads.
    if (value.show_presets !== undefined) {
      value.disable_presets = !value.show_presets;
      delete value.show_presets;
    }
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
    fireEvent(this, "config-changed", { config: value });
  }
}
