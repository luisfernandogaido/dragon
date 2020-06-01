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
    });
  });
  observer.observe(document.body, { attributes: true, childList: true, subtree: true });
};

const prevent = ev => {
  ev.preventDefault();
};

const sai = ev => {
  const el = ev.currentTarget;
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

const observer = new MutationObserver(registra);

window.addEventListener('load', () => {
  observer.observe(document.body, { attributes: true, childList: true, subtree: true });
  registra();
});
