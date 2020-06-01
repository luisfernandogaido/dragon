const alerta = document.getElementById('alerta');
const close = document.querySelector('#alerta .close');
const message = document.querySelector('#alerta .msg');
let timer;

const show = (msg, sec = 3600) => {
  message.textContent = msg;
  alerta.classList.add('show');
  timer = setTimeout(hide, 1000 * sec);
};

const hide = () => {
  clearTimeout(timer);
  alerta.classList.remove('show');
};

close.addEventListener('click', hide);

export { show, hide };