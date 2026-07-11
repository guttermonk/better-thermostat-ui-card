import { describe, expect, it, mock } from "bun:test";
import {
  ClimateEntityFeature,
  getCurrentPreset,
  getPresetDisplayName,
  getPresetModes,
  getVisiblePresetModes,
  orderPresetModes,
  setClimateMode,
  supportsFeature,
  supportsFeatureFromAttributes,
} from "../src/shared/climate";

const entity = (attributes: Record<string, unknown>) =>
  ({ entity_id: "climate.test", state: "heat", attributes }) as any;

// hass with an ecobee-via-HomeKit style preset select entity.
const selectHass = (state = "Home", options = ["Home", "Away", "Sleep"]) =>
  ({
    states: {
      "select.eco_mode": {
        entity_id: "select.eco_mode",
        state,
        attributes: { options },
      },
    },
    formatEntityState: (stateObj: any, s?: string) => s ?? stateObj.state,
    formatEntityAttributeValue: (_e: any, _a: string, v: string) => v,
  }) as any;

describe("feature gating (Phase 5 guard building blocks)", () => {
  it("reads the TARGET_TEMPERATURE bit", () => {
    expect(
      supportsFeature(
        entity({ supported_features: 1 }),
        ClimateEntityFeature.TARGET_TEMPERATURE,
      ),
    ).toBe(true);
    // daikin_onecta in fan_only/dry: 440 = 8|16|32|128|256 — no bit 1 or 2
    expect(
      supportsFeature(
        entity({ supported_features: 440 }),
        ClimateEntityFeature.TARGET_TEMPERATURE,
      ),
    ).toBe(false);
    expect(
      supportsFeature(
        entity({ supported_features: 440 }),
        ClimateEntityFeature.TARGET_TEMPERATURE_RANGE,
      ),
    ).toBe(false);
    expect(
      supportsFeature(
        entity({ supported_features: 441 }),
        ClimateEntityFeature.TARGET_TEMPERATURE,
      ),
    ).toBe(true);
  });

  it("treats missing supported_features as 0", () => {
    expect(
      supportsFeatureFromAttributes(
        {},
        ClimateEntityFeature.TARGET_TEMPERATURE,
      ),
    ).toBe(false);
  });
});

describe("setClimateMode", () => {
  const makeHass = () => {
    const callService = mock(() => {});
    return { hass: { callService } as any, callService };
  };

  it("sets an hvac mode when the name matches hvac_modes", () => {
    const { hass, callService } = makeHass();
    const handled = setClimateMode(
      hass,
      entity({ hvac_modes: ["heat", "off"] }),
      "off",
    );
    expect(handled).toBe("hvac");
    expect(callService).toHaveBeenCalledWith("climate", "set_hvac_mode", {
      entity_id: "climate.test",
      hvac_mode: "off",
    });
  });

  it("sets a preset when the name matches preset_modes", () => {
    const { hass, callService } = makeHass();
    const stateObj = entity({
      hvac_modes: ["heat", "off"],
      preset_modes: ["eco", "boost"],
      preset_mode: "none",
    });
    expect(setClimateMode(hass, stateObj, "eco")).toBe("preset");
    expect(callService).toHaveBeenCalledWith("climate", "set_preset_mode", {
      entity_id: "climate.test",
      preset_mode: "eco",
    });
  });

  it("selecting the active preset clears it back to none", () => {
    const { hass, callService } = makeHass();
    const stateObj = entity({ preset_modes: ["eco"], preset_mode: "eco" });
    expect(setClimateMode(hass, stateObj, "eco")).toBe("preset");
    expect(callService).toHaveBeenCalledWith("climate", "set_preset_mode", {
      entity_id: "climate.test",
      preset_mode: "none",
    });
  });

  it("returns false and calls nothing for unknown modes", () => {
    const { hass, callService } = makeHass();
    expect(setClimateMode(hass, entity({ hvac_modes: ["heat"] }), "cool")).toBe(
      false,
    );
    expect(callService).not.toHaveBeenCalled();
  });

  it("with a preset_entity, presets go through select.select_option", () => {
    const hass = selectHass();
    hass.callService = mock(() => {});
    const stateObj = entity({ hvac_modes: ["heat", "off"] });
    expect(setClimateMode(hass, stateObj, "Away", "select.eco_mode")).toBe(
      "preset",
    );
    expect(hass.callService).toHaveBeenCalledWith("select", "select_option", {
      entity_id: "select.eco_mode",
      option: "Away",
    });
  });

  it("with a preset_entity, hvac modes still win and unknown options fail", () => {
    const hass = selectHass();
    hass.callService = mock(() => {});
    const stateObj = entity({
      hvac_modes: ["heat", "off"],
      // Climate presets must be ignored while a preset_entity is configured.
      preset_modes: ["eco"],
    });
    expect(setClimateMode(hass, stateObj, "off", "select.eco_mode")).toBe(
      "hvac",
    );
    expect(hass.callService).toHaveBeenCalledWith("climate", "set_hvac_mode", {
      entity_id: "climate.test",
      hvac_mode: "off",
    });
    expect(setClimateMode(hass, stateObj, "eco", "select.eco_mode")).toBe(
      false,
    );
    expect(hass.callService).toHaveBeenCalledTimes(1);
  });

  it("input_select preset entities call the input_select domain", () => {
    const hass = {
      states: {
        "input_select.modes": {
          entity_id: "input_select.modes",
          state: "Day",
          attributes: { options: ["Day", "Night"] },
        },
      },
      callService: mock(() => {}),
    } as any;
    expect(
      setClimateMode(hass, entity({}), "Night", "input_select.modes"),
    ).toBe("preset");
    expect(hass.callService).toHaveBeenCalledWith(
      "input_select",
      "select_option",
      { entity_id: "input_select.modes", option: "Night" },
    );
  });
});

describe("preset source helpers", () => {
  it("getPresetModes reads climate preset_modes minus 'none' by default", () => {
    const stateObj = entity({ preset_modes: ["none", "eco", "boost"] });
    expect(getPresetModes({} as any, stateObj)).toEqual(["eco", "boost"]);
    expect(getPresetModes({} as any, entity({}))).toEqual([]);
  });

  it("getPresetModes reads the select options when preset_entity is set", () => {
    const stateObj = entity({ preset_modes: ["eco"] });
    expect(getPresetModes(selectHass(), stateObj, "select.eco_mode")).toEqual([
      "Home",
      "Away",
      "Sleep",
    ]);
    // Missing entity: no presets instead of falling back to climate ones.
    expect(getPresetModes(selectHass(), stateObj, "select.missing")).toEqual(
      [],
    );
  });

  it("getCurrentPreset: climate preset_mode, 'none' meaning unset", () => {
    expect(getCurrentPreset({} as any, entity({ preset_mode: "eco" }))).toBe(
      "eco",
    );
    expect(
      getCurrentPreset({} as any, entity({ preset_mode: "none" })),
    ).toBeUndefined();
    expect(getCurrentPreset({} as any, entity({}))).toBeUndefined();
  });

  it("getCurrentPreset: select state, unless unavailable/unknown", () => {
    const stateObj = entity({});
    expect(
      getCurrentPreset(selectHass("Sleep"), stateObj, "select.eco_mode"),
    ).toBe("Sleep");
    expect(
      getCurrentPreset(selectHass("unavailable"), stateObj, "select.eco_mode"),
    ).toBeUndefined();
    expect(
      getCurrentPreset(selectHass(), stateObj, "select.missing"),
    ).toBeUndefined();
  });

  it("getVisiblePresetModes drops presets hidden via preset_options", () => {
    const stateObj = entity({ preset_modes: ["none", "eco", "boost"] });
    expect(
      getVisiblePresetModes({} as any, stateObj, {
        preset_options: { boost: { hidden: true } },
      }),
    ).toEqual(["eco"]);
    // Icon-only entries don't hide anything.
    expect(
      getVisiblePresetModes(selectHass(), entity({}), {
        preset_entity: "select.eco_mode",
        preset_options: { Away: { hidden: true }, Home: { icon: "mdi:x" } },
      }),
    ).toEqual(["Home", "Sleep"]);
    expect(getVisiblePresetModes({} as any, stateObj, {})).toEqual([
      "eco",
      "boost",
    ]);
  });

  it("orderPresetModes sorts by preset_order, unlisted last in place", () => {
    expect(
      orderPresetModes(["Home", "Away", "Sleep"], ["Sleep", "Home"]),
    ).toEqual(["Sleep", "Home", "Away"]);
    // No order configured: untouched.
    expect(orderPresetModes(["a", "b"], undefined)).toEqual(["a", "b"]);
    expect(orderPresetModes(["a", "b"], [])).toEqual(["a", "b"]);
    // Stale names in the order are ignored gracefully.
    expect(orderPresetModes(["a", "b"], ["gone", "b"])).toEqual(["b", "a"]);
  });

  it("getVisiblePresetModes applies preset_order after filtering", () => {
    const stateObj = entity({ preset_modes: ["none", "eco", "boost", "away"] });
    expect(
      getVisiblePresetModes({} as any, stateObj, {
        preset_options: { boost: { hidden: true } },
        preset_order: ["away", "eco"],
      }),
    ).toEqual(["away", "eco"]);
  });

  it("getPresetDisplayName falls back to the raw mode name", () => {
    const hass = {
      states: {},
      formatEntityAttributeValue: () => "",
    } as any;
    expect(getPresetDisplayName(hass, entity({}), "eco")).toBe("eco");
    expect(
      getPresetDisplayName(hass, entity({}), "Away", "select.missing"),
    ).toBe("Away");
    expect(
      getPresetDisplayName(selectHass(), entity({}), "Away", "select.eco_mode"),
    ).toBe("Away");
  });
});
