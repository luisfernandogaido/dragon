import { routes } from './routes.js';

const style = document.querySelector('style');
const main = document.querySelector('main');
let last;
const files = new Map();

const loadPage = async () => {
  for (let route of routes) {
    if (window.location.hash.includes(route.hash)) {
      if (route == last) return;
      last = route;
      let module = route.module;
      let html = await loadContentOrFile(module.html, module.htmlFile);
      let css = await loadContentOrFile(module.css, module.cssFile);
      main.innerHTML = html;
      style.innerHTML = css;
      await module.ini();
      return;
    }
  }
  window.location.hash = '#home';
};

const loadContentOrFile = async (content, file) => {
  if (content) return content;
  if (!files.has(file)) {
    files.set(file, await fetch(file).then(res => res.text()));
  }
  return files.get(file);
};

window.addEventListener('popstate', loadPage);

loadPage().then();