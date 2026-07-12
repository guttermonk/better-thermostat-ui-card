import {
  css,
  CSSResultGroup,
  html,
  nothing,
  PropertyValues,
  TemplateResult,
} from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import type { StyleInfo } from "lit/directives/style-map.js";
import {
  actionHandler,
  ActionHandlerEvent,
  computeRTL,
  handleAction,
  hasAction,
  HomeAssistant,
  HvacMode,
  isActive,
  isAvailable,
  LovelaceCard,
  LovelaceCardEditor,
} from "mushroom-cards/src/ha";
import { ensureElementLoaded } from "../shared/ensure-element-loaded";
import { showModeButtons } from "../shared/config";
import { computeAppearance } from "mushroom-cards/src/utils/appearance";
import { MushroomBaseCard } from "mushroom-cards/src/utils/base-card";
import { cardStyle } from "mushroom-cards/src/utils/card-styles";
import { registerCustomCard } from "mushroom-cards/src/utils/custom-cards";
import { computeEntityPicture } from "mushroom-cards/src/utils/info";
import { BetterThermostatUISmallCardConfig } from "./climate-card-config";
import { CLIMATE_CARD_EDITOR_NAME, CLIMATE_CARD_NAME } from "./const";
import "./controls/climate-hvac-modes-control";
import { isHvacModesVisible } from "./controls/climate-hvac-modes-control";
import "./controls/climate-temperature-control";
import { isTemperatureControlVisible } from "./controls/climate-temperature-control";
import {
  BtClimateEntity,
  PRESET_PENDING_TIMEOUT_MS,
  getCurrentPreset,
  getPresetDisplayName,
  getVisiblePresetModes,
  setClimateMode,
} from "../shared/climate";
import {
  climateActionColor,
  climateColor,
  climateColorDefaultStyles,
  climateColorOverrides,
  getHvacActionIcon,
  getHvacModeIcon,
  getPresetIcon,
  hasClimateColor,
} from "../shared/climate-colors";
import { alphaColor } from "../shared/color";
import { findBtStubEntity, formatHumidity, isWindowOpen } from "../shared/bt";
import {
  getConnectivityLostEntityId,
  getErrorEntityId,
  getLowBattery,
  isDegraded,
  LowBatteryEntity,
} from "../shared/bt-status";
import { localize } from "../shared/localize";
import { shouldUpdateForHass } from "../shared/has-changed";
import {
  PresetOverlayController,
  presetOverlayStyle,
} from "../shared/preset-overlay";
import { btStateColorsStyle, btAnimationsStyle } from "../shared/styles";

type ClimateCardControl = "temperature_control" | "hvac_mode_control";

const CONTROLS_ICONS: Record<ClimateCardControl, string> = {
  temperature_control: "mdi:thermometer",
  hvac_mode_control: "mdi:thermostat",
};

registerCustomCard({
  type: CLIMATE_CARD_NAME,
  name: "Better Thermostat Mini Climate Card",
  description: "Card for climate entity",
});

@customElement(CLIMATE_CARD_NAME)
export class BetterThermostatUISmallCard
  extends MushroomBaseCard<BetterThermostatUISmallCardConfig, BtClimateEntity>
  implements LovelaceCard
{
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import("./climate-card-editor");
    return document.createElement(
      CLIMATE_CARD_EDITOR_NAME,
    ) as LovelaceCardEditor;
  }

  public static async getStubConfig(
    hass: HomeAssistant,
  ): Promise<BetterThermostatUISmallCardConfig> {
    return {
      type: `custom:${CLIMATE_CARD_NAME}`,
      entity: findBtStubEntity(hass),
    };
  }

  @state() private _activeControl?: ClimateCardControl;
  private _presetOverlay = new PresetOverlayController(this);
  // Preset whose service call is in flight (spinner on its button), plus the
  // preset that was active at click time — any change away from it means the
  // round trip finished (including toggle-off back to "none").
  @state() private _pendingPreset?: string;
  private _pendingFromPreset?: string;
  private _pendingPresetTimer?: number;

  private get _controls(): ClimateCardControl[] {
    if (!this._config || !this._stateObj) return [];

    const stateObj = this._stateObj;
    const controls: ClimateCardControl[] = [];
    if (
      isTemperatureControlVisible(stateObj) &&
      this._config.show_temperature_control
    ) {
      controls.push("temperature_control");
    }
    if (isHvacModesVisible(stateObj, ["heat", "off"])) {
      controls.push("hvac_mode_control");
    }
    return controls;
  }

  protected get hasControls(): boolean {
    return this._controls.length > 0;
  }

  _onControlTap(ctrl: ClimateCardControl, e: Event): void {
    e.stopPropagation();
    this._activeControl = ctrl;
  }

  setConfig(config: BetterThermostatUISmallCardConfig): void {
    super.setConfig({
      tap_action: {
        action: "toggle",
      },
      hold_action: {
        action: "more-info",
      },
      ...config,
    });
    this.updateActiveControl();
  }

  protected updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (this.hass && changedProperties.has("hass")) {
      this.updateActiveControl();
    }
  }

  protected willUpdate(changed: PropertyValues) {
    super.willUpdate(changed);
    if (changed.has("hass")) {
      this._clearPresetPendingIfSettled();
    }
  }

  disconnectedCallback() {
    window.clearTimeout(this._pendingPresetTimer);
    super.disconnectedCallback();
  }

  private _startPresetPending(mode: string) {
    this._pendingFromPreset = getCurrentPreset(
      this.hass,
      this._stateObj!,
      this._config?.preset_entity,
    );
    this._pendingPreset = mode;
    window.clearTimeout(this._pendingPresetTimer);
    this._pendingPresetTimer = window.setTimeout(() => {
      this._pendingPreset = undefined;
    }, PRESET_PENDING_TIMEOUT_MS);
  }

  private _clearPresetPendingIfSettled() {
    if (this._pendingPreset === undefined || !this._stateObj) return;
    const current = getCurrentPreset(
      this.hass,
      this._stateObj,
      this._config?.preset_entity,
    );
    if (current !== this._pendingFromPreset) {
      window.clearTimeout(this._pendingPresetTimer);
      this._pendingPreset = undefined;
    }
  }

  // hass is replaced on every state tick of ANY entity — only re-render for
  // changes the card actually displays.
  protected shouldUpdate(changed: PropertyValues): boolean {
    if (changed.size === 1 && changed.has("hass")) {
      const oldHass = changed.get("hass") as HomeAssistant | undefined;
      return shouldUpdateForHass(oldHass, this.hass!, [
        this._config?.entity,
        this._config?.window_sensor,
        this._config?.humidity_sensor,
        this._config?.preset_entity,
        this._config?.connectivity_entity,
      ]);
    }
    return true;
  }

  updateActiveControl() {
    const isActiveControlSupported = this._activeControl
      ? this._controls.includes(this._activeControl)
      : false;
    this._activeControl = isActiveControlSupported
      ? this._activeControl
      : this._controls[0];
  }

  private _handleAction(ev: ActionHandlerEvent) {
    handleAction(this, this.hass!, this._config!, ev.detail.action!);
  }

  protected render() {
    if (!this.hass || !this._config || !this._config.entity) {
      return nothing;
    }

    const stateObj = this._stateObj;

    if (!stateObj) {
      return this.renderNotFound(this._config);
    }

    const name = this._config.name || stateObj.attributes.friendly_name || "";
    const icon = this._config.icon;
    const appearance = computeAppearance(this._config);
    const picture = computeEntityPicture(stateObj, appearance.icon_type);
    const window = isWindowOpen(this.hass, stateObj, this._config);
    const summer = stateObj.attributes.call_for_heat === false;
    let stateDisplay = this.hass.formatEntityState(stateObj);
    if (
      stateObj.attributes.hvac_action &&
      stateObj.attributes.hvac_action !== "off"
    ) {
      stateDisplay = this.hass.formatEntityAttributeValue(
        stateObj,
        "hvac_action",
      );
    }
    if (stateObj.attributes.current_temperature != null) {
      let temperature = this.hass.formatEntityAttributeValue(
        stateObj,
        "current_temperature",
      );
      if (!temperature) {
        temperature = `${stateObj.attributes.current_temperature} ${this.hass.config.unit_system.temperature}`;
      }
      const windowOpen = localize({
        hass: this.hass,
        string: "extra_states.window_open",
      });
      const summerLabel =
        localize({
          hass: this.hass,
          string: "extra_states.summer",
        }) || "Summer";
      let humidity = "";
      const humidityDisplay = formatHumidity(this.hass, stateObj, this._config);
      if (humidityDisplay) {
        humidity = ` ⸱ ${humidityDisplay}`;
      }
      stateDisplay += ` ⸱ ${window ? `(${windowOpen}) ` : summer ? `(${summerLabel}) ` : ""}${temperature}${humidity}`;
    }
    const rtl = computeRTL(this.hass);

    const isControlVisible =
      showModeButtons(this._config) &&
      (!this._config.collapsible_controls || isActive(stateObj)) &&
      this._controls.length;

    // Whenever the controls row is not shown (show_mode_buttons off, or the
    // entity offers no matching controls), presets must still be reachable —
    // like on the normal card — as long as they aren't disabled themselves
    // and the controls aren't collapsed.
    const presets = getVisiblePresetModes(this.hass, stateObj, this._config);
    const hasPresets = presets.length > 0;
    const isPresetOnlyVisible =
      !isControlVisible &&
      !this._config.disable_presets &&
      hasPresets &&
      (!this._config.collapsible_controls || isActive(stateObj));

    const hvac_action = stateObj.attributes.hvac_action || "off";

    const actionStyle: StyleInfo = {};
    actionStyle["--action-color"] = alphaColor(
      climateActionColor(hvac_action),
      0.6,
    );

    const currentPreset = getCurrentPreset(
      this.hass,
      stateObj,
      this._config.preset_entity,
    );
    // A select-based preset always has a value — only recolor for presets
    // with a known color slot, or every unknown option would go grey. With
    // colors.color_source "hvac" the background keeps the hvac action color
    // even while a preset is active.
    if (
      this._config.colors?.color_source !== "hvac" &&
      currentPreset !== undefined &&
      (!this._config.preset_entity || hasClimateColor(currentPreset))
    ) {
      const presetColor = climateColor(currentPreset);
      actionStyle["--action-color"] = alphaColor(presetColor, 0.6);
      // Recolor the heat-styled temperature input to the active preset
      // (replaces the old --rgb-state-climate-heat triplet reassignment).
      actionStyle["--bt-color-heat"] = presetColor;
    }

    if (window) {
      actionStyle["--action-color"] = `var(--info-color)`;
    } else if (summer) {
      actionStyle["--action-color"] = `var(--bt-color-summer)`;
    } else if (hvac_action === "off") {
      actionStyle["--action-color"] = `rgba(0, 0, 0, 0)`;
    }
    const showAllPresets = !!this._config.show_all_presets;
    return html`
      <ha-card
        class=${classMap({ "fill-container": appearance.fill_container })}
        style=${styleMap({
          ...climateColorOverrides(this._config.colors),
          ...actionStyle,
        })}
      >
        <mushroom-card .appearance=${appearance} ?rtl=${rtl}>
          <mushroom-state-item
            ?rtl=${rtl}
            .appearance=${appearance}
            @action=${this._handleAction}
            .actionHandler=${actionHandler({
              hasHold: hasAction(this._config.hold_action),
              hasDoubleClick: hasAction(this._config.double_tap_action),
            })}
          >
            ${picture
              ? this.renderPicture(picture)
              : this.renderIcon(stateObj, icon)}
            ${this.renderBadge(stateObj)}
            ${this.renderStateInfo(stateObj, appearance, name, stateDisplay)}
          </mushroom-state-item>
          ${isControlVisible
            ? html`
                <div class="actions" ?rtl=${rtl}>
                  ${this.renderActiveControl(stateObj)}
                  ${this.renderOtherControls()}
                </div>
              `
            : isPresetOnlyVisible
              ? html`
                  <div class="actions" ?rtl=${rtl}>
                    ${this.renderPresetFeature(stateObj)}
                  </div>
                `
              : nothing}

          ${showAllPresets
            ? nothing
            : html`
                <div
                  class=${classMap({
                    "preset-select": true,
                    open: this._presetOverlay.open,
                  })}
                >
                  ${presets.map((mode) =>
                    this.renderPresetButton(stateObj, mode, currentPreset),
                  )}
                </div>
              `}
        </mushroom-card>
      </ha-card>
    `;
  }

  // One preset as a button: used both in the fullscreen overlay and the
  // show_all_presets inline row. The active preset is highlighted; a pending
  // service call replaces the icon with a spinner.
  private renderPresetButton(
    entity: BtClimateEntity,
    mode: string,
    currentPreset?: string,
  ) {
    const active = mode === currentPreset;
    const pending = mode === this._pendingPreset;
    const color = active ? climateColor(mode) : "var(--bt-color-grey)";
    const iconStyle: StyleInfo = {
      "--icon-color": color,
      "--bg-color": alphaColor(color, 0.2),
    };
    const label = getPresetDisplayName(
      this.hass,
      entity,
      mode,
      this._config?.preset_entity,
    );
    return html`
      <mushroom-button
        class=${classMap({ "bt-offline": this._presetsOffline })}
        style=${styleMap(iconStyle)}
        .mode=${mode}
        .disabled=${!isAvailable(entity)}
        title=${label}
        aria-label=${label}
        .actionHandler=${actionHandler()}
        @action=${(e: ActionHandlerEvent) => {
          e.stopPropagation();
          if (e.detail.action === "tap") {
            this.triggerModeChange(mode);
          }
        }}
      >
        <ha-icon
          class=${classMap({ "bt-pending": pending })}
          .icon=${pending ? "mdi:loading" : this._presetIcon(mode)}
        ></ha-icon>
      </mushroom-button>
    `;
  }

  private _presetIcon(mode: string): string {
    return getPresetIcon(mode, this._config?.preset_options?.[mode]?.icon);
  }

  // Preset changes are pointless while the device is unreachable — the
  // buttons stay clickable but are dimmed as a "don't bother" signal.
  private get _presetsOffline(): boolean {
    return (
      getConnectivityLostEntityId(this.hass, this._config) !== undefined
    );
  }

  protected async firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);

    // Ensure shared mushroom components are loaded only once
    await Promise.all([
      ensureElementLoaded(
        "mushroom-badge-icon",
        () => import("mushroom-cards/src/shared/badge-icon"),
      ),
      ensureElementLoaded(
        "mushroom-card",
        () => import("mushroom-cards/src/shared/card"),
      ),
      ensureElementLoaded(
        "mushroom-shape-avatar",
        () => import("mushroom-cards/src/shared/shape-avatar"),
      ),
      ensureElementLoaded(
        "mushroom-shape-icon",
        () => import("mushroom-cards/src/shared/shape-icon"),
      ),
      ensureElementLoaded(
        "mushroom-state-info",
        () => import("mushroom-cards/src/shared/state-info"),
      ),
      ensureElementLoaded(
        "mushroom-state-item",
        () => import("mushroom-cards/src/shared/state-item"),
      ),
      ensureElementLoaded(
        "mushroom-button",
        () => import("mushroom-cards/src/shared/button"),
      ),
    ]);
  }

  protected renderIcon(
    stateObj: BtClimateEntity,
    icon?: string,
  ): TemplateResult {
    const available = isAvailable(stateObj);
    const window = isWindowOpen(this.hass, stateObj, this._config);
    const summer = stateObj.attributes.call_for_heat === false;
    const eco = stateObj.attributes.eco_mode === true;
    const hvacAction = stateObj.attributes.hvac_action;
    // On dual (heat/cool) devices the mode color (heat_cool) hides what the
    // device is actually doing — prefer the active action color when set.
    const color =
      hvacAction && hvacAction !== "idle" && hvacAction !== "off"
        ? climateActionColor(hvacAction)
        : climateColor(stateObj.state);
    const iconStyle: StyleInfo = {};
    iconStyle["--icon-color"] = color;
    iconStyle["--shape-color"] = alphaColor(color, 0.2);

    if (window) {
      iconStyle["--icon-color"] = `var(--info-color)`;
      iconStyle["--shape-color"] = `rgba(0,0,0, 0.1)`;
    } else if (summer) {
      iconStyle["--icon-color"] = `var(--bt-color-summer)`;
      iconStyle["--shape-color"] = alphaColor("var(--bt-color-summer)", 0.2);
    } else if (eco) {
      iconStyle["--icon-color"] = `var(--bt-color-eco)`;
      iconStyle["--shape-color"] = alphaColor("var(--bt-color-eco)", 0.2);
    }

    return html`
      <mushroom-shape-icon
        slot="icon"
        .disabled=${!available}
        style=${styleMap(iconStyle)}
      >
        <ha-state-icon
          .hass=${this.hass}
          .stateObj=${stateObj}
          .icon=${icon}
        ></ha-state-icon>
      </mushroom-shape-icon>
    `;
  }

  protected renderBadge(entity: BtClimateEntity) {
    const unavailable = !isAvailable(entity);
    if (unavailable) {
      return super.renderBadge(entity);
    }

    const lowBattery = getLowBattery(entity, this._config);
    const errorEntityId =
      getErrorEntityId(entity, this._config) ??
      getConnectivityLostEntityId(this.hass, this._config);
    const degradedMode = isDegraded(entity, this._config);
    if (degradedMode) {
      return html`
        <mushroom-badge-icon
          slot="badge"
          .icon=${"mdi:alert"}
          title=${localize({
            hass: this.hass,
            string: "extra_states.degraded_mode",
          })}
          @click=${(ev: Event) => {
            ev.stopPropagation();
            ev.preventDefault();
            this.dispatchEvent(
              new CustomEvent("hass-more-info", {
                detail: { entityId: entity.entity_id },
                bubbles: true,
                composed: true,
              }),
            );
          }}
          style=${styleMap({
            "--icon-color": "var(--warning-color, #ffc107)",
            "--main-color": "var(--bt-badge-background)",
            border: "1px solid var(--warning-color, #ffc107)",
            borderRadius: "50%",
          })}
        ></mushroom-badge-icon>
      `;
    }
    if (errorEntityId) {
      return html`
        <mushroom-badge-icon
          slot="badge"
          .icon=${"mdi:wifi-strength-off-outline"}
          title=${localize({
            hass: this.hass,
            string: "extra_states.connection_lost",
            search: "{name}",
            replace:
              this.hass?.states?.[errorEntityId]?.attributes?.friendly_name ??
              errorEntityId,
          })}
          @click=${(ev: Event) => this._handleErrorClick(ev, errorEntityId)}
          style=${styleMap({
            "--icon-color": "var(--error-color, #f44336)",
            "--main-color": "var(--bt-badge-background)",
            border: "1px solid var(--error-color, #f44336)",
            borderRadius: "50%",
          })}
        ></mushroom-badge-icon>
      `;
    }

    if (lowBattery) {
      return html`
        <mushroom-badge-icon
          slot="badge"
          .icon=${"mdi:battery-alert"}
          title=${localize({
            hass: this.hass,
            string: "extra_states.low_battery",
            search: "{name}",
            replace: lowBattery.name,
          })}
          @click=${(ev: Event) => this._handleLowBatteryClick(ev, lowBattery)}
          style=${styleMap({
            "--icon-color": "var(--error-color, #f44336)",
            "--main-color": "var(--bt-badge-background)",
            border: "1px solid var(--error-color, #f44336)",
            borderRadius: "50%",
          })}
        ></mushroom-badge-icon>
      `;
    }

    return this.renderActionBadge(entity);
  }

  private _handleErrorClick(ev: Event, entityId: string) {
    ev.stopPropagation();
    ev.preventDefault();
    if (!entityId) return;

    this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        detail: { entityId },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _handleLowBatteryClick(ev: Event, lowBattery: LowBatteryEntity) {
    ev.stopPropagation();
    ev.preventDefault();

    const entityId = lowBattery?.name;
    if (!entityId) return;

    this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        detail: { entityId },
        bubbles: true,
        composed: true,
      }),
    );
  }

  renderActionBadge(entity: BtClimateEntity) {
    const hvac_action = entity.attributes.hvac_action;
    const windowOpen = isWindowOpen(this.hass, entity, this._config);
    const summer = entity.attributes.call_for_heat === false;

    // Non BT entities may not report hvac_action at all — still show the
    // badge when the configured window sensor reports open.
    if ((!hvac_action || hvac_action === "off") && !windowOpen && !summer)
      return nothing;

    let icon = getHvacActionIcon(hvac_action || "off");
    if (windowOpen) {
      icon = "mdi:window-open-variant";
    } else if (summer) {
      icon = "mdi:white-balance-sunny";
    }

    if (!icon) return nothing;

    let finalColor = climateActionColor(hvac_action || "off");
    if (summer && !windowOpen) finalColor = "var(--bt-color-summer)";

    return html`
      <mushroom-badge-icon
        slot="badge"
        .icon=${icon}
        style=${styleMap({
          "--icon-color": windowOpen ? `var(--info-color)` : finalColor,
          "--main-color": "var(--bt-badge-background)",
          border: `1px solid ${windowOpen ? `var(--info-color)` : finalColor}`,
          borderRadius: "50%",
        })}
      ></mushroom-badge-icon>
    `;
  }

  private renderOtherControls(): TemplateResult | null {
    const otherControls = this._controls.filter(
      (control) => control != this._activeControl,
    );

    return html`
      ${otherControls.map(
        (ctrl) => html`
          <mushroom-button @click=${(e: Event) => this._onControlTap(ctrl, e)}>
            <ha-icon .icon=${CONTROLS_ICONS[ctrl]}></ha-icon>
          </mushroom-button>
        `,
      )}
    `;
  }

  private renderPresetFeature(entity: BtClimateEntity) {
    if (this._config?.disable_presets) return nothing;
    const presetEntity = this._config?.preset_entity;
    const presets = getVisiblePresetModes(
      this.hass,
      entity,
      this._config ?? {},
    );
    if (presets.length === 0) return nothing;
    const currentPreset = getCurrentPreset(this.hass, entity, presetEntity);

    // show_all_presets: every preset inline instead of the collapsed
    // button + overlay.
    if (this._config?.show_all_presets) {
      return html`${presets.map((mode) =>
        this.renderPresetButton(entity, mode, currentPreset),
      )}`;
    }

    const iconStyle: StyleInfo = {};
    const selectedMode = currentPreset ?? "none";
    if (currentPreset != null) {
      const color = climateColor(currentPreset);
      iconStyle["--icon-color"] = color;
      iconStyle["--bg-color"] = alphaColor(color, 0.2);
    }
    // The collapsed button also carries the pending spinner — after the
    // overlay closes it is the only preset UI still visible.
    const pending = this._pendingPreset != null;
    const icon = pending
      ? "mdi:loading"
      : currentPreset != null
        ? this._presetIcon(currentPreset)
        : getHvacModeIcon("none");
    const label =
      currentPreset != null
        ? getPresetDisplayName(this.hass, entity, currentPreset, presetEntity)
        : localize({ hass: this.hass, string: "extra_states.presets" });

    if (presets.length === 1) {
      const presetLabel = getPresetDisplayName(
        this.hass,
        entity,
        presets[0],
        presetEntity,
      );
      return html`
        <mushroom-button
          class=${classMap({ "bt-offline": this._presetsOffline })}
          style=${styleMap(iconStyle)}
          .mode=${selectedMode}
          title=${presetLabel}
          aria-label=${presetLabel}
          .actionHandler=${actionHandler({ hasHold: true })}
          @action=${(e: ActionHandlerEvent) => {
            e.stopPropagation();
            if (e.detail.action === "hold") {
              this._presetOverlay.setOpen(true);
            } else if (e.detail.action === "tap") {
              this.triggerModeChange(presets[0]);
            }
          }}
        >
          <ha-icon
            class=${classMap({ "bt-pending": pending })}
            .icon=${pending ? "mdi:loading" : this._presetIcon(presets[0])}
          ></ha-icon>
        </mushroom-button>
      `;
    }
    return html`
      <mushroom-button
        class=${classMap({ "bt-offline": this._presetsOffline })}
        style=${styleMap(iconStyle)}
        .mode=${selectedMode}
        title=${label}
        aria-label=${label}
        .actionHandler=${actionHandler({ hasHold: true })}
        @action=${(e: ActionHandlerEvent) => {
          e.stopPropagation();
          this._presetOverlay.setOpen(true);
        }}
      >
        <ha-icon
          class=${classMap({ "bt-pending": pending })}
          .icon=${icon}
        ></ha-icon>
      </mushroom-button>
    `;
  }

  private triggerModeChange(mode: string) {
    const stateObj = this._stateObj;
    if (!stateObj) return;
    const result = setClimateMode(
      this.hass,
      stateObj,
      mode,
      this._config?.preset_entity,
    );
    if (!result) return;
    if (result === "preset") {
      this._startPresetPending(mode);
    }
    this._presetOverlay.setOpen(false);
  }

  private renderActiveControl(entity: BtClimateEntity) {
    const hvac_modes: HvacMode[] = ["heat", "off"];
    const appearance = computeAppearance(this._config!);

    switch (this._activeControl) {
      case "temperature_control":
        return html`
          <mushroom-climate-temperature-control
            .hass=${this.hass}
            .entity=${entity}
            .fill=${appearance.layout !== "horizontal"}
          ></mushroom-climate-temperature-control>
          ${this.renderPresetFeature(entity)}
        `;
      case "hvac_mode_control":
        return html`
          <mushroom-climate-hvac-modes-control
            .hass=${this.hass}
            .entity=${entity}
            .modes=${hvac_modes}
            .fill=${appearance.layout !== "horizontal"}
            .disableEco=${this._config?.disable_eco}
            .feature=${this.renderPresetFeature(entity)}
          ></mushroom-climate-hvac-modes-control>
        `;
      default:
        return nothing;
    }
  }

  static get styles(): CSSResultGroup {
    return [
      super.styles,
      cardStyle,
      btStateColorsStyle,
      climateColorDefaultStyles,
      presetOverlayStyle,
      btAnimationsStyle,
      css`
        :host {
          --rgb-state-climate-heat: 244, 99, 108;

          --bt-state-window: var(--info-color);
        }
        :host > * {
          overflow: hidden;
        }
        :host > *::before {
          display: block;
          content: "";
          position: absolute;
          right: -10%;
          bottom: -10%;
          background: radial-gradient(
            100% 60% at 50% 90%,
            var(--action-color, transparent) 0%,
            transparent 100%
          );
          opacity: 0.3;
          pointer-events: none;
          transform: translate(-50%, -20%);
          left: 50% !important;
          z-index: 0;
          top: 50% !important;
          width: 100%;
          height: 100%;
        }
        mushroom-state-item {
          cursor: pointer;
        }
        mushroom-climate-temperature-control,
        mushroom-climate-hvac-modes-control {
          flex: 1;
        }
        /* Base overlay skeleton comes from the shared presetOverlayStyle. */
        .preset-select {
          justify-content: space-evenly;
          gap: 15px;
          padding: 0 1em 0em 1em;
          background-color: rgba(var(--rgb-card-background-color), 0.3);
        }
        /* Device unreachable (connectivity_entity / preset_entity signal):
           preset changes won't stick, so dim the buttons — still clickable. */
        mushroom-button.bt-offline {
          opacity: 0.4;
        }
      `,
    ];
  }
}
