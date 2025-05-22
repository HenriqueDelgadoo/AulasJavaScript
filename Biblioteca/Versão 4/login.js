function exibirMensagem(texto, tipo) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = texto;

    // Define a classe de estilo com base no tipo (ex: "mensagemsucesso" ou "mensagemerro")
    mensagem.className = `mensagem ${tipo}`;
    mensagem.classList.remove("hidden");

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        mensagem.classList.add("hidden");
    }, 3000);
}

function validarLogin() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    // Usuário e senha fixos para validação
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        exibirMensagem("Login realizado com sucesso", "sucesso");

        // Redireciona após 1 segundo
        setTimeout(() => {
            window.location.href = "biblioteca3.html";
        }, 1000);
    } else {
        exibirMensagem("Usuário ou senha incorretos", "erro");
    }
}
