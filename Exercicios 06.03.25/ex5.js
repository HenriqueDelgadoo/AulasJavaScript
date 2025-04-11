let Discografia = [];

function gerenciarDiscografia() {
    while (true) {
        let escolha = prompt(
            "Escolha uma opção:\n1 - Adicionar Disco\n2 - Listar Discos\n3 - Sair"
        );

        if (escolha === "1") {
            let titulo = prompt("Digite o título do Disco:");
            let autor = prompt("Digite o autor do Disco:");
            let ano = parseInt(prompt("Digite o ano de publicação do Disco:"));
            let preco = parseFloat(prompt("Digite o preço do Disco:"));

            Discografia.push({ titulo, autor, ano, preco });
            alert("Disco adicionado com sucesso!");

        } else if (escolha === "2") {
            if (Discografia.length > 0) {
                let mensagem = "Lista de Discos:\n";
                Discografia.forEach((Disco, index) => {
                    mensagem += `${index + 1}. Título: ${Disco.titulo}, Autor: ${Disco.autor}, Ano: ${Disco.ano}, Preço: R$${Disco.preco.toFixed(2)}\n`;
                });
                alert(mensagem);
            } else {
                alert("A discografia está vazia.");
            }

        } else if (escolha === "3") {
            alert("Saindo do programa...");
            break;

        } else {
            alert("Opção inválida! Tente novamente.");
        }
    }
}

gerenciarDiscografia();
