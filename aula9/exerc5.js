let reservas = []; 
        let total = 0;

        function verCatalogo() {
            let carro = prompt(
                "Nosso catálogo\n" +
                "1. HB20s - Automático, completo: R$ 169,90 a diária\n" +
                "2. Etios - Manual, completo: R$ 189,90 a diária\n" +
                "3. Corolla - Automático, luxo: R$ 449,90 a diária"
            );

            let preco = 0;
            let nomeCarro = "";

            switch (carro) {
                case "HB20s":
                    nomeCarro = "HB20s";
                    preco = 169.90;
                    break;
                case "Etios":
                    nomeCarro = "Etios";
                    preco = 189.90;
                    break;
                case "corolla":
                    nomeCarro = "Corolla";
                    preco = 449.90;
                    break;
                default:
                    alert("Selecione uma opção válida");
                    return;
            }

            let dias = parseInt(prompt(`Por quantos dias deseja alugar o ${nomeCarro}?`));

            if (isNaN(dias) || dias <= 0) {
                alert("Número de dias inválido. Tente novamente.");
                return;
            }

            let custoTotal = preco * dias;
            reservas.push(`${nomeCarro} - ${dias} dias - R$ ${custoTotal.toFixed(2)}`);
            total += custoTotal;

            alert(`Reservado ${nomeCarro} por ${dias} dias.\nTotal: R$ ${custoTotal.toFixed(2)}`);
        }

        function verReserva() {
            if (reservas.length === 0) {
                alert("Você não tem reservas.");
            } else {
                alert("Suas reservas:\n" + reservas.join("\n") + `\n\nTotal Geral: R$ ${total.toFixed(2)}`);
            }
        }