import * as home from '../../app/home.js';
import * as login from '../../app/login.js';
import * as demoForm from '../../app/demo-form.js';

const routes = [
  { hash: '#home', module: home },
  { hash: '#login', module: login },
  { hash: '#demo-form', module: demoForm },
];

export { routes };

