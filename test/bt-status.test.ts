import { describe, expect, it } from "bun:test";
import {
  getConnectivityLostEntityId,
  getErrorEntityId,
  getLowBattery,
  isDegraded,
  parseErrorEntityId,
  parseLowBattery,
} from "../src/shared/bt-status";
import { BtClimateEntity } from "../src/shared/climate";

const entity = (attributes: Record<string, unknown>): BtClimateEntity =>
  ({ entity_id: "climate.test", state: "heat", attributes }) as any;

describe("parseLowBattery", () => {
  it("returns undefined without a batteries attribute", () => {
    expect(parseLowBattery(undefined, 10)).toBeUndefined();
  });

  it("returns undefined on malformed JSON", () => {
    expect(parseLowBattery("{not json", 10)).toBeUndefined();
  });

  it("finds the first battery below the threshold", () => {
    const raw = JSON.stringify({
      "sensor.a": { battery: "50" },
      "sensor.b": { battery: "5" },
      "sensor.c": { battery: "3" },
    });
    expect(parseLowBattery(raw, 10)).toEqual({ name: "sensor.b", battery: 5 });
  });

  it("returns undefined when all batteries are above the threshold", () => {
    const raw = JSON.stringify({ "sensor.a": { battery: "55" } });
    expect(parseLowBattery(raw, 10)).toBeUndefined();
  });

  it('treats binary "on" as low and "off" as full', () => {
    const on = JSON.stringify({ "binary_sensor.low": { battery: "on" } });
    expect(parseLowBattery(on, 10)).toEqual({
      name: "binary_sensor.low",
      battery: 9,
    });
    const off = JSON.stringify({ "binary_sensor.low": { battery: "off" } });
    expect(parseLowBattery(off, 10)).toBeUndefined();
  });

  it("respects a custom threshold", () => {
    const raw = JSON.stringify({ "sensor.a": { battery: "25" } });
    expect(parseLowBattery(raw, 10)).toBeUndefined();
    expect(parseLowBattery(raw, 30)).toEqual({ name: "sensor.a", battery: 25 });
  });
});

describe("parseErrorEntityId", () => {
  it("returns undefined without an errors attribute", () => {
    expect(parseErrorEntityId(undefined)).toBeUndefined();
  });

  it("returns undefined for malformed JSON, non-arrays and empty arrays", () => {
    expect(parseErrorEntityId("{oops")).toBeUndefined();
    expect(parseErrorEntityId('{"a":1}')).toBeUndefined();
    expect(parseErrorEntityId("[]")).toBeUndefined();
  });

  it("returns the first string entry", () => {
    expect(parseErrorEntityId('["climate.trv1","climate.trv2"]')).toBe(
      "climate.trv1",
    );
  });

  it("reads entity_id, entity or name from object entries", () => {
    expect(parseErrorEntityId('[{"entity_id":"climate.a"}]')).toBe("climate.a");
    expect(parseErrorEntityId('[{"entity":"climate.b"}]')).toBe("climate.b");
    expect(parseErrorEntityId('[{"name":"TRV C"}]')).toBe("TRV C");
  });
});

describe("config-aware wrappers", () => {
  it("debug flags force a warning", () => {
    expect(getLowBattery(entity({}), { debug_battery: true })).toEqual({
      name: "Debug Battery",
      battery: 5,
    });
    expect(getErrorEntityId(entity({}), { debug_connection: true })).toBe(
      "Debug Connection",
    );
    expect(isDegraded(entity({}), { debug_degraded: true })).toBe(true);
  });

  it("disable flags suppress warnings even when the attribute is present", () => {
    const batteries = JSON.stringify({ "sensor.a": { battery: "1" } });
    expect(
      getLowBattery(entity({ batteries }), { disable_battery_warning: true }),
    ).toBeUndefined();
    expect(
      getErrorEntityId(entity({ errors: '["climate.a"]' }), {
        disable_connection_lost_warning: true,
      }),
    ).toBeUndefined();
    expect(
      isDegraded(entity({ degraded_mode: true }), {
        disable_degraded_warning: true,
      }),
    ).toBe(false);
  });

  it("low_battery_threshold defaults to 10", () => {
    const batteries = JSON.stringify({ "sensor.a": { battery: "9" } });
    expect(getLowBattery(entity({ batteries }), {})).toEqual({
      name: "sensor.a",
      battery: 9,
    });
  });

  it("isDegraded requires degraded_mode === true", () => {
    expect(isDegraded(entity({ degraded_mode: true }), {})).toBe(true);
    expect(isDegraded(entity({ degraded_mode: "on" }), {})).toBe(false);
    expect(isDegraded(entity({}), {})).toBe(false);
  });
});

describe("getConnectivityLostEntityId", () => {
  const hassWith = (states: Record<string, string>) =>
    ({
      states: Object.fromEntries(
        Object.entries(states).map(([id, state]) => [
          id,
          { entity_id: id, state, attributes: {} },
        ]),
      ),
    }) as any;

  it("returns nothing when no signal entities are configured", () => {
    expect(getConnectivityLostEntityId(hassWith({}), {})).toBeUndefined();
    expect(
      getConnectivityLostEntityId(hassWith({}), undefined),
    ).toBeUndefined();
  });

  it("connectivity_entity: off/unavailable/unknown/missing mean unreachable", () => {
    const config = { connectivity_entity: "binary_sensor.ping" };
    expect(
      getConnectivityLostEntityId(
        hassWith({ "binary_sensor.ping": "on" }),
        config,
      ),
    ).toBeUndefined();
    for (const state of ["off", "unavailable", "unknown"]) {
      expect(
        getConnectivityLostEntityId(
          hassWith({ "binary_sensor.ping": state }),
          config,
        ),
      ).toBe("binary_sensor.ping");
    }
    expect(getConnectivityLostEntityId(hassWith({}), config)).toBe(
      "binary_sensor.ping",
    );
  });

  it("preset_entity doubles as a signal only when unavailable/unknown", () => {
    const config = { preset_entity: "select.mode" };
    expect(
      getConnectivityLostEntityId(hassWith({ "select.mode": "Home" }), config),
    ).toBeUndefined();
    expect(
      getConnectivityLostEntityId(
        hassWith({ "select.mode": "unavailable" }),
        config,
      ),
    ).toBe("select.mode");
    // A missing preset_entity is a config problem, not an outage.
    expect(getConnectivityLostEntityId(hassWith({}), config)).toBeUndefined();
  });

  it("disable_connection_lost_warning suppresses it", () => {
    expect(
      getConnectivityLostEntityId(hassWith({ "binary_sensor.ping": "off" }), {
        connectivity_entity: "binary_sensor.ping",
        disable_connection_lost_warning: true,
      }),
    ).toBeUndefined();
  });

  it("connectivity_entity wins over preset_entity as the badge target", () => {
    expect(
      getConnectivityLostEntityId(
        hassWith({
          "binary_sensor.ping": "off",
          "select.mode": "unavailable",
        }),
        {
          connectivity_entity: "binary_sensor.ping",
          preset_entity: "select.mode",
        },
      ),
    ).toBe("binary_sensor.ping");
  });
});
