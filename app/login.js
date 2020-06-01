import {reportaInvalidos} from '../templates/js/forms.js';
import { html } from './login.html.js';
import { css } from './login.css.js';

let f;

const ini = async () => {
  f = document.querySelector('form');
  document.querySelector('button.primario').addEventListener('click', entra);
};

const entra = () => {
  if(reportaInvalidos(f)) return;
  alert('ok');
};

export { html, css, ini };