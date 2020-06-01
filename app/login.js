import { html } from './login.html.js';
import { css } from './login.css.js';

const ini = async () => {
  document.querySelector('button.primario').addEventListener('click', entra);
};

const entra = () => {
  console.log('entra');
};

export { html, css, ini };