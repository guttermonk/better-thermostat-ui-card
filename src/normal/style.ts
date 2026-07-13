import { css } from "lit";

export const ShadowStyles = css`
  :host {
    position: relative;
    display: block;
    height: 100%;
    width: 100% !important;
    box-sizing: border-box;
    overflow: visible;
    --default-deep-orange: 244, 99, 108 !important;
  }
  ha-card {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    /* flex-start (not space-between): in a grid cell taller than the
       content, leftover height must stay at the bottom — splitting it
       around the dial separates the actions from the dial band their
       overlap is calibrated against. */
    justify-content: flex-start;
    padding-left: 1em;
    padding-right: 1em;
    overflow: hidden;
  }

  .title {
    width: 100%;
    font-size: var(--ha-font-size-l);
    line-height: var(--ha-line-height-expanded);
    padding: 8px 30px 8px 30px;
    margin: 0;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: none;
  }

  mushroom-climate-hvac-modes-control {
    justify-content: center !important;
  }

  .more-info {
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    inset-inline-end: 0px;
    inset-inline-start: initial;
    border-radius: 100%;
    color: var(--secondary-text-color);
    direction: var(--direction);
  }

  cts-hui-card-features {
    width: 100%;
    flex: none;
    padding: 0 12px 12px 12px;
  }

  ha-control-circular-slider {
    width: 100%;
    --control-circular-slider-color: var(--state-color, var(--disabled-color));
  }

  ha-control-circular-slider {
    --default-deep-orange: 244, 99, 108 !important;
    --control-circular-slider-color: var(
      --state-color,
      var(--primary-text-color)
    );
    --control-circular-slider-low-color: var(
      --low-color,
      var(--disabled-color)
    );
    --control-circular-slider-high-color: var(
      --high-color,
      var(--disabled-color)
    );
  }

  hui-climate-preset-modes-card-feature
    ha-control-select-menu
    .select-anchor
    .content {
    display: none;
  }

  ::slotted(mushroom-button-group) {
    display: none;
  }

  ha-control-circular-slider::after {
    display: block;
    content: "";
    position: absolute;
    top: -10%;
    left: -10%;
    right: -10%;
    bottom: -10%;
    background: radial-gradient(
      50% 50% at 50% 50%,
      var(--action-color, transparent) 0%,
      transparent 100%
    );
    opacity: 0.15;
    pointer-events: none;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
    flex: 1;
    min-height: 0;
  }

  /* Like the HA core thermostat card: if the dial ever exceeds the container
     (a transient before the measured height cap applies), clip it rather
     than let it paint over the title and actions. The max-height keeps the
     container flush with the 320px-capped dial in oversized grid cells, so
     the actions always sit directly under the dial. */
  ha-card > .container {
    overflow: hidden;
    max-height: 320px;
  }

  /* Zero-width spacer pinning the container's intrinsic height to the
     dial's natural size (like HA core's padding-top: 100% spacer, capped at
     the 320px dial maximum). Without it, an auto-height container is only as
     tall as the (possibly height-capped) dial itself, so one transient
     constraint — e.g. the edit dialog opening — ratchets the measured cap
     down for good: container height = capped dial = next measurement. In
     fixed-height layouts flex (1 1 0 + min-height: 0) still shrinks the
     container below the spacer, so the sections cap keeps working. */
  ha-card > .container::before {
    content: "";
    display: block;
    padding-top: min(320px, 100%);
  }

  .container > .bt-wrapper {
    width: 100%;
    max-width: 320px;
    aspect-ratio: 1 / 1;
    max-height: 100%;
    margin: 0 auto;
    position: relative;
    container-type: inline-size;
    container-name: container;
    box-sizing: border-box;
  }

  .info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    font-size: var(--ha-font-size-l);
    line-height: var(--ha-line-height-normal);
    letter-spacing: 0.1px;
    gap: var(--ha-space-2);
    --mdc-icon-size: 16px;
  }

  /* The info overlay covers the whole dial. Its text elements (full-width
     label strips, big number) must NOT capture clicks/touches, or they create
     invisible dead zones on the slider ring — only genuinely interactive
     children get pointer-events (warning icons set it inline). */
  .info * {
    margin: 0;
  }

  .info .target-button {
    pointer-events: auto;
  }

  .label {
    width: 100%;
    font-weight: var(--ha-font-weight-medium);
    text-align: center;
    color: var(--action-color, inherit);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: var(--ha-line-height-normal);
    min-height: 1.5em;
    white-space: nowrap;
  }

  .label span {
    white-space: nowrap;
  }

  .label ha-svg-icon {
    bottom: 5%;
  }

  .label.disabled {
    color: var(--secondary-text-color);
  }

  .primary-state {
    font-size: 36px;
  }

  .label-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 6px;
  }

  .label-container .label {
    width: auto !important;
  }

  .label.humidity {
    color: var(--bt-color-humidity);
  }

  .buttons {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    gap: var(--ha-space-6, 24px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }
  .buttons > * {
    pointer-events: auto;
  }

  /* Size breakpoints against the dial wrapper's width (it declares
     container-name: container). Cutoffs like HA core's circular-slider
     state controls (md ≥190, sm ≥130, xs below), except the compact
     typography already starts at 290px: this card stacks more info rows
     (secondary + humidity) than core, and at full size they crowd the
     plus/minus buttons, which stay visible down to 250px. Container queries
     instead of observer-driven classes: the class variant could keep a stale
     size when observations moved between elements. */
  @container container (width < 290px) {
    ha-big-number {
      font-size: 44px;
    }
    .state {
      font-size: var(--ha-font-size-3xl);
    }
    .info {
      margin-top: 12px;
      gap: 6px;
    }
  }

  @container container (width < 250px) {
    .buttons {
      display: none;
    }
    ha-control-circular-slider {
      margin-bottom: -16px;
    }
  }

  @container container (width < 190px) {
    ha-big-number {
      font-size: var(--ha-font-size-4xl);
    }
    .state {
      font-size: var(--ha-font-size-2xl);
    }
    .info {
      font-size: var(--ha-font-size-m);
      gap: 2px;
      --mdc-icon-size: 14px;
    }
  }

  @container container (width < 130px) {
    .state {
      font-size: var(--ha-font-size-l);
    }
    .info {
      font-size: var(--ha-font-size-l);
      gap: var(--ha-space-2);
      --mdc-icon-size: 16px;
    }
    .label {
      display: none;
    }
  }

  .bt-buttons {
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: center;
    padding: 1em 0;
    padding-top: 0;
  }

  .actions {
    padding: 0 12px 12px 12px;
    /* Breathing room between the dial's arc ends and the mode buttons —
       the no-buttons rule below replaces it with the overlap pull-up. */
    margin-top: 8px;
    justify-content: center;
    gap: 18px;
  }

  /* No plus/minus buttons rendered (disable_buttons, or no adjustable
     target): the dial's 270° arc leaves ~14% of the square wrapper empty at
     the bottom, where the buttons normally sit — pull the actions up over
     that band. Deliberately NOT a negative margin on the wrapper: the dial
     is sized from .container's observed height, so shrinking the container
     would shrink the dial in a feedback loop. render() computes
     --bt-actions-margin from the dial's measured size and leaves it unset
     on dials whose band can't fit the button row (height-capped sections) —
     those fall back to stacking below with the same 8px gap as the
     buttons-shown case. The overlapped .actions must be lifted above the
     positioned .container (which otherwise hit-tests first and eats the
     clicks), while its own empty space stays click-through for the slider
     arc underneath. */
  ha-card.no-buttons .actions {
    margin-top: var(--bt-actions-margin, 8px);
    position: relative;
    z-index: 1;
    pointer-events: none;
  }
  ha-card.no-buttons .actions > * {
    pointer-events: auto;
  }

  .dual {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }

  .target-button {
    outline: none;
    background: none;
    color: inherit;
    font: inherit;
    border: none;
    opacity: 0.7;
    padding: 0;
    transition:
      opacity 180ms ease-in-out,
      transform 180ms ease-in-out;
    cursor: pointer;
  }

  .target-button.selected {
    opacity: 1;
  }

  .target-button:focus-visible {
    transform: scale(1.1);
  }

  .label.hvac_action {
    color: var(--action-color, inherit) !important;
  }

  .label.window-label {
    color: var(--info-color, inherit);
    --mdc-icon-size: clamp(20px, 15cqmin, 75px);
  }

  .label.summer-label {
    color: var(--bt-color-summer);
    --mdc-icon-size: clamp(20px, 15cqmin, 75px);
  }

  .label.secondary:not(.label.humidity) {
    color: var(--action-color, inherit);
    gap: clamp(2px, 1.8cqmin, 8px);
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  /* Device unreachable (connectivity_entity / preset_entity signal): preset
     changes won't stick, so dim the buttons — still clickable. */
  mushroom-button.bt-offline {
    opacity: 0.4;
  }

  /* HVAC mode buttons: natural-size buttons centered like the preset row —
     not a stretched mushroom-button-group — so both rows match. */
  .modes-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  /* show_all_presets: dedicated preset row below the mode buttons. The
     margin separates it from that row — drop it when the presets are the
     only actions row, or the gap under the dial doubles up. */
  .preset-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 12px;
  }

  .actions > .preset-row:first-child {
    margin-top: 0;
  }

  /* Base overlay skeleton comes from the shared presetOverlayStyle. */
  .preset-select {
    justify-content: center;
    align-content: center;
    gap: 12px;
    flex-wrap: wrap;
    background-color: rgba(var(--rgb-card-background-color), 0.6);
    padding: 16px;
  }
`;
