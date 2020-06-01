import './router.js';
import './buttons.js?2';
import './aut.js';
import './forms.js';
import './alerta.js';

const show = el => {
  el.classList.remove('hide');
};

const hide = el => {
  el.classList.add('hide');
};

const searchPars = () => {
  const i = location.hash.indexOf('?');
  if (i == -1) return new URLSearchParams();
  return new URLSearchParams(location.hash.substr(i));
};

const setSearchPars = (pars, replace = false) => {
  const [hash] = window.location.hash.split('?');
  if (hash + '?' + pars == window.location.hash) return;
  if (replace) window.history.replaceState(null, null, hash + (pars.toString() ? '?' + pars : ' '));
  else window.history.pushState(null, null, hash + (pars.toString() ? '?' + pars : ' '));
};

show(document.body);

export { show, hide, searchPars, setSearchPars };