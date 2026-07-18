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
import { CLIMATE_PRESET_COLOR_KEYS } from "../shared/climate-colors";
import { createChainedLocalize } from "../shared/localize";
import { showModeButtons } from "../shared/config";
import {
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
      { name: "disable_humidity" },
    ]),
    computeColorsSchema(hvacModes, presetSourceLabel, hvacSourceLabel),
  ],
);

const computeSchemaAfter = memoizeOne((isBt: boolean): HaFormSchema[] => [
  computeInteractionSection([
    { name: "show_mode_buttons" },
    // Form-only positive alias for the (unchanged) inverted disable_buttons
    // config key — mapped back in _valueChanged.
    { name: "show_plus_minus" },
    // Same pattern for disable_presets.
    { name: "show_presets" },
    { name: "show_all_presets" },
    { name: "disable_menu" },
    { name: "prevent_interaction_on_scroll" },
  ]),
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

  // Effective per-preset options for the panel: seed each row's color from a
  // legacy `colors:` preset entry (known slot, case-insensitive) so the
  // picker shows the color that actually renders. The first Presets-section
  // edit persists the seeds into preset_options and _presetsChanged strips
  // the legacy keys.
  private _mergedPresetOptions(
    presets: string[],
  ): Record<string, PresetDisplayOptions> | undefined {
    const configured = this._config?.preset_options;
    const colors = this._config?.colors as Record<string, string> | undefined;
    if (!colors) return configured;
    const merged: Record<string, PresetDisplayOptions> = { ...configured };
    for (const preset of presets) {
      const key = preset.toLowerCase();
      const legacy = colors[key];
      if (
        legacy &&
        (CLIMATE_PRESET_COLOR_KEYS as readonly string[]).includes(key) &&
        !merged[preset]?.color
      ) {
        merged[preset] = { ...merged[preset], color: legacy };
      }
    }
    return merged;
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
      // setConfig() defaults disable_buttons to true. show_mode_buttons also
      // resolves the inverted legacy disable_all_buttons key, and
      // show_plus_minus presents disable_buttons positively.
      show_secondary: this._config?.show_secondary ?? true,
      show_plus_minus: !(this._config?.disable_buttons ?? true),
      show_presets: !this._config?.disable_presets,
      show_mode_buttons: this._config ? showModeButtons(this._config) : true,
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
                  .options=${this._mergedPresetOptions(orderedPresets)}
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
                  .colorLabel=${localize("editor.card.climate.preset_color")}
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
    // Preset colors live in preset_options now — drop legacy `colors:`
    // preset keys (their values were seeded into the rows above, so the
    // pruned options carry them forward).
    if (value.colors) {
      const colors = Object.fromEntries(
        Object.entries(value.colors).filter(
          ([key]) =>
            !(CLIMATE_PRESET_COLOR_KEYS as readonly string[]).includes(key),
        ),
      );
      if (Object.keys(colors).length === 0) {
        delete value.colors;
      } else {
        value.colors = colors as typeof value.colors;
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

  private _valueChanged(ev: CustomEvent) {
    ev.stopPropagation();
    const value = {
      ...(ev.detail.value as BetterThermostatUINormalCardConfig & {
        show_plus_minus?: boolean;
        show_presets?: boolean;
      }),
    };
    // The form edits show_mode_buttons — the legacy inverted key would
    // otherwise fight it (showModeButtons prefers the new key, but stale
    // YAML confuses readers).
    if (value.show_mode_buttons !== undefined) {
      delete value.disable_all_buttons;
    }
    // show_plus_minus / show_presets are form-only: the YAML keeps the
    // inverted disable_* keys the cards read.
    if (value.show_plus_minus !== undefined) {
      value.disable_buttons = !value.show_plus_minus;
      delete value.show_plus_minus;
    }
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
