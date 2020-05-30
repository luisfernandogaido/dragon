import { routes } from '../../app/routes.js';

const style = document.querySelector('style');
const main = document.querySelector('main');
let last;

const loadPage = async ev => {
  for (let route of routes) {
    if (window.location.hash.includes(route.hash)) {
      if (route == last) return;
      last = route;
      style.innerHTML = route.css;
      main.innerHTML = route.html;
      await route.ini();
      return;
    }
  }
  window.location.hash = '#home';
};

window.addEventListener('popstate', loadPage);

loadPage().then();