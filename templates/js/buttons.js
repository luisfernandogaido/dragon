import * as d from './dragon.js';

const registra = () => {
  document.querySelectorAll('.button-options > button').forEach(el => {
    el.addEventListener('click', show);
  });
};

const show = ev => {
  const b = ev.currentTarget;
  ev.stopPropagation();
  const pars = d.searchPars();
  pars.set('button-options', '1');
  d.setSearchPars(pars);
  setTimeout(() => {
    b.parentNode.querySelector('div').classList.add('show');
  }, 25);

};

const hide = () => {
  const optionsShowed = document.querySelector('.button-options div.show');
  if (optionsShowed) {
    setTimeout(() => {
      optionsShowed.classList.remove('show');
      window.history.back();
    }, 50);
  }
};

window.addEventListener('load', () => {
  // const observer = new MutationObserver(registra);
  // observer.observe(document.body, { attributes: true, childList: true, subtree: true });
  // registra();
  // const pars = d.searchPars();
  // if (pars.has('button-options')) window.history.back();
});

window.addEventListener('popstate', () => {
  const pars = d.searchPars();
  if (!pars.has('button-options')) {
    const optionsShowed = document.querySelector('.button-options div.show');
    if (optionsShowed) {
      optionsShowed.classList.remove('show');
    }
  }
});

document.body.addEventListener('click', hide);
document.body.addEventListener('keydown', ev => {
  if (ev.key != 'Escape') return;
  hide();
});