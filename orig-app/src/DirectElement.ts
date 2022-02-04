import { html, LitElement } from 'lit';

export class DirectElement extends LitElement {
  render() {
    return html` <div>Hello, directly</div> `;
  }

  protected createRenderRoot() {
    return this;
  }
}
