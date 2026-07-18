import {
  mdiAlert,
  mdiEye,
  mdiGestureTap,
  mdiPalette,
  mdiWindowOpenVariant,
} from "@mdi/js";
import memoizeOne from "memoize-one";
import { HomeAssistant } from "mushroom-cards/src/ha";
import { HaFormSchema } from "mushroom-cards/src/utils/form/ha-form";
import {
  CLIMATE_COLOR_KEYS,
  CLIMATE_HVAC_COLOR_KEYS,
} from "./climate-colors";
import { PresetDisplayOptions } from "./climate";

// The `as any` casts on the section builders below are deliberate: mushroom's
// HaFormSchema type doesn't model HA's expandable sections (type/flatten/
// expanded/iconPath), which ha-form itself supports.

// Labels resolved through the card's own translations
// (editor.card.climate.*) instead of HA's generic editor strings.
export const CLIMATE_LABELS: string[] = [
  "show_temperature_control",
  "show_target_temperature",
  "collapsible_controls",
  "show_current_as_primary",
  "show_secondary",
  "show_plus_minus",
  "show_mode_buttons",
  "disable_menu",
  "prevent_interaction_on_scroll",
  "disable_eco",
  "disable_humidity",
  "show_presets",
  "show_all_presets",
  "disable_battery_warning",
  "disable_connection_lost_warning",
  "disable_degraded_warning",
  "debug_battery",
  "debug_connection",
  "debug_degraded",
  "low_battery_threshold",
  "window_sensor",
  "humidity_sensor",
  "preset_entity",
  "connectivity_entity",
  "color_source",
  "section_display",
  "section_interaction",
  "section_warnings",
  "section_sensors",
];

// The detected presets behind a joined presetModes string (the same string
// the colors schema receives), minus the "none" placeholder.
export const splitPresets = (presetModes?: string): string[] =>
  (presetModes ?? "").split(",").filter((p) => p && p !== "none");

// Drop preset_options entries that are back to defaults (shown, no icon, no
// color); returns undefined when nothing is customized so the key can be
// removed from the YAML entirely.
export function prunePresetOptions(
  options: Record<string, PresetDisplayOptions>,
): Record<string, PresetDisplayOptions> | undefined {
  const pruned: Record<string, PresetDisplayOptions> = {};
  for (const [preset, entry] of Object.entries(options)) {
    const clean: PresetDisplayOptions = {};
    if (entry.hidden) clean.hidden = true;
    if (entry.icon) clean.icon = entry.icon;
    if (entry.color) clean.color = entry.color;
    if (Object.keys(clean).length > 0) pruned[preset] = clean;
  }
  return Object.keys(pruned).length > 0 ? pruned : undefined;
}

// External window/humidity sensors and preset select — only offered for
// non-BT entities, which don't expose that data via attributes.
export const computeSensorsSection = (): HaFormSchema =>
  ({
    name: "section_sensors",
    type: "expandable",
    flatten: true,
    iconPath: mdiWindowOpenVariant,
    schema: [
      {
        name: "window_sensor",
        selector: { entity: { domain: ["binary_sensor", "input_boolean"] } },
      },
      {
        name: "humidity_sensor",
        selector: { entity: { domain: ["sensor"], device_class: "humidity" } },
      },
      {
        name: "preset_entity",
        selector: { entity: { domain: ["select", "input_select"] } },
      },
      {
        name: "connectivity_entity",
        selector: { entity: { domain: ["binary_sensor"] } },
      },
    ],
  }) as any;

// Each card passes exactly the toggles it actually reads.
export const computeDisplaySection = (
  toggles: { name: string }[],
): HaFormSchema =>
  ({
    name: "section_display",
    type: "expandable",
    flatten: true,
    iconPath: mdiEye,
    schema: [
      {
        type: "grid",
        name: "",
        schema: toggles.map((t) => ({ ...t, selector: { boolean: {} } })),
      },
    ],
  }) as any;

// Expandable `colors` section: NOT flattened, so ha-form reads/writes the
// nested `colors:` config object. A `color_source` dropdown (what drives the
// background color while a preset is active), then one clearable ui_color
// picker per hvac mode the entity actually supports. Preset colors live in
// the Presets section (per-preset `preset_options.color`) — legacy `colors:`
// preset keys still render, they just have no picker here anymore.
// An unset picker displays its `default_color` entry: a synthetic "default"
// extra option whose `display_color` is the card's actual default (the HA
// state-color variables are global, so they resolve inside the editor
// dialog). Picking it writes the sentinel value "default", which the
// editors strip back out of the config. Memoized on joined-string keys;
// undefined means "entity unknown" and falls back to all keys. The option
// labels are passed as plain strings (localized by the caller) to keep the
// memoization key stable per language.
export const computeColorsSchema = memoizeOne(
  (
    hvacModes?: string,
    presetSourceLabel?: string,
    hvacSourceLabel?: string,
    defaultLabel?: string,
  ): HaFormSchema => {
    // "off" is deliberately grey, not a color — no picker for it.
    const hvacSlots = (
      hvacModes === undefined
        ? [...CLIMATE_HVAC_COLOR_KEYS]
        : CLIMATE_HVAC_COLOR_KEYS.filter((key) =>
            hvacModes.split(",").includes(key),
          )
    ).filter((key) => key !== "off");
    return {
      name: "colors",
      type: "expandable",
      iconPath: mdiPalette,
      schema: [
        {
          name: "color_source",
          selector: {
            select: {
              mode: "dropdown",
              options: [
                { value: "preset", label: presetSourceLabel ?? "Preset" },
                { value: "hvac", label: hvacSourceLabel ?? "HVAC mode" },
              ],
            },
          },
        },
        {
          type: "grid",
          name: "",
          schema: hvacSlots.map((key) => ({
            name: key,
            selector: {
              ui_color: {
                default_color: "default",
                extra_options: [
                  {
                    value: "default",
                    label: defaultLabel ?? "Default",
                    display_color: `rgb(var(--rgb-state-climate-${key.replace(/_/g, "-")}))`,
                  },
                ],
              },
            },
          })),
        },
      ],
    } as any;
  },
);

// Labels for the color pickers come from HA's own backend translations
// (per-entity mode/preset names) — no hand-translation of 31 languages.
export const computeColorLabel = (
  hass: HomeAssistant,
  stateObj: any | undefined,
  key: string,
  localize: (k: string) => string,
): string | undefined => {
  if (!(CLIMATE_COLOR_KEYS as readonly string[]).includes(key)) {
    return undefined;
  }
  if (stateObj) {
    return (CLIMATE_HVAC_COLOR_KEYS as readonly string[]).includes(key)
      ? hass.formatEntityState(stateObj, key)
      : hass.formatEntityAttributeValue(stateObj, "preset_mode", key);
  }
  return (
    hass.localize(`component.climate.entity_component._.state.${key}`) ||
    hass.localize(
      `component.climate.entity_component._.state_attributes.preset_mode.state.${key}`,
    ) ||
    localize(`editor.card.climate.${key}`) ||
    key
  );
};

// One section for everything tappable (button visibility + interaction
// behavior). Each card passes exactly the toggles it actually reads — e.g.
// the eco button only exists on the mini card, plus/minus and the menu only
// on the normal card.
export const computeInteractionSection = (
  toggles: { name: string }[],
): HaFormSchema =>
  ({
    name: "section_interaction",
    type: "expandable",
    flatten: true,
    iconPath: mdiGestureTap,
    schema: [
      {
        type: "grid",
        name: "",
        schema: toggles.map((t) => ({ ...t, selector: { boolean: {} } })),
      },
    ],
  }) as any;

// Warnings rely on BT-only attributes (batteries, errors, degraded_mode).
export const computeWarningsSection = (includeDebug: boolean): HaFormSchema =>
  ({
    name: "section_warnings",
    type: "expandable",
    flatten: true,
    iconPath: mdiAlert,
    schema: [
      {
        type: "grid",
        name: "",
        schema: [
          { name: "disable_battery_warning", selector: { boolean: {} } },
          {
            name: "disable_connection_lost_warning",
            selector: { boolean: {} },
          },
          { name: "disable_degraded_warning", selector: { boolean: {} } },
          ...(includeDebug
            ? [
                { name: "debug_battery", selector: { boolean: {} } },
                { name: "debug_connection", selector: { boolean: {} } },
                { name: "debug_degraded", selector: { boolean: {} } },
              ]
            : []),
        ],
      },
      {
        name: "low_battery_threshold",
        default: 10,
        selector: {
          number: {
            min: 0,
            max: 100,
            step: 1,
            mode: "box",
            unit_of_measurement: "%",
          },
        },
      },
    ],
  }) as any;
