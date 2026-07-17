import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./bt-icon";

// Clone of mushroom-badge-icon that renders through bt-icon instead of
// <ha-icon>, so badge icons don't depend on HA's async icon resolution.
@customElement("bt-badge-icon")
export class BtBadgeIcon extends LitElement {
  @property() public icon: string = "";

  protected render(): TemplateResult {
    return html`
      <div class="badge">
        <bt-icon .icon=${this.icon}></bt-icon>
      </div>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        --main-color: rgb(var(--rgb-grey));
        --icon-color: rgb(var(--rgb-white));
      }
      .badge {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        width: var(--badge-size);
        height: var(--badge-size);
        font-size: var(--badge-size);
        border-radius: var(--badge-border-radius);
        background-color: var(--main-color);
        transition: background-color 280ms ease-in-out;
      }
      .badge bt-icon {
        --mdc-icon-size: var(--badge-icon-size);
        color: var(--icon-color);
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "bt-badge-icon": BtBadgeIcon;
  }
}
