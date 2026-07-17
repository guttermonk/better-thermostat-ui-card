import { assign, boolean, object, optional } from "superstruct";
import { LovelaceCardConfig } from "mushroom-cards/src/ha";
import {
  ActionsSharedConfig,
  actionsSharedConfigStruct,
} from "mushroom-cards/src/shared/config/actions-config";
import {
  AppearanceSharedConfig,
  appearanceSharedConfigStruct,
} from "mushroom-cards/src/shared/config/appearance-config";
import {
  EntitySharedConfig,
  entitySharedConfigStruct,
} from "mushroom-cards/src/shared/config/entity-config";
import { lovelaceCardConfigStruct } from "mushroom-cards/src/shared/config/lovelace-card-config";
import { SharedBtCardConfig, sharedBtConfigStruct } from "../shared/config";

export type BetterThermostatUISmallCardConfig = LovelaceCardConfig &
  EntitySharedConfig &
  AppearanceSharedConfig &
  ActionsSharedConfig &
  SharedBtCardConfig & {
    show_temperature_control?: boolean;
    // Append the target setpoint (heat/cool) or low–high range
    // (heat_cool/auto) to the state line.
    show_target_temperature?: boolean;
  };

export const climateCardConfigStruct = assign(
  lovelaceCardConfigStruct,
  assign(
    entitySharedConfigStruct,
    appearanceSharedConfigStruct,
    actionsSharedConfigStruct,
  ),
  assign(
    sharedBtConfigStruct,
    object({
      show_temperature_control: optional(boolean()),
      show_target_temperature: optional(boolean()),
    }),
  ),
);
