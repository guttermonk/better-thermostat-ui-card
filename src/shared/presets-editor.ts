import { css, CSSResultGroup, html, LitElement, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { guard } from "lit/directives/guard.js";
import type { PropertyValues } from "lit";
import type { SortableEvent } from "sortablejs";
import { fireEvent, HomeAssistant } from "mushroom-cards/src/ha";
import { sortableStyles } from "mushroom-cards/src/ha/resources/ha-sortable-styles";
import { PresetDisplayOptions } from "./climate";
import "./bt-icon";

// Same lazy singleton pattern as mushroom's chips editor — sortablejs is
// only pulled in when a presets panel actually renders.
let Sortable: any;

declare global {
  interface HASSDomEvents {
    "bt-presets-changed": {
      order: string[];
      options: Record<string, PresetDisplayOptions>;
    };
  }
  interface HTMLElementTagNameMap {
    "bt-presets-editor": BtPresetsEditor;
  }
}

const ICON_SELECTOR = { icon: {} };
const COLOR_SELECTOR = { ui_color: {} };
const BOOLEAN_SELECTOR = { boolean: {} };

// Row list for the editors' "Presets" section: one row per detected preset
// with a drag handle (reorder), an icon picker, a color picker and a
// visibility switch. Emits the full order + options snapshot; the card
// editor owns pruning and writing the config.
@customElement("bt-presets-editor")
export class BtPresetsEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  // Detected presets, already in display order (caller applies preset_order).
  @property({ attribute: false }) public presets: string[] = [];

  @property({ attribute: false }) public options?: Record<
    string,
    PresetDisplayOptions
  >;

  // Display name per preset (HA translations / select option formatting).
  @property({ attribute: false }) public getLabel?: (preset: string) => string;

  // Localized "Show {preset}" template for the switch tooltip.
  @property() public showLabelTemplate?: string;

  // Localized label for the color picker column.
  @property() public colorLabel?: string;

  @state() private _attached = false;

  @state() private _renderEmptySortable = false;

  private _sortable?: any;

  public connectedCallback() {
    super.connectedCallback();
    this._attached = true;
  }

  public disconnectedCallback() {
    super.disconnectedCallback();
    this._attached = false;
  }

  protected render() {
    if (!this.hass) return nothing;
    return html`
      <div class="presets">
        ${guard([this.presets, this._renderEmptySortable], () =>
          this._renderEmptySortable
            ? ""
            : this.presets.map((preset) => this._renderRow(preset)),
        )}
      </div>
    `;
  }

  private _renderRow(preset: string) {
    const entry = this.options?.[preset];
    const label = this.getLabel?.(preset) ?? preset;
    const showLabel = (this.showLabelTemplate ?? "Show {preset}").replace(
      "{preset}",
      label,
    );
    return html`
      <div class="preset-row">
        <div class="handle">
          <bt-icon icon="mdi:drag"></bt-icon>
        </div>
        <ha-selector
          class="icon"
          .hass=${this.hass}
          .selector=${ICON_SELECTOR}
          .label=${label}
          .value=${entry?.icon ?? ""}
          @value-changed=${(ev: CustomEvent<{ value?: string }>) =>
            this._iconChanged(preset, ev)}
        ></ha-selector>
        <ha-selector
          class="color"
          .hass=${this.hass}
          .selector=${COLOR_SELECTOR}
          .label=${this.colorLabel ?? "Color"}
          .value=${entry?.color ?? ""}
          @value-changed=${(ev: CustomEvent<{ value?: string }>) =>
            this._colorChanged(preset, ev)}
        ></ha-selector>
        <ha-selector
          class="show"
          title=${showLabel}
          aria-label=${showLabel}
          .hass=${this.hass}
          .selector=${BOOLEAN_SELECTOR}
          .value=${!entry?.hidden}
          @value-changed=${(ev: CustomEvent<{ value?: boolean }>) =>
            this._visibilityChanged(preset, ev)}
        ></ha-selector>
      </div>
    `;
  }

  protected updated(changedProps: PropertyValues): void {
    super.updated(changedProps);

    const attachedChanged = changedProps.has("_attached");
    const presetsChanged = changedProps.has("presets");

    if (!presetsChanged && !attachedChanged) {
      return;
    }

    if (attachedChanged && !this._attached) {
      this._sortable?.destroy();
      this._sortable = undefined;
      return;
    }

    if (!this._sortable && this.presets.length) {
      this._createSortable();
      return;
    }

    if (presetsChanged) {
      this._handlePresetsChanged();
    }
  }

  // Force the guard()ed list to re-render from scratch after an external
  // presets change — sortablejs moved DOM nodes behind lit's back.
  private async _handlePresetsChanged() {
    this._renderEmptySortable = true;
    await this.updateComplete;
    const container = this.shadowRoot!.querySelector(".presets")!;
    while (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
    this._renderEmptySortable = false;
  }

  private async _createSortable() {
    if (!Sortable) {
      const sortableImport = await import(
        "sortablejs/modular/sortable.core.esm"
      );
      Sortable = sortableImport.Sortable;
      Sortable.mount(sortableImport.OnSpill);
      Sortable.mount(sortableImport.AutoScroll());
    }

    this._sortable = new Sortable(this.shadowRoot!.querySelector(".presets"), {
      animation: 150,
      fallbackClass: "sortable-fallback",
      handle: ".handle",
      onEnd: (evt: SortableEvent) => this._rowMoved(evt),
    });
  }

  private _rowMoved(ev: SortableEvent): void {
    if (ev.oldIndex === ev.newIndex) return;
    const order = this.presets.concat();
    order.splice(ev.newIndex!, 0, order.splice(ev.oldIndex!, 1)[0]);
    this._fireChanged(order, this.options ?? {});
  }

  private _iconChanged(preset: string, ev: CustomEvent<{ value?: string }>) {
    ev.stopPropagation();
    this._fireChanged(this.presets, {
      ...this.options,
      [preset]: {
        ...this.options?.[preset],
        icon: ev.detail.value || undefined,
      },
    });
  }

  private _colorChanged(preset: string, ev: CustomEvent<{ value?: string }>) {
    ev.stopPropagation();
    this._fireChanged(this.presets, {
      ...this.options,
      [preset]: {
        ...this.options?.[preset],
        color: ev.detail.value || undefined,
      },
    });
  }

  private _visibilityChanged(
    preset: string,
    ev: CustomEvent<{ value?: boolean }>,
  ) {
    ev.stopPropagation();
    this._fireChanged(this.presets, {
      ...this.options,
      [preset]: {
        ...this.options?.[preset],
        hidden: ev.detail.value ? undefined : true,
      },
    });
  }

  private _fireChanged(
    order: string[],
    options: Record<string, PresetDisplayOptions>,
  ) {
    fireEvent(this, "bt-presets-changed", { order: [...order], options });
  }

  static get styles(): CSSResultGroup {
    return [
      sortableStyles,
      css`
        .preset-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .preset-row .handle {
          cursor: move;
          color: var(--secondary-text-color);
          display: flex;
        }

        .preset-row .handle > * {
          pointer-events: none;
        }

        .preset-row .icon {
          flex: 1;
          min-width: 0;
        }

        .preset-row .color {
          width: 140px;
          flex: none;
        }
      `,
    ];
  }
}
