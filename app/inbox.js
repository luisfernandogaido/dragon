//language=html
const html = `
    <h1>Inbox</h1>
    <p>
        Esta é página inbox!
    </p>
    <p>
        Toda carregada localmente, assim como a aplicação!
    </p>
`;

const ini = async () => {
  document.querySelector('main').innerHTML = html;
};

export { ini };