function verificarEstoque() {
    let produto = document.getElementById("produto").value;
    let estoque = {
        caneta: 30,
        lapis: 120,
        borracha: 75
    };

    let quantidade = estoque[produto];
    let mensagem = "";

    if (quantidade < 30) {
        mensagem = "Estoque Baixo";
    } else if (quantidade > 100) {
        mensagem = "Estoque Bom";
    } else {
        mensagem = "Estoque Médio";
    }

    document.getElementById("resultado").innerText = `O estoque de ${produto} é ${quantidade}. ${mensagem}`;
}