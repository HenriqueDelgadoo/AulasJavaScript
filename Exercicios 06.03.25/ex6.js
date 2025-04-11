let loja = [];

function gerenciarLoja() {
    while (true) {
        let escolha = prompt(
            "Escolha uma opção:\n1 - Adicionar móvel\n2 - Listar móveis\n3 - Sair"
        );

        if (escolha === "1") {
            let tipo = prompt("Digite o tipo de móvel:");
            let material = prompt("Digite o material do móvel:");
            let cor = prompt("Digite a cor do móvel:"); // Agora cor é uma string
            let preco = parseFloat(prompt("Digite o preço do móvel:"));

            loja.push({ tipo, material, cor, preco });
            alert("Móvel adicionado com sucesso!");

        } else if (escolha === "2") {
            if (loja.length > 0) {
                let mensagem = "Lista de móveis:\n";
                loja.forEach((movel, index) => {
                    mensagem += `${index + 1}. Tipo: ${movel.tipo}, Material: ${movel.material}, Cor: ${movel.cor}, Preço: R$${movel.preco.toFixed(2)}\n`;
                });
                alert(mensagem);
            } else {
                alert("A loja está vazia.");
            }

        } else if (escolha === "3") {
            alert("Saindo do programa...");
            break;

        } else {
            alert("Opção inválida! Tente novamente.");
        }
    }
}

gerenciarLoja();
