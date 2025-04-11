function realizarPedido() {

    const precos = {
        1: 5.00,
        2: 8.00,
        3: 7.50,
        4: 4.00
    };
    const bebidas = {
        1: "Café Expresso",
        2: "Cappuccino",
        3: "Chocolate Quente",
        4: "Chá"
    };

    const opcao = parseInt(document.getElementById('bebida').value);

    if (precos[opcao]) {
        
        const valorTotal = precos[opcao];
        const bebidaEscolhida = bebidas[opcao];

       
        document.getElementById('resultado').innerHTML = `Você escolheu: ${bebidaEscolhida}<br>Valor total: R$ ${valorTotal.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerHTML = "Opção inválida! Tente novamente.";
    }
}