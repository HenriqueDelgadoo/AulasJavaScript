function cadastro(){
    const email = document.getElementById("email").value; 
    const endereco = document.getElementById("endereco").value; 
    const numero = document.getElementById("numero").value; 
    const senha = document.getElementById("senha").value; 
    const csenha = document.getElementById("csenha").value; 
    let mensagem = "";

    // Validação do email
    if (!email.includes('@') || !email.includes('.')) {
        mensagem = "Por favor, insira um email válido.";
    }
    // Verificação de senha
    else if (senha.length < 6) {
        mensagem = "A senha precisa ter pelo menos 6 caracteres.";
    }
    // Verificação de confirmação da senha
    else if (senha !== csenha) {
        mensagem = "As senhas não coincidem.";
    }
    // Verificação de campos obrigatórios
    else if (endereco === "" || numero === "") {
        mensagem = "Endereço e número são obrigatórios.";
    }
    else {
        mensagem = "Cadastro realizado com sucesso!";
        // Aqui, você pode adicionar a lógica para enviar os dados ou salvar no banco
        // Exemplo: salvar no banco ou mostrar a mensagem de sucesso no formulário
    }

    // Exibindo a mensagem no elemento com id "mensagem"
    document.getElementById("mensagem").innerText = mensagem;
}
