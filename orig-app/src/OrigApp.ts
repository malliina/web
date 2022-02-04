import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { origAppStyles } from './OrigAppStyles.js';

export class OrigApp extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = [origAppStyles];

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>

        <p>Edit <code>src/OrigApp.ts</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>
      <my-element></my-element>
      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}
