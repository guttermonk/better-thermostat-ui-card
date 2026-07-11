import { describe, expect, it } from "bun:test";
import {
  computeColorsSchema,
  computePresetFields,
  computePresetsSection,
  extractPresetOptions,
} from "../src/shared/editor-schema";

const pickerNames = (schema: any): string[] =>
  schema.schema
    .find((child: { type?: string }) => child.type === "grid")
    .schema.map((field: { name: string }) => field.name);

describe("computeColorsSchema", () => {
  it("offers only the entity's hvac modes and presets", () => {
    const schema = computeColorsSchema("heat,off", "none,eco,away");
    expect(pickerNames(schema)).toEqual(["heat", "eco", "away"]);
  });

  it("never offers a picker for off — it is intentionally grey", () => {
    expect(pickerNames(computeColorsSchema(undefined, undefined))).not.toContain(
      "off",
    );
    expect(pickerNames(computeColorsSchema("off", ""))).toEqual([]);
  });

  it("falls back to all keys (minus off) when the entity is unknown", () => {
    expect(pickerNames(computeColorsSchema(undefined, undefined))).toEqual([
      "auto",
      "cool",
      "dry",
      "fan_only",
      "heat",
      "heat_cool",
      "eco",
      "away",
      "boost",
      "sleep",
      "comfort",
      "activity",
      "home",
    ]);
  });

  it("empty preset list yields no preset pickers (canonical key order)", () => {
    expect(pickerNames(computeColorsSchema("heat,cool", ""))).toEqual([
      "cool",
      "heat",
    ]);
  });

  it("nests values under the colors config key (non-flattened section)", () => {
    const schema = computeColorsSchema("heat", "") as any;
    expect(schema.name).toBe("colors");
    expect(schema.type).toBe("expandable");
    expect(schema.flatten).toBeUndefined();
  });

  it("offers the color_source dropdown with the passed labels", () => {
    const schema = computeColorsSchema(
      "heat",
      "eco",
      "Active preset (default)",
      "HVAC mode",
    ) as any;
    const dropdown = schema.schema.find(
      (child: { name?: string }) => child.name === "color_source",
    );
    expect(dropdown.selector.select.options).toEqual([
      { value: "preset", label: "Active preset (default)" },
      { value: "hvac", label: "HVAC mode" },
    ]);
  });
});

describe("presets section", () => {
  it("emits a show toggle and icon picker per preset, skipping 'none'", () => {
    const [section] = computePresetsSection("none,eco,Away") as any[];
    expect(section.name).toBe("section_presets");
    expect(
      section.schema[0].schema.map((f: { name: string }) => f.name),
    ).toEqual([
      "preset_show_eco",
      "preset_icon_eco",
      "preset_show_Away",
      "preset_icon_Away",
    ]);
  });

  it("renders no section without presets", () => {
    expect(computePresetsSection(undefined)).toEqual([]);
    expect(computePresetsSection("none")).toEqual([]);
  });

  it("computePresetFields defaults to shown and mirrors stored options", () => {
    expect(
      computePresetFields("eco,Away", {
        Away: { hidden: true, icon: "mdi:door" },
      }),
    ).toEqual({
      preset_show_eco: true,
      preset_icon_eco: undefined,
      preset_show_Away: false,
      preset_icon_Away: "mdi:door",
    });
  });

  it("extractPresetOptions folds synthetic fields into preset_options", () => {
    const value = extractPresetOptions({
      entity: "climate.x",
      preset_show_eco: false,
      preset_icon_eco: "mdi:leaf-circle",
      preset_show_Away: true,
      preset_icon_Away: "",
    } as any);
    expect(value).toEqual({
      entity: "climate.x",
      preset_options: { eco: { hidden: true, icon: "mdi:leaf-circle" } },
    } as any);
  });

  it("extractPresetOptions drops entries reset to defaults", () => {
    const value = extractPresetOptions({
      preset_options: { eco: { hidden: true } },
      preset_show_eco: true,
    } as any);
    expect(value).toEqual({} as any);
  });

  it("extractPresetOptions keeps options for undetected presets", () => {
    const value = extractPresetOptions({
      preset_options: { vacation: { hidden: true } },
      preset_show_eco: false,
    } as any);
    expect(value.preset_options).toEqual({
      vacation: { hidden: true },
      eco: { hidden: true },
    });
  });
});
