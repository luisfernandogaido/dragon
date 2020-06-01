import * as alerta from '../templates/js/alerta.js';

//language=html
const html = `
    <header>
        <a href="javascript:history.back()" class="button icon back"></a>
        <span>Demo Form</span>
    </header>
    <form>
        <div class="campos">
            <div class="campo">
                <div class="rotulo">
                    <label for="nome">Nome</label>
                </div>
                <div class="controle">
                    <input type="text" id="nome" name="nome" required pattern="^[a-z]$">
                </div>
                <div class="mensagem">Luís Fernando Gaido</div>
            </div>
            <div class="campo">
                <div class="rotulo">
                    <label for="idade">Idade</label>
                </div>
                <div class="controle">
                    <input type="number" id="idade" name="idade" min="0" required>
                </div>
                <div class="mensagem"></div>
            </div>
            <div class="campo">
                <div class="rotulo">
                    <label for="sexo">Sexo</label>
                </div>
                <div class="controle">
                    <label>
                        <input type="radio" name="sexo" value="M">
                        Masculino
                    </label>
                    <label>
                        <input type="radio" name="sexo" value="F">
                        Feminino
                    </label>
                </div>
                <div class="mensagem"></div>
            </div>
        </div>
    </form>

    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>
    <p>luís fernando gaido</p>

`;

//language=css
let css = `
    @media (min-width: 1024px) {
        form {
            width: 350px;
            margin: auto;
        }
    }
`;

const ini = async () => {
  alerta.show('oi');
};

export { html, css, ini };