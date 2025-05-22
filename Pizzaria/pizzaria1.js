let pizzas = [];
let vendas = [];
let pizzaParaAlterar = null;

// Agora exibir mensagem em qualquer <p> que você informar pelo id
function exibirMensagem(texto, tipo, idMensagem) {
    const mensagem = document.getElementById(idMensagem);
    if (!mensagem) return;
    mensagem.textContent = texto;
    mensagem.className = `mensagem ${tipo}`;
    mensagem.classList.remove("hidden");

    setTimeout(() => {
        mensagem.classList.add("hidden");
        mensagem.textContent = "";
    }, 3000);
}

function mostrarSecao(id) {
    const secoes = document.querySelectorAll("main section");
    secoes.forEach(secao => {
        if (secao.id === id) {
            secao.classList.remove("hidden");
        } else {
            secao.classList.add("hidden");
        }
    });
}

function cadastrarPizza() {
    const nome = document.getElementById("pizza-nome").value.trim();
    const ingredientes = document.getElementById("pizza-ingredientes").value.trim();
    const preco = parseFloat(document.getElementById("pizza-preco").value);

    if (!nome || !ingredientes || isNaN(preco)) {
        exibirMensagem("Preencha todos os campos corretamente!", "erro", "mensagem-cadastro");
        return;
    }

    // Verifica se pizza já existe
    const existe = pizzas.some(p => p.nome.toLowerCase() === nome.toLowerCase());
    if (existe) {
        exibirMensagem("Essa pizza já está cadastrada.", "erro", "mensagem-cadastro");
        return;
    }

    pizzas.push({ nome, ingredientes, preco });
    exibirMensagem("Pizza cadastrada com sucesso!", "sucesso", "mensagem-cadastro");
    limparFormularioCadastro();
    atualizarListaPizzas();
    mostrarSecao("cadastro");
}

function limparFormularioCadastro() {
    document.getElementById("pizza-nome").value = "";
    document.getElementById("pizza-ingredientes").value = "";
    document.getElementById("pizza-preco").value = "";
}

function buscarPizzaAlterar() {
    const nomeBusca = document.getElementById("buscar-nome").value.trim().toLowerCase();
    pizzaParaAlterar = pizzas.find(p => p.nome.toLowerCase() === nomeBusca);

    if (pizzaParaAlterar) {
        document.getElementById("novo-nome").value = pizzaParaAlterar.nome;
        document.getElementById("novo-ingredientes").value = pizzaParaAlterar.ingredientes;
        document.getElementById("novo-preco").value = pizzaParaAlterar.preco;
        document.getElementById("form-alterar").classList.remove("hidden");
        exibirMensagem("", "", "mensagem-alterar"); // limpa mensagem anterior
    } else {
        exibirMensagem("Pizza não encontrada.", "erro", "mensagem-alterar");
        document.getElementById("form-alterar").classList.add("hidden");
    }
}

function alterarPizza() {
    if (!pizzaParaAlterar) {
        exibirMensagem("Nenhuma pizza selecionada para alterar.", "erro", "mensagem-alterar");
        return;
    }

    const novoNome = document.getElementById("novo-nome").value.trim();
    const novosIngredientes = document.getElementById("novo-ingredientes").value.trim();
    const novoPreco = parseFloat(document.getElementById("novo-preco").value);

    if (!novoNome || !novosIngredientes || isNaN(novoPreco)) {
        exibirMensagem("Preencha todos os campos corretamente.", "erro", "mensagem-alterar");
        return;
    }

    // Verifica se o novo nome já existe em outra pizza
    const existeOutro = pizzas.some(p => p.nome.toLowerCase() === novoNome.toLowerCase() && p !== pizzaParaAlterar);
    if (existeOutro) {
        exibirMensagem("Já existe outra pizza com esse nome.", "erro", "mensagem-alterar");
        return;
    }

    pizzaParaAlterar.nome = novoNome;
    pizzaParaAlterar.ingredientes = novosIngredientes;
    pizzaParaAlterar.preco = novoPreco;
    exibirMensagem("Pizza alterada com sucesso!", "sucesso", "mensagem-alterar");
    limparFormularioAlterar();
    atualizarListaPizzas();
    mostrarSecao("alterar");
}

function limparFormularioAlterar() {
    document.getElementById("buscar-nome").value = "";
    document.getElementById("novo-nome").value = "";
    document.getElementById("novo-ingredientes").value = "";
    document.getElementById("novo-preco").value = "";
    document.getElementById("form-alterar").classList.add("hidden");
    pizzaParaAlterar = null;
}

function registrarVenda() {
    const nome = document.getElementById("venda-pizza").value.trim();
    const quantidade = parseInt(document.getElementById("venda-quantidade").value);
    const cliente = document.getElementById("venda-cliente").value.trim();

    if (!nome || !cliente || isNaN(quantidade) || quantidade <= 0) {
        exibirMensagem("Preencha todos os campos corretamente.", "erro", "mensagem-vendas");
        return;
    }

    const pizzaVendida = pizzas.find(p => p.nome.toLowerCase() === nome.toLowerCase());

    if (!pizzaVendida) {
        exibirMensagem("Pizza não encontrada.", "erro", "mensagem-vendas");
        return;
    }

    // Adiciona a venda
    for(let i = 0; i < quantidade; i++) {
        vendas.push({ ...pizzaVendida, cliente });
    }
    mostrarSecao("vendas");
    exibirMensagem("Venda registrada com sucesso!", "sucesso", "mensagem-vendas");
    document.getElementById("venda-pizza").value = "";
    document.getElementById("venda-quantidade").value = "";
    document.getElementById("venda-cliente").value = "";
    gerarRelatorio();
}

function gerarRelatorio() {
    const tabela = document.getElementById("tabela-relatorio");
    tabela.innerHTML = "";

    if (vendas.length === 0) {
        tabela.innerHTML = '<tr><td colspan="4">Nenhuma venda registrada.</td></tr>';
        return;
    }

    const resumo = {};

    vendas.forEach(v => {
        const chave = v.nome + '|' + v.cliente;
        if (!resumo[chave]) {
            resumo[chave] = { nome: v.nome, cliente: v.cliente, quantidade: 0, preco: v.preco };
        }
        resumo[chave].quantidade++;
    });

    let totalGeral = 0;

    Object.values(resumo).forEach(item => {
        const linha = document.createElement("tr");
        const totalVenda = item.preco * item.quantidade;
        linha.innerHTML = `
            <td>${item.nome}</td>
            <td>${item.quantidade}</td>
            <td>${item.cliente}</td>
            <td>R$ ${totalVenda.toFixed(2)}</td>
        `;
        tabela.appendChild(linha);
        totalGeral += totalVenda;
    });

    const totalLinha = document.createElement("tr");
    totalLinha.innerHTML = `
        <td colspan="3" style="text-align:right;"><strong>Total Geral:</strong></td>
        <td><strong>R$ ${totalGeral.toFixed(2)}</strong></td>
    `;
    tabela.appendChild(totalLinha);
}

function atualizarListaPizzas() {
    const lista = document.getElementById("lista-pizzas");
    if (!lista) return;
    lista.innerHTML = "";

    if (pizzas.length === 0) {
        lista.innerHTML = "<p>Ainda não há pizzas cadastradas.</p>";
        return;
    }

    const ul = document.createElement("ul");
    pizzas.forEach(pizza => {
        const item = document.createElement("li");
        item.textContent = `${pizza.nome} - ${pizza.ingredientes} - R$ ${pizza.preco.toFixed(2)}`;
        ul.appendChild(item);
    });
    lista.appendChild(ul);
}
