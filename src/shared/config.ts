import {
  any,
  array,
  boolean,
  number,
  object,
  optional,
  record,
  string,
} from "superstruct";
import { ClimateColorsConfig } from "./climate-colors";
import { PresetDisplayOptions } from "./climate";

// Config fields shared by the normal and mini cards.
export type SharedBtCardConfig = {
  features?: any[];
  // Per-mode/preset colors: theme token or raw CSS color.
  colors?: ClimateColorsConfig;
  collapsible_controls?: boolean;
  show_current_as_primary?: boolean;
  show_secondary?: boolean;
  disable_buttons?: boolean;
  // Show the HVAC mode buttons row (default true). Replaces the inverted
  // legacy disable_all_buttons — resolve via showModeButtons().
  show_mode_buttons?: boolean;
  disable_all_buttons?: boolean;
  disable_menu?: boolean;
  prevent_interaction_on_scroll?: boolean;
  disable_eco?: boolean;
  disable_humidity?: boolean;
  disable_presets?: boolean;
  // Show every preset as its own button instead of the collapsed
  // presets button + fullscreen overlay.
  show_all_presets?: boolean;
  disable_battery_warning?: boolean;
  disable_connection_lost_warning?: boolean;
  disable_degraded_warning?: boolean;
  low_battery_threshold?: number;
  debug_battery?: boolean;
  debug_connection?: boolean;
  debug_degraded?: boolean;
  // External sensors for non Better Thermostat entities
  window_sensor?: string;
  humidity_sensor?: string;
  // select/input_select entity that carries the presets when the climate
  // entity doesn't expose preset_modes (e.g. ecobee via HomeKit).
  preset_entity?: string;
  // binary_sensor reflecting the device's network connection (e.g. a ping
  // sensor) — "off" shows the connection-lost warning and dims the presets.
  // Needed when the integration masks outages (e.g. an infinitude proxy
  // serving cached state while the thermostat is offline).
  connectivity_entity?: string;
  // Per-preset display settings, keyed by the raw preset/option name.
  preset_options?: Record<string, PresetDisplayOptions>;
  // Button order: listed presets first, unlisted ones follow as detected.
  preset_order?: string[];
};

// Effective visibility of the HVAC mode buttons row: the positive
// show_mode_buttons wins; configs saved before the rename may still carry
// the inverted disable_all_buttons instead.
export function showModeButtons(config: SharedBtCardConfig): boolean {
  return config.show_mode_buttons ?? !config.disable_all_buttons;
}

export const sharedBtConfigStruct = object({
  features: optional(array(any())),
  colors: optional(record(string(), string())),
  collapsible_controls: optional(boolean()),
  show_current_as_primary: optional(boolean()),
  show_secondary: optional(boolean()),
  disable_buttons: optional(boolean()),
  show_mode_buttons: optional(boolean()),
  disable_all_buttons: optional(boolean()),
  disable_menu: optional(boolean()),
  prevent_interaction_on_scroll: optional(boolean()),
  disable_eco: optional(boolean()),
  disable_humidity: optional(boolean()),
  disable_presets: optional(boolean()),
  show_all_presets: optional(boolean()),
  disable_battery_warning: optional(boolean()),
  disable_connection_lost_warning: optional(boolean()),
  disable_degraded_warning: optional(boolean()),
  low_battery_threshold: optional(number()),
  debug_battery: optional(boolean()),
  debug_connection: optional(boolean()),
  debug_degraded: optional(boolean()),
  window_sensor: optional(string()),
  humidity_sensor: optional(string()),
  preset_entity: optional(string()),
  connectivity_entity: optional(string()),
  preset_options: optional(
    record(
      string(),
      object({
        hidden: optional(boolean()),
        icon: optional(string()),
      }),
    ),
  ),
  preset_order: optional(array(string())),
});
