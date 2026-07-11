import {
  mdiAlert,
  mdiEye,
  mdiGestureTap,
  mdiPalette,
  mdiTune,
  mdiTuneVariant,
  mdiWindowOpenVariant,
} from "@mdi/js";
import memoizeOne from "memoize-one";
import { HomeAssistant } from "mushroom-cards/src/ha";
import { HaFormSchema } from "mushroom-cards/src/utils/form/ha-form";
import {
  CLIMATE_COLOR_KEYS,
  CLIMATE_HVAC_COLOR_KEYS,
  CLIMATE_PRESET_COLOR_KEYS,
} from "./climate-colors";
import { PresetDisplayOptions } from "./climate";

// The `as any` casts on the section builders below are deliberate: mushroom's
// HaFormSchema type doesn't model HA's expandable sections (type/flatten/
// expanded/iconPath), which ha-form itself supports.

// Labels resolved through the card's own translations
// (editor.card.climate.*) instead of HA's generic editor strings.
export const CLIMATE_LABELS: string[] = [
  "show_temperature_control",
  "collapsible_controls",
  "show_current_as_primary",
  "show_secondary",
  "disable_buttons",
  "disable_all_buttons",
  "disable_menu",
  "prevent_interaction_on_scroll",
  "disable_eco",
  "disable_humidity",
  "disable_presets",
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
  "color_source",
  "section_display",
  "section_interaction",
  "section_features",
  "section_warnings",
  "section_sensors",
  "section_presets",
];

// Synthetic per-preset editor fields: `preset_show_<name>` (visibility
// toggle) and `preset_icon_<name>` (icon override). They only exist in the
// form — the editors translate them from/to the `preset_options` config
// object in .data / value-changed.
export const PRESET_SHOW_PREFIX = "preset_show_";
export const PRESET_ICON_PREFIX = "preset_icon_";

const splitPresets = (presetModes?: string): string[] =>
  (presetModes ?? "").split(",").filter((p) => p && p !== "none");

// One show-toggle + icon-picker pair per detected preset. `presetModes` is
// the raw joined list (same string the colors schema gets); no section is
// rendered when no presets are detected.
export const computePresetsSection = memoizeOne(
  (presetModes?: string): HaFormSchema[] => {
    const presets = splitPresets(presetModes);
    if (presets.length === 0) return [];
    return [
      {
        name: "section_presets",
        type: "expandable",
        flatten: true,
        iconPath: mdiTuneVariant,
        schema: [
          {
            type: "grid",
            name: "",
            schema: presets.flatMap((preset) => [
              {
                name: `${PRESET_SHOW_PREFIX}${preset}`,
                selector: { boolean: {} },
              },
              {
                name: `${PRESET_ICON_PREFIX}${preset}`,
                selector: { icon: {} },
              },
            ]),
          },
        ],
      } as any,
    ];
  },
);

// Synthetic form values for .data: visibility defaults to shown.
export const computePresetFields = (
  presetModes: string | undefined,
  presetOptions?: Record<string, PresetDisplayOptions>,
): Record<string, unknown> => {
  const fields: Record<string, unknown> = {};
  for (const preset of splitPresets(presetModes)) {
    fields[`${PRESET_SHOW_PREFIX}${preset}`] =
      !presetOptions?.[preset]?.hidden;
    fields[`${PRESET_ICON_PREFIX}${preset}`] = presetOptions?.[preset]?.icon;
  }
  return fields;
};

// Strip the synthetic per-preset fields from an emitted form value and fold
// them back into the `preset_options` config object. Entries with default
// values (shown, no icon) are dropped, as is an empty preset_options.
// Mutates and returns `value`.
export function extractPresetOptions<
  T extends {
    preset_options?: Record<string, PresetDisplayOptions>;
  } & Record<string, unknown>,
>(value: T): T {
  const options: Record<string, PresetDisplayOptions> = {
    ...value.preset_options,
  };
  for (const key of Object.keys(value)) {
    let preset: string | undefined;
    let patch: PresetDisplayOptions | undefined;
    if (key.startsWith(PRESET_SHOW_PREFIX)) {
      preset = key.slice(PRESET_SHOW_PREFIX.length);
      patch = { hidden: value[key] === false ? true : undefined };
    } else if (key.startsWith(PRESET_ICON_PREFIX)) {
      preset = key.slice(PRESET_ICON_PREFIX.length);
      patch = { icon: (value[key] as string) || undefined };
    }
    if (preset === undefined) continue;
    const entry = { ...options[preset], ...patch };
    if (!entry.hidden) delete entry.hidden;
    if (!entry.icon) delete entry.icon;
    options[preset] = entry;
    delete value[key];
  }
  for (const [preset, entry] of Object.entries(options)) {
    if (!entry.hidden && !entry.icon) delete options[preset];
  }
  if (Object.keys(options).length > 0) {
    value.preset_options = options;
  } else {
    delete value.preset_options;
  }
  return value;
}

// External window/humidity sensors and preset select — only offered for
// non-BT entities, which don't expose that data via attributes.
export const computeSensorsSection = (): HaFormSchema =>
  ({
    name: "section_sensors",
    type: "expandable",
    flatten: true,
    expanded: true,
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
    expanded: true,
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
// picker per mode / preset the entity actually supports (no `default_color`
// ⇒ clearing the picker restores the card default). Memoized on
// joined-string keys; undefined means "entity unknown" and falls back to all
// keys. The option labels are passed as plain strings (localized by the
// caller) to keep the memoization key stable per language.
export const computeColorsSchema = memoizeOne(
  (
    hvacModes?: string,
    presetModes?: string,
    presetSourceLabel?: string,
    hvacSourceLabel?: string,
  ): HaFormSchema => {
    // "off" is deliberately grey, not a color — no picker for it.
    const hvacSlots = (
      hvacModes === undefined
        ? [...CLIMATE_HVAC_COLOR_KEYS]
        : CLIMATE_HVAC_COLOR_KEYS.filter((key) =>
            hvacModes.split(",").includes(key),
          )
    ).filter((key) => key !== "off");
    // Case-insensitive: select-based presets (preset_entity) report
    // capitalized options ("Home", "Away").
    const presetSlots =
      presetModes === undefined
        ? [...CLIMATE_PRESET_COLOR_KEYS]
        : CLIMATE_PRESET_COLOR_KEYS.filter((key) =>
            presetModes
              .split(",")
              .map((p) => p.toLowerCase())
              .includes(key),
          );
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
          schema: [...hvacSlots, ...presetSlots].map((key) => ({
            name: key,
            selector: { ui_color: {} },
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

export const computeInteractionSection = (): HaFormSchema =>
  ({
    name: "section_interaction",
    type: "expandable",
    flatten: true,
    iconPath: mdiGestureTap,
    schema: [
      {
        type: "grid",
        name: "",
        schema: [
          { name: "disable_buttons", selector: { boolean: {} } },
          { name: "disable_all_buttons", selector: { boolean: {} } },
          { name: "disable_menu", selector: { boolean: {} } },
          { name: "prevent_interaction_on_scroll", selector: { boolean: {} } },
        ],
      },
    ],
  }) as any;

export const computeFeaturesSection = (): HaFormSchema =>
  ({
    name: "section_features",
    type: "expandable",
    flatten: true,
    iconPath: mdiTune,
    schema: [
      {
        type: "grid",
        name: "",
        schema: [
          { name: "disable_eco", selector: { boolean: {} } },
          { name: "disable_humidity", selector: { boolean: {} } },
          { name: "disable_presets", selector: { boolean: {} } },
          { name: "show_all_presets", selector: { boolean: {} } },
        ],
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
