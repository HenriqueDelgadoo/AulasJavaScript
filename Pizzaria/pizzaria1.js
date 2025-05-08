let pizzas = [];
let vendas = [];
let pizzaParaAlterar = null;

function mostrarSecao(secao) {
    // Lista de seções
    const secoes = ["cadastro", "alterar", "vendas", "relatorio", "visualizar", "vendidas"];
    // Esconde todas as seções
    secoes.forEach(id => {
        document.getElementById(id).classList.add("hidden");
    });
    // Exibe a seção selecionada
    document.getElementById(secao).classList.remove("hidden");
}

function cadastrarPizza() {
    const nome = document.getElementById("pizza-nome").value;
    const ingredientes = document.getElementById("pizza-ingredientes").value;
    const preco = parseFloat(document.getElementById("pizza-preco").value);

    if (nome && ingredientes && !isNaN(preco)) {
        pizzas.push({ nome, ingredientes, preco });
        alert("Pizza cadastrada com sucesso!");
        limparFormularioCadastro();
    } else {
        alert("Preencha todos os campos corretamente!");
    }
}

function limparFormularioCadastro() {
    document.getElementById("pizza-nome").value = "";
    document.getElementById("pizza-ingredientes").value = "";
    document.getElementById("pizza-preco").value = "";
}

function buscarPizzaAlterar() {
    const nomeBusca = document.getElementById("buscar-pizza").value.toLowerCase();
    pizzaParaAlterar = pizzas.find(p => p.nome.toLowerCase().includes(nomeBusca));

    if (pizzaParaAlterar) {
        document.getElementById("novo-nome").value = pizzaParaAlterar.nome;
        document.getElementById("novo-ingredientes").value = pizzaParaAlterar.ingredientes;
        document.getElementById("novo-preco").value = pizzaParaAlterar.preco;
        document.getElementById("form-alterar").classList.remove("hidden");
    } else {
        alert("Pizza não encontrada.");
    }
}

function alterarPizza() {
    if (pizzaParaAlterar) {
        const novoNome = document.getElementById("novo-nome").value;
        const novosIngredientes = document.getElementById("novo-ingredientes").value;
        const novoPreco = parseFloat(document.getElementById("novo-preco").value);

        if (novoNome && novosIngredientes && !isNaN(novoPreco)) {
            pizzaParaAlterar.nome = novoNome;
            pizzaParaAlterar.ingredientes = novosIngredientes;
            pizzaParaAlterar.preco = novoPreco;
            alert("Pizza alterada com sucesso!");
            document.getElementById("form-alterar").classList.add("hidden");
        } else {
            alert("Preencha todos os campos corretamente.");
        }
    }
}

function registrarVenda() {
    const nome = document.getElementById("venda-nome").value;
    const cliente = document.getElementById("venda-cliente").value;

    const pizzaVendida = pizzas.find(p => p.nome.toLowerCase() === nome.toLowerCase());
    if (pizzaVendida && cliente) {
        vendas.push({ ...pizzaVendida, cliente });
        alert("Venda registrada com sucesso!");
        document.getElementById("venda-nome").value = "";
        document.getElementById("venda-cliente").value = "";
    } else {
        alert("Verifique o nome da pizza e o nome do cliente.");
    }
}

function gerarRelatorio() {
    const tabela = document.getElementById("tabela-relatorio");
    tabela.innerHTML = "";
    let total = 0;

    vendas.forEach(v => {
        const linha = document.createElement("tr");
        linha.innerHTML = ` 
            <td>${v.nome}</td>
            <td>${v.cliente}</td>
            <td>R$ ${v.preco.toFixed(2)}</td>
        `;
        tabela.appendChild(linha);
        total += v.preco;
    });

    const totalLinha = document.createElement("tr");
    totalLinha.innerHTML = `
        <td colspan="2"><strong>Total</strong></td>
        <td><strong>R$ ${total.toFixed(2)}</strong></td>
    `;
    tabela.appendChild(totalLinha);
}

function visualizarPizzas() {
    const lista = document.getElementById("lista-pizzas");
    lista.innerHTML = "";
    pizzas.forEach(pizza => {
        const item = document.createElement("li");
        item.textContent = `${pizza.nome} - ${pizza.ingredientes} - R$ ${pizza.preco.toFixed(2)}`;
        lista.appendChild(item);
    });
    mostrarSecao("visualizar");
}

function visualizarVendidas() {
    const lista = document.getElementById("lista-vendidas");
    lista.innerHTML = "";
    vendas.forEach(v => {
        const item = document.createElement("li");
        item.textContent = `${v.nome} vendida para ${v.cliente} - R$ ${v.preco.toFixed(2)}`;
        lista.appendChild(item);
    });
    mostrarSecao("vendidas");
}
