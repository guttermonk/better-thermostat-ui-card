import { css, html, LitElement, nothing, svg } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  mdiAccountArrowRight,
  mdiAlert,
  mdiAutoMode,
  mdiBatteryAlert,
  mdiBed,
  mdiClockOutline,
  mdiDrag,
  mdiFan,
  mdiFire,
  mdiHome,
  mdiLeaf,
  mdiLoading,
  mdiMotionSensor,
  mdiPower,
  mdiRocketLaunch,
  mdiSnowflake,
  mdiSofa,
  mdiSunSnowflakeVariant,
  mdiThermometer,
  mdiThermostat,
  mdiThermostatAuto,
  mdiTuneVariant,
  mdiWaterPercent,
  mdiWhiteBalanceSunny,
  mdiWifiStrengthOffOutline,
  mdiWindowOpenVariant,
} from "@mdi/js";

// Path data for every icon the cards render by name.
export const MDI_ICON_PATHS: Record<string, string> = {
  "mdi:account-arrow-right": mdiAccountArrowRight,
  "mdi:alert": mdiAlert,
  "mdi:auto-mode": mdiAutoMode,
  "mdi:battery-alert": mdiBatteryAlert,
  "mdi:bed": mdiBed,
  "mdi:clock-outline": mdiClockOutline,
  "mdi:drag": mdiDrag,
  "mdi:fan": mdiFan,
  "mdi:fire": mdiFire,
  "mdi:home": mdiHome,
  "mdi:leaf": mdiLeaf,
  "mdi:loading": mdiLoading,
  "mdi:motion-sensor": mdiMotionSensor,
  "mdi:power": mdiPower,
  "mdi:rocket-launch": mdiRocketLaunch,
  "mdi:snowflake": mdiSnowflake,
  "mdi:sofa": mdiSofa,
  "mdi:sun-snowflake-variant": mdiSunSnowflakeVariant,
  "mdi:thermometer": mdiThermometer,
  "mdi:thermostat": mdiThermostat,
  "mdi:thermostat-auto": mdiThermostatAuto,
  "mdi:tune-variant": mdiTuneVariant,
  "mdi:water-percent": mdiWaterPercent,
  "mdi:white-balance-sunny": mdiWhiteBalanceSunny,
  "mdi:wifi-strength-off-outline": mdiWifiStrengthOffOutline,
  "mdi:window-open-variant": mdiWindowOpenVariant,
};

// Drop-in replacement for HA's <ha-icon>. That element resolves mdi: names
// asynchronously (IndexedDB cache + icon-chunk fetch) and stays blank until
// a page reload when that lookup fails — a long-standing HA frontend issue.
// Names in MDI_ICON_PATHS render synchronously from the bundle; anything
// else (user-configured icons, other icon sets) falls back to <ha-icon>.
@customElement("bt-icon")
export class BtIcon extends LitElement {
  @property() public icon?: string;

  protected render() {
    if (!this.icon) return nothing;
    const path = MDI_ICON_PATHS[this.icon];
    if (!path) {
      return html`<ha-icon .icon=${this.icon}></ha-icon>`;
    }
    return svg`
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        role="img"
        aria-hidden="true"
      >
        <path d=${path}></path>
      </svg>`;
  }

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      vertical-align: middle;
      fill: currentcolor;
      width: var(--mdc-icon-size, 24px);
      height: var(--mdc-icon-size, 24px);
    }
    svg {
      width: 100%;
      height: 100%;
      pointer-events: none;
      display: block;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "bt-icon": BtIcon;
  }
}
