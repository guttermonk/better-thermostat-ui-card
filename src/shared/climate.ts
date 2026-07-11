import type {
  ClimateEntity,
  HomeAssistant,
  LovelaceCardConfig,
} from "mushroom-cards/src/ha";

// Deep import: the ha barrel touches `window` at module scope, which would
// break Node-side consumers (bun test).
export {
  supportsFeature,
  supportsFeatureFromAttributes,
} from "mushroom-cards/src/ha/common/entity/supports-feature";

// Events the cards fire via mushroom's typed fireEvent; mushroom itself only
// declares value-changed/change.
declare global {
  interface HASSDomEvents {
    "hass-more-info": { entityId: string | null };
    "config-changed": { config: LovelaceCardConfig };
  }
}

export const UNAVAILABLE = "unavailable";
export const UNKNOWN = "unknown";

// Climate feature bits, mirroring HA core's ClimateEntityFeature
// (homeassistant/components/climate/const.py).
export const ClimateEntityFeature = {
  TARGET_TEMPERATURE: 1,
  TARGET_TEMPERATURE_RANGE: 2,
  TARGET_HUMIDITY: 4,
  FAN_MODE: 8,
  PRESET_MODE: 16,
  SWING_MODE: 32,
  AUX_HEAT: 64,
  TURN_OFF: 128,
  TURN_ON: 256,
  SWING_HORIZONTAL_MODE: 512,
} as const;

// Attributes the Better Thermostat integration adds on top of a plain climate
// entity. Numeric setpoints are re-declared as nullable: integrations
// (e.g. daikin_onecta in fan_only/dry) report them as null or drop them.
export type BtClimateAttributes = Omit<
  ClimateEntity["attributes"],
  "temperature" | "current_temperature" | "min_temp" | "max_temp"
> & {
  temperature?: number | null;
  current_temperature?: number | null;
  min_temp?: number;
  max_temp?: number;
  call_for_heat?: boolean;
  window_open?: boolean | string;
  batteries?: string;
  errors?: string;
  degraded_mode?: boolean;
  eco_mode?: boolean;
  [key: string]: any;
};

export type BtClimateEntity = Omit<ClimateEntity, "attributes"> & {
  attributes: BtClimateAttributes;
};

// Presets normally come from the climate entity's own preset_modes. Some
// integrations expose comfort profiles as a separate select entity instead
// (e.g. ecobee via HomeKit: select.*_current_mode) — the `preset_entity`
// card config points at it, and then it fully replaces the climate presets.

export function getPresetModes(
  hass: HomeAssistant,
  stateObj: BtClimateEntity,
  presetEntity?: string,
): string[] {
  if (presetEntity) {
    const selectObj = hass.states[presetEntity];
    return (selectObj?.attributes?.options as string[] | undefined) ?? [];
  }
  return (stateObj.attributes.preset_modes ?? []).filter(
    (p: string) => p !== "none",
  );
}

// Per-preset display settings from the `preset_options` card config,
// keyed by the raw preset/option name.
export type PresetDisplayOptions = { hidden?: boolean; icon?: string };

// A preset service call can take a long round trip (e.g. ecobee via HomeKit:
// 20-30 s). The clicked preset button shows a spinner until the entity's
// preset actually changes; the timeout is the safety net for calls the
// integration silently drops.
export const PRESET_PENDING_TIMEOUT_MS = 45000;

// The presets the cards actually render: the detected list minus the ones
// hidden via preset_options.
export function getVisiblePresetModes(
  hass: HomeAssistant,
  stateObj: BtClimateEntity,
  config: {
    preset_entity?: string;
    preset_options?: Record<string, PresetDisplayOptions>;
  },
): string[] {
  return getPresetModes(hass, stateObj, config.preset_entity).filter(
    (mode) => !config.preset_options?.[mode]?.hidden,
  );
}

// The active preset, or undefined when none is set. A select entity always
// carries a value, so its state is only rejected when unavailable/unknown.
export function getCurrentPreset(
  hass: HomeAssistant,
  stateObj: BtClimateEntity,
  presetEntity?: string,
): string | undefined {
  if (presetEntity) {
    const state = hass.states[presetEntity]?.state;
    return state == null || state === UNAVAILABLE || state === UNKNOWN
      ? undefined
      : state;
  }
  const preset = stateObj.attributes.preset_mode;
  return preset != null && preset !== "none" ? preset : undefined;
}

// Human-readable preset name for tooltips: HA's backend translation for
// climate presets, the entity's own option formatting for select presets.
export function getPresetDisplayName(
  hass: HomeAssistant,
  stateObj: BtClimateEntity,
  mode: string,
  presetEntity?: string,
): string {
  if (presetEntity) {
    const selectObj = hass.states[presetEntity];
    return (selectObj && hass.formatEntityState(selectObj, mode)) || mode;
  }
  return hass.formatEntityAttributeValue(stateObj, "preset_mode", mode) || mode;
}

// Set an hvac mode or preset by name. A name matching one of the entity's
// hvac_modes wins; otherwise it is treated as a preset (selecting the active
// preset again clears it back to "none"). With a preset_entity, presets are
// set via select_option instead — no clearing, a select always has a value.
// Returns which kind of service was called (truthy) or false — the cards use
// "preset" to start the pending-spinner on the clicked button.
export function setClimateMode(
  hass: HomeAssistant,
  stateObj: BtClimateEntity,
  mode: string,
  presetEntity?: string,
): "hvac" | "preset" | false {
  if (
    (stateObj.attributes.hvac_modes as string[] | undefined)?.includes(mode)
  ) {
    hass.callService("climate", "set_hvac_mode", {
      entity_id: stateObj.entity_id,
      hvac_mode: mode,
    });
    return "hvac";
  }
  if (presetEntity) {
    if (getPresetModes(hass, stateObj, presetEntity).includes(mode)) {
      hass.callService(presetEntity.split(".")[0], "select_option", {
        entity_id: presetEntity,
        option: mode,
      });
      return "preset";
    }
    return false;
  }
  if (stateObj.attributes.preset_modes?.includes(mode)) {
    hass.callService("climate", "set_preset_mode", {
      entity_id: stateObj.entity_id,
      preset_mode: mode === stateObj.attributes.preset_mode ? "none" : mode,
    });
    return "preset";
  }
  return false;
}
