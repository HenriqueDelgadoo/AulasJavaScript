// Função para atualizar o valor total automaticamente
document.getElementById("quantidade").addEventListener("input", atualizarValorTotal);

function atualizarValorTotal() {
    const quantidade = document.getElementById("quantidade").value;
    const precoUnitario = 72.90; // Preço fixo da pizza Margherita
    const valorTotal = quantidade * precoUnitario;

    // Atualizar o valor total no HTML
    const valorTotalElement = document.getElementById("valorTotal");
    valorTotalElement.textContent = `Total: R$ ${valorTotal.toFixed(2)}`;
}

function confirmarCompra() {
    const quantidade = document.getElementById("quantidade").value;
    const pagamento = document.getElementById("pagamento").value;
    const obs = document.getElementById("obs").value;

    const precoUnitario = 72.90; // Preço fixo da pizza Margherita
    const valorTotal = quantidade * precoUnitario;

    // Atualizar o valor total no HTML
    const valorTotalElement = document.getElementById("valorTotal");
    valorTotalElement.textContent = `Total: R$ ${valorTotal.toFixed(2)}`;

    // Exibir a mensagem de confirmação
    exibirMensagem("Pedido Confirmado! Agradecemos pela sua compra!", "sucesso");

    // Verifica a forma de pagamento
    if (pagamento === "pix") {
        // Redireciona para a página de pagamento com QR Code após 3 segundos
        setTimeout(() => {
            window.location.href = "qrcode.html"; // Redireciona para a página de QR Code
        }, 3000);
    } else {
        // Exibir a mensagem de confirmação para outros pagamentos
        exibirMensagem("Pedido Confirmado! Entrega a caminho!", "sucesso");
    }
}

// Função para exibir mensagens
function exibirMensagem(texto, tipo) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = texto;
    mensagem.className = `mensagem ${tipo}`;
    mensagem.classList.remove("hidden");

    // Esconde a mensagem após 3 segundos
    setTimeout(() => {
        mensagem.classList.add("hidden");
    }, 3000);
}
