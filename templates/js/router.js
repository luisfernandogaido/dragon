import * as inbox from './../../app/inbox.js';
import * as all from './../../app/all.js';

const routes = [
  { hash: '#inbox', html: inbox.html, ini: inbox.ini, css: inbox.css },
  { hash: '#all', html: all.html, ini: all.ini, css: all.css },
];

const style = document.querySelector('style');
const main = document.querySelector('main');

const loadPage = async ev => {
  for (let r of routes) {
    if (window.location.hash.includes(r.hash)) {
      style.innerHTML = r.css;
      main.innerHTML = r.html;
      await r.ini();
      return;
    }
  }
  window.location.hash = '#inbox';
};

window.addEventListener('popstate', loadPage);

loadPage().then();