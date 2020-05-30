import * as inbox from './../../app/inbox.js';
import * as all from './../../app/all.js';

import { loadFile } from './css.js';

const routes = [
  { hash: '#inbox', ini: inbox.ini, css: inbox.cssFile },
  { hash: '#all', ini: all.ini, css: all.cssFile },
];

const loadPage = async ev => {
  for (let r of routes) {
    if (window.location.hash.includes(r.hash)) {
      await loadFile(r.css);
      await r.ini();
      return;
    }
  }
  window.location.hash = '#inbox';
};

window.addEventListener('popstate', loadPage);

loadPage().then();