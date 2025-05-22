function exibirMensagem(texto, tipo) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = texto;
    mensagem.className = `mensagem ${tipo}`;
    mensagem.classList.remove("hidden");

    setTimeout(() => {
        mensagem.classList.add("hidden");
    }, 3000);
}

function validarLogin() {
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (usuario === "admin" && senha === "1234") {
        exibirMensagem("Login realizado com sucesso", "sucesso");
        setTimeout(() => {
            window.location.href = "pizzaria1.html";
        }, 1000);
    } else if (usuario.toLowerCase() === "joao" && senha === "1234") {
        exibirMensagem("Login realizado com sucesso", "sucesso");
        setTimeout(() => {
            window.location.href = "pizzaria.html";
        }, 1000);
    } else {
        exibirMensagem("Usuário ou senha incorretos", "erro");
    }
}
