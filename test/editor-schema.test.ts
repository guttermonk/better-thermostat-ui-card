import { describe, expect, it } from "bun:test";
import {
  computeColorsSchema,
  prunePresetOptions,
  splitPresets,
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

describe("presets panel helpers", () => {
  it("splitPresets parses the joined list, skipping 'none'", () => {
    expect(splitPresets("none,eco,Away")).toEqual(["eco", "Away"]);
    expect(splitPresets(undefined)).toEqual([]);
    expect(splitPresets("")).toEqual([]);
  });

  it("prunePresetOptions drops default entries and empty objects", () => {
    expect(
      prunePresetOptions({
        eco: { hidden: true, icon: "mdi:leaf-circle" },
        Away: {},
        Home: { hidden: undefined, icon: "" },
      }),
    ).toEqual({ eco: { hidden: true, icon: "mdi:leaf-circle" } });
    expect(prunePresetOptions({ eco: {} })).toBeUndefined();
    expect(prunePresetOptions({})).toBeUndefined();
  });
});
