const registra = () => {
  observer.disconnect();
  document.querySelectorAll('form').forEach(f => {
    f.noValidate = true;
    f.addEventListener('submit', prevent);
    f.querySelectorAll('input, select, textarea').forEach(el => {
      const campo = el.parentNode.parentNode;
      let msg = campo.querySelector('.mensagem');
      if (!msg) msg = campo.parentNode.querySelector('.mensagem');
      if (!('msg' in el)) {
        el.msg = msg.textContent;
      }
      if (el.required) {
        campo.classList.add('required');
      } else {
        campo.classList.remove('required');
      }
      el.addEventListener('blur', sai);
      el.addEventListener('keydown', enter);
    });
  });
  observer.observe(document.body, { attributes: true, childList: true, subtree: true });
};

const prevent = ev => {
  ev.preventDefault();
};

const validaCampo = el => {
  const campo = el.parentNode.parentNode;
  let msg = campo.querySelector('.mensagem');
  if (!msg) msg = campo.parentNode.querySelector('.mensagem');
  if (el.checkValidity()) {
    campo.classList.remove('invalid');
    msg.textContent = el.msg;
  } else {
    campo.classList.add('invalid');
    msg.textContent = el.validationMessage;
  }
};

const sai = ev => {
  validaCampo(ev.currentTarget);
};

const enter = ev => {
  if (ev.key != 'Enter') return;
  validaCampo(ev.currentTarget);
};

const observer = new MutationObserver(registra);

window.addEventListener('load', () => {
  observer.observe(document.body, { attributes: true, childList: true, subtree: true });
  registra();
});

const reportaInvalidos = f => {
  f.querySelectorAll('input, textarea, select').forEach(el => {
    validaCampo(el);
  });
  return f.querySelector('input:invalid, textarea:invalid, select:invalid') != null;
};

export { reportaInvalidos };