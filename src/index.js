function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

  return element;
}

class MyElement extends HTMLElement {
  constructor() {
    // always call super() first
    super();
    console.log('constructed!');
  }

  connectedCallback() {
    console.log('connected!');
  }

  disconnectedCallback() {
    console.log('disconnected!');
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log(`Attribute: ${name} changed!`);
  }

  adoptedCallback() {
    console.log('adopted!');
  }
}

window.customElements.define('my-element', MyElement);
// document.body.appendChild(component());
