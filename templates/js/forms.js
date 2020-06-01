const registra = () => {
  observer.disconnect();
  document.querySelectorAll('form').forEach(f => {
    f.noValidate = true;
    f.addEventListener('submit', prevent);
  });
  observer.observe(document.body, { attributes: true, childList: true, subtree: true });
};

const prevent = ev => {
  ev.preventDefault();
};

const observer = new MutationObserver(registra);

window.addEventListener('load', () => {
  observer.observe(document.body, { attributes: true, childList: true, subtree: true });
  registra();
});
