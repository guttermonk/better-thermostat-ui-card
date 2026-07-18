import { css, unsafeCSS } from "lit";
import { CLIMATE_PRESET_DEFAULT_RGB } from "./climate-colors";

// BT preset color RGB triplets, consumed as rgb(var(--bt-state-*)) /
// rgba(var(--bt-state-*), a). Themes may override them. The values live in
// CLIMATE_PRESET_DEFAULT_RGB so the editor's "Default" swatches stay in
// sync. Superseded by the --bt-color-* full-color layer in Phase 7.
export const btStateColorsStyle = css`
  :host {
    ${unsafeCSS(
      Object.entries(CLIMATE_PRESET_DEFAULT_RGB)
        .map(([key, rgb]) => `--bt-state-${key}: ${rgb};`)
        .join("\n    "),
    )}
  }
`;

// Smooth timed transitions for state changes + an appearance animation for the
// card and its elements. Scoped to color/background/box-shadow/opacity so we
// never transition transform/layout (which would fight slider interactions).
export const btAnimationsStyle = css`
  @keyframes bt-fade-in {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :host,
  ha-card {
    animation: bt-fade-in 300ms ease-out both;
  }

  /* Spinner shown on a preset button while its service call round-trips
     (slow integrations, e.g. ecobee via HomeKit, can take 20-30 s). */
  @keyframes bt-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ha-icon.bt-pending,
  bt-icon.bt-pending {
    display: inline-flex;
    animation: bt-spin 1s linear infinite;
  }

  .info,
  .label,
  .state,
  .primary-state,
  .target-button,
  .label-container,
  .buttons,
  .bt-buttons,
  .actions,
  ha-big-number,
  ha-control-circular-slider,
  cts-hui-card-features,
  :host > *::before,
  ha-control-circular-slider::after {
    transition:
      color 200ms ease,
      background-color 200ms ease,
      background 200ms ease,
      box-shadow 200ms ease,
      opacity 200ms ease;
  }

  @media (prefers-reduced-motion: reduce) {
    :host,
    ha-card {
      animation: none;
    }
    /* Keep the pending spinner: it carries state, not decoration — a static
       mdi:loading glyph would just look broken. */
    .info,
    .label,
    .state,
    .primary-state,
    .target-button,
    .label-container,
    .buttons,
    .bt-buttons,
    .actions,
    ha-big-number,
    ha-control-circular-slider,
    cts-hui-card-features,
    :host > *::before,
    ha-control-circular-slider::after {
      transition: none;
    }
  }
`;
