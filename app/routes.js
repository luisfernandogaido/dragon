import * as home from './home.js';
import * as login from './login.js';

const routes = [
  { hash: '#home', html: home.html, ini: home.ini, css: home.css },
  { hash: '#login', html: login.html, ini: login.ini, css: login.css },
];

export { routes };

