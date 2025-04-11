function verificarVoto() {
    const idade = parseInt(prompt("Digite sua idade")); 
    const nacionalidade = prompt("Digite a nacionalidade");

    if (idade >= 16 && nacionalidade.toLowerCase() === "brasileiro") { 
        alert("Você pode votar");
    } else {
        alert("Você não pode votar");
    }  
 }
verificarVoto();
