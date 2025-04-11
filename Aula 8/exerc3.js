let carrinho = [];
        let precos = {
            1: 50.00,
            2: 40.00,
            10: 30.00
        };

        function adicionarAoCarrinho() {
            let produtoSelecionado = document.getElementById("produto").value;
            carrinho.push(parseInt(produtoSelecionado));
            atualizarCarrinho();
        }

        function atualizarCarrinho() {
            let listaProdutos = carrinho.map(codigo => {
                let preco = precos[codigo];
                if (codigo == 1 || codigo == 10) {
                    preco *= 1.10;
                }
                return `Código ${codigo} - R$${preco.toFixed(2)}`;
            }).join("<br>");

            document.getElementById("carrinho").innerHTML = "Itens no Carrinho:<br>" + listaProdutos;
        }

        function finalizarCompra() {
            let total = carrinho.reduce((soma, codigo) => {
                let preco = precos[codigo];
                if (codigo == 1 || codigo == 10) {
                    preco *= 1.10;
                }
                return soma + preco;
            }, 0);

            document.getElementById("resultado").innerText = `Total da Compra: R$${total.toFixed(2)}`;
            carrinho = [];
            atualizarCarrinho();
        }