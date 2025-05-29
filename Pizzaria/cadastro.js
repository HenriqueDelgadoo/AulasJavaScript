function cadastro(){
    const email = document.getElementById("email").value; 
    const endereco = document.getElementById("endereco").value; 
    const numero = document.getElementById("numero").value; 
    const senha = document.getElementById("senha").value; 
    const csenha = document.getElementById("csenha").value; 
    let mensagem = "";


    if (!email.includes('@') || !email.includes('.')) {
        mensagem = "Por favor, insira um email válido.";
    }

    else if (senha.length < 6) {
        mensagem = "A senha precisa ter pelo menos 6 caracteres.";
    }
  
    else if (senha !== csenha) {
        mensagem = "As senhas não coincidem.";
    }
 
    else if (endereco === "" || numero === "") {
        mensagem = "Endereço e número são obrigatórios.";
    }
    else {
        mensagem = "Cadastro realizado com sucesso!";
                setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    }

    // Exibindo a mensagem no elemento com id "mensagem"
    document.getElementById("mensagem").innerText = mensagem;
}
