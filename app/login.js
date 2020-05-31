//language=html
const html = `
    <header>
        <a href="javascript:history.back()" class="button icon back"></a>
    </header>
    <form>
        <div class="campos">
            <div class="campo">
                <div class="rotulo">
                    <label for="user">Usuário</label>
                </div>
                <div class="controle">
                    <input type="text" id="user" name="user">
                </div>
                <div class="mensagem"></div>
            </div>
            <div class="campo">
                <div class="rotulo">
                    <label for="pass">Senha</label>
                </div>
                <div class="controle">
                    <input type="password" id="pass" name="pass">
                </div>
                <div class="mensagem"></div>
            </div>
        </div>
        <div class="buttons">
            <button class="primario">Entrar</button>
            <button>Criar conta</button>
            <button>Recuperar senha</button>
        </div>
    </form>
`;

//language=css
const css = `

    @media (min-width: 1024px) {
        form {
            width: 350px;
            margin: auto;
        }
    }
`;

const ini = async () => {

};

export { html, css, ini };