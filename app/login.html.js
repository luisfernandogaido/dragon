//language=html
let html = `
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
                    <input type="text" id="user" name="user" required>
                </div>
                <div class="mensagem"></div>
            </div>
            <div class="campo">
                <div class="rotulo">
                    <label for="pass">Senha</label>
                </div>
                <div class="controle">
                    <input type="password" id="pass" name="pass" required>
                </div>
                <div class="mensagem"></div>
            </div>
        </div>
        <div class="buttons">
            <button class="primario">Entrar</button>
            <button class="link">Criar conta</button>
            <button class="link">Recuperar senha</button>
        </div>
    </form>
`;

export { html };
