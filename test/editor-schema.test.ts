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
  it("offers only the entity's hvac modes — presets moved to their section", () => {
    const schema = computeColorsSchema("heat,cool,off");
    expect(pickerNames(schema)).toEqual(["cool", "heat"]);
  });

  it("never offers a picker for off — it is intentionally grey", () => {
    expect(pickerNames(computeColorsSchema(undefined))).not.toContain("off");
    expect(pickerNames(computeColorsSchema("off"))).toEqual([]);
  });

  it("falls back to all hvac keys (minus off) when the entity is unknown", () => {
    expect(pickerNames(computeColorsSchema(undefined))).toEqual([
      "auto",
      "cool",
      "dry",
      "fan_only",
      "heat",
      "heat_cool",
    ]);
  });

  it("shows the card's default color via a synthetic 'default' option", () => {
    const schema = computeColorsSchema(
      "heat,heat_cool",
      undefined,
      undefined,
      "Default",
    ) as any;
    const grid = schema.schema.find(
      (child: { type?: string }) => child.type === "grid",
    );
    for (const field of grid.schema) {
      expect(field.selector.ui_color.default_color).toBe("default");
      expect(field.selector.ui_color.extra_options).toEqual([
        {
          value: "default",
          label: "Default",
          display_color: `rgb(var(--rgb-state-climate-${field.name.replace(/_/g, "-")}))`,
        },
      ]);
    }
  });

  it("nests values under the colors config key (non-flattened section)", () => {
    const schema = computeColorsSchema("heat") as any;
    expect(schema.name).toBe("colors");
    expect(schema.type).toBe("expandable");
    expect(schema.flatten).toBeUndefined();
  });

  it("offers the color_source dropdown with the passed labels", () => {
    const schema = computeColorsSchema(
      "heat",
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
        Wake: { color: "purple" },
        Away: {},
        Home: { hidden: undefined, icon: "", color: "" },
      }),
    ).toEqual({
      eco: { hidden: true, icon: "mdi:leaf-circle" },
      Wake: { color: "purple" },
    });
    expect(prunePresetOptions({ eco: {} })).toBeUndefined();
    expect(prunePresetOptions({})).toBeUndefined();
  });
});
