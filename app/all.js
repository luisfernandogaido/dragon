//language=html
const html = `
    <h1>All</h1>
    <p>
        Esta é página all!
    </p>
    <p>
        Coisa linda de deus! Simplesmente sensacional!!
    </p>
    <button>Um botão</button>
`;

//language=css
const css = `
    body {
        background: lightgray;
    }
`;

const ini = async () => {
  document.querySelector('button').addEventListener('click', clica);
};

const clica = () => {
  alert('botão clicado!');
};

export { html, css, ini };