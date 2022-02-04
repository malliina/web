import { property, state } from 'lit/decorators.js';
import { html, LitElement } from 'lit';
import { myElementStyles } from './MyElementStyles.js';

export interface ExtraProps {
  age: number;
  gender: 'M' | 'F' | 'Other';
}

export class MyElement extends LitElement {
  @property() name = 'person';

  @property({ type: Object, attribute: false }) more: ExtraProps = {
    age: 15,
    gender: 'F',
  };

  @state() clicks = 0;

  static styles = [myElementStyles];

  render() {
    return html`
      <p>
        Hello, ${this.name}! Your age is ${this.more.age} and gender
        ${this.more.gender}.
      </p>
      <button @click=${this.onButtonClick}>Increment</button>
      <p>Clicked ${this.clicks} times</p>
    `;
  }

  private onButtonClick() {
    this.clicks += 1;
  }
}
