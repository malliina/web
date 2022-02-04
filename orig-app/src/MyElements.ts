import { html, LitElement } from 'lit';
import { ExtraProps } from './MyElement.js';
import { myElementsStyles } from './MyElementsStyles.js';

export class MyElements extends LitElement {
  static styles = [myElementsStyles];

  render() {
    const prop: ExtraProps = {
      age: 16,
      gender: 'M',
    };
    return html`
      <div>
        <my-element name="You there" .more=${prop}></my-element>
      </div>
    `;
  }
}
