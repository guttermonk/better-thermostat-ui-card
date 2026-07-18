import { describe, expect, it } from "bun:test";
import {
  CLIMATE_COLOR_KEYS,
  CLIMATE_HVAC_COLOR_KEYS,
  CLIMATE_PRESET_COLOR_KEYS,
  climateActionColor,
  climateColor,
  climateColorDefaultStyles,
  climateColorOverrides,
  climateStateColor,
  getHvacActionIcon,
  getHvacModeIcon,
  getPresetColor,
  getPresetIcon,
  hasClimateColor,
} from "../src/shared/climate-colors";
import { alphaColor, computeCssColor } from "../src/shared/color";

describe("getPresetColor", () => {
  it("a per-preset override wins: theme token or raw CSS", () => {
    expect(getPresetColor("Wake", "purple")).toBe("var(--purple-color)");
    expect(getPresetColor("home", "#ff00ff")).toBe("#ff00ff");
  });

  it("falls back to the known slot, case-insensitively", () => {
    expect(getPresetColor("Home")).toBe("var(--bt-color-home)");
    expect(getPresetColor("eco")).toBe("var(--bt-color-eco)");
  });

  it("unknown presets without an override get the grey fallback", () => {
    expect(getPresetColor("Wake")).toBe("var(--bt-color-off)");
  });
});

describe("climateColor", () => {
  it("maps keys to --bt-color-* variables with dashes", () => {
    expect(climateColor("heat")).toBe("var(--bt-color-heat)");
    expect(climateColor("fan_only")).toBe("var(--bt-color-fan-only)");
    expect(climateColor("heat_cool")).toBe("var(--bt-color-heat-cool)");
    expect(climateColor("eco")).toBe("var(--bt-color-eco)");
  });

  it("unknown modes (incl. 'none') fall back to off", () => {
    expect(climateColor("none")).toBe("var(--bt-color-off)");
    expect(climateColor("something_else")).toBe("var(--bt-color-off)");
  });

  it("matches case-insensitively (select-based presets)", () => {
    expect(climateColor("Home")).toBe("var(--bt-color-home)");
    expect(climateColor("AWAY")).toBe("var(--bt-color-away)");
  });
});

describe("hasClimateColor", () => {
  it("reports known color slots case-insensitively", () => {
    expect(hasClimateColor("home")).toBe(true);
    expect(hasClimateColor("Sleep")).toBe(true);
    expect(hasClimateColor("Wake")).toBe(false);
  });
});

describe("climateActionColor", () => {
  it("maps actions to their implied mode colors", () => {
    expect(climateActionColor("heating")).toBe("var(--bt-color-heat)");
    expect(climateActionColor("cooling")).toBe("var(--bt-color-cool)");
    expect(climateActionColor("drying")).toBe("var(--bt-color-dry)");
  });

  it("idle keeps its own color; unknown actions fall back to off", () => {
    expect(climateActionColor("idle")).toBe("var(--bt-color-idle)");
    expect(climateActionColor("off")).toBe("var(--bt-color-off)");
    expect(climateActionColor("something_new")).toBe("var(--bt-color-off)");
  });

  it("extended actions resolve to the mode they imply", () => {
    expect(climateActionColor("fan")).toBe("var(--bt-color-fan-only)");
    expect(climateActionColor("preheating")).toBe("var(--bt-color-heat)");
    expect(climateActionColor("defrosting")).toBe("var(--bt-color-heat)");
  });
});

describe("climateStateColor", () => {
  it("maps the entity state through the --bt-color-* layer", () => {
    expect(climateStateColor({ state: "heat" })).toBe("var(--bt-color-heat)");
    expect(climateStateColor({ state: "fan_only" })).toBe(
      "var(--bt-color-fan-only)",
    );
    expect(climateStateColor({ state: "off" })).toBe("var(--bt-color-off)");
  });

  it("unavailable keeps HA's unavailable color", () => {
    expect(climateStateColor({ state: "unavailable" })).toBe(
      "var(--state-unavailable-color)",
    );
  });
});

describe("climateColorOverrides", () => {
  it("returns an empty object without config", () => {
    expect(climateColorOverrides(undefined)).toEqual({});
  });

  it("maps config keys to variables, resolving theme tokens", () => {
    expect(
      climateColorOverrides({ heat: "deep-orange", fan_only: "#ff00ff" }),
    ).toEqual({
      "--bt-color-heat": "var(--deep-orange-color)",
      "--bt-color-fan-only": "#ff00ff",
    });
  });

  it("ignores unknown keys and empty values", () => {
    expect(climateColorOverrides({ bogus: "red", heat: "" } as any)).toEqual(
      {},
    );
  });

  it("color_source lives in the colors object but emits no variable", () => {
    expect(
      climateColorOverrides({ color_source: "hvac", heat: "red" }),
    ).toEqual({ "--bt-color-heat": "var(--red-color)" });
  });
});

describe("climateColorDefaultStyles", () => {
  it("defines a default for every color key the API can emit", () => {
    const cssText = climateColorDefaultStyles.cssText;
    for (const key of CLIMATE_COLOR_KEYS) {
      expect(cssText).toContain(`--bt-color-${key.replace(/_/g, "-")}:`);
    }
    for (const extra of ["idle", "grey", "summer", "humidity"]) {
      expect(cssText).toContain(`--bt-color-${extra}:`);
    }
    expect(cssText).toContain("--bt-badge-background:");
  });

  it("key groups cover exactly the 14 documented keys", () => {
    expect(CLIMATE_HVAC_COLOR_KEYS.length).toBe(7);
    expect(CLIMATE_PRESET_COLOR_KEYS.length).toBe(7);
    expect(CLIMATE_COLOR_KEYS.length).toBe(14);
  });
});

describe("computeCssColor", () => {
  it("maps theme tokens to their variables", () => {
    expect(computeCssColor("deep-orange")).toBe("var(--deep-orange-color)");
    expect(computeCssColor("red")).toBe("var(--red-color)");
  });

  it("passes raw CSS through (YAML escape hatch)", () => {
    expect(computeCssColor("#ff00ff")).toBe("#ff00ff");
    expect(computeCssColor("rgb(1, 2, 3)")).toBe("rgb(1, 2, 3)");
    expect(computeCssColor("rebeccapurple")).toBe("rebeccapurple");
  });
});

describe("alphaColor", () => {
  it("builds a color-mix with percentage alpha", () => {
    expect(alphaColor("var(--bt-color-heat)", 0.2)).toBe(
      "color-mix(in srgb, var(--bt-color-heat) 20%, transparent)",
    );
    expect(alphaColor("#fff", 0.05)).toBe(
      "color-mix(in srgb, #fff 5%, transparent)",
    );
  });
});

describe("icons", () => {
  it("known modes and fallback", () => {
    expect(getHvacModeIcon("heat")).toBe("mdi:fire");
    expect(getHvacModeIcon("eco")).toBe("mdi:leaf");
    expect(getHvacModeIcon("bogus")).toBe("mdi:thermostat");
  });

  it("preset icons match case-insensitively with a generic fallback", () => {
    expect(getPresetIcon("eco")).toBe("mdi:leaf");
    expect(getPresetIcon("Home")).toBe("mdi:home");
    expect(getPresetIcon("Wake")).toBe("mdi:tune-variant");
  });

  it("a per-preset icon override wins", () => {
    expect(getPresetIcon("eco", "mdi:flower")).toBe("mdi:flower");
    expect(getPresetIcon("eco", undefined)).toBe("mdi:leaf");
    expect(getPresetIcon("eco", "")).toBe("mdi:leaf");
  });

  it("action icons, including extended actions via their implied mode", () => {
    expect(getHvacActionIcon("heating")).toBe("mdi:fire");
    expect(getHvacActionIcon("idle")).toBe("mdi:clock-outline");
    expect(getHvacActionIcon("fan")).toBe("mdi:fan");
    expect(getHvacActionIcon("preheating")).toBe("mdi:fire");
    expect(getHvacActionIcon("something_new")).toBe("");
  });
});
