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

    const usuarios = JSON.parse(sessionStorage.getItem("usuarios")) || [];

    
    if ((usuario === "admin" && senha === "1234") ||
        (usuario.toLowerCase() === "joao" && senha === "1234")) {
        exibirMensagem("Login realizado com sucesso", "sucesso");
        setTimeout(() => {
            window.location.href = (usuario === "admin") ? "pizzaria1.html" : "pizzaria.html";
        }, 1000);
        return;
    }

    
    const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

    if (usuarioEncontrado) {
        exibirMensagem("Login realizado com sucesso", "sucesso");
        setTimeout(() => {
            window.location.href = "pizzaria.html";
        }, 1000);
    } else {
        exibirMensagem("Usuário ou senha incorretos", "erro");
    }
}
