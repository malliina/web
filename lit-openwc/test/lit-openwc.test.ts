import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { LitOpenwc } from '../src/LitOpenwc.js';
import '../src/lit-openwc.js';

describe('LitOpenwc', () => {
  let element: LitOpenwc;
  beforeEach(async () => {
    element = await fixture(html`<lit-openwc></lit-openwc>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
