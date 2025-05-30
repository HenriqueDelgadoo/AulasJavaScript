function cadastro() {
    const email = document.getElementById("email").value.trim(); 
    const usuario = document.getElementById("usuario").value.trim(); 
    const endereco = document.getElementById("endereco").value.trim(); 
    const numero = document.getElementById("numero").value.trim(); 
    const senha = document.getElementById("senha").value; 
    const csenha = document.getElementById("csenha").value; 
    let mensagem = "";

    if (!email.includes('@') || !email.includes('.')) {
        mensagem = "Por favor, insira um email válido.";
    } else if (!usuario) {
        mensagem = "Usuário é obrigatório.";
    } else if (senha.length < 6) {
        mensagem = "A senha precisa ter pelo menos 6 caracteres.";
    } else if (senha !== csenha) {
        mensagem = "As senhas não coincidem.";
    } else if (endereco === "" || numero === "") {
        mensagem = "Endereço e número são obrigatórios.";
    } else {
    
        const usuarios = JSON.parse(sessionStorage.getItem("usuarios")) || [];

        const existe = usuarios.some(u => u.usuario === usuario);
        if (existe) {
            mensagem = "Usuário já cadastrado.";
        } else {
            
            usuarios.push({ usuario, senha });

            
            sessionStorage.setItem("usuarios", JSON.stringify(usuarios));

            mensagem = "Cadastro realizado com sucesso!";
            
            setTimeout(() => {
                window.location.href = "login.html";
            }, 5000);
        }
    }

    
    document.getElementById("mensagem").innerText = mensagem;
}
