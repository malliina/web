import { OrigApp } from './OrigApp.js';
import { MyElement } from './MyElement.js';
import { MyElements } from './MyElements.js';
import { DirectElement } from './DirectElement.js';

customElements.define('orig-app', OrigApp);
customElements.define('my-element', MyElement);
customElements.define('my-elements', MyElements);
customElements.define('my-direct', DirectElement);
