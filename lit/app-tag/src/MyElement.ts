import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement("my-element")
export class MyElement extends LitElement {

  @property() name = "You"

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement
  }
}
