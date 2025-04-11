const usuario = "henrique";
const senha = "pastel123";

function verificarAcesso() {

    const usuario = (prompt("Digite seu nickname"));
    const senha = (prompt ("Digite a senha "));

    if (usuario === usuario && senha === senha) {
        alert ("Você possui acesso");
    }else{
        alert ("Você não tem acesso");
    }  
 } 
verificarAcesso()