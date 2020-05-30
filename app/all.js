//language=html
let html;

const ini = async () => {
  if (!html) {
    const res = await fetch('app/all.html');
    html = await res.text();
  }
  document.querySelector('main').innerHTML = html;
  document.querySelector('button').addEventListener('click', clica);
};

const clica = () => {
  console.log('botão clicado!');
};

export { ini };