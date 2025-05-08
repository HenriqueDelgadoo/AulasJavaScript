let biblioteca = [];
let livroParaAlterar = null;

function mostrarsecao(secao) {
    
    document.getElementById("cadastro").classList.add("hidden");
    document.getElementById("consulta").classList.add("hidden");
    document.getElementById("alterar").classList.add("hidden");

  
    document.getElementById(secao).classList.remove("hidden");
}

function adicionarLivro() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const ano = parseInt(document.getElementById("ano").value);

    if (titulo && autor && ano) {
        biblioteca.push({ titulo, autor, ano });
        document.getElementById("titulo").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("ano").value = "";
        atualizarLista();
        alert("Livro adicionado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos");
    }
}

function buscarLivro() {
    const busca = document.getElementById("busca").value.toLowerCase();
    const resultados = biblioteca.filter((livro) =>
        livro.titulo.toLowerCase().includes(busca)
    );
    atualizarLista(resultados);
}

function atualizarLista(lista = biblioteca) {
    const tabela = document.getElementById("lista-livros");
    tabela.innerHTML = "";

    lista.forEach((livro) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
        <td>${livro.titulo}</td>
        <td>${livro.autor}</td>
        <td>${livro.ano}</td>
        `;
        tabela.appendChild(linha);
    });
}

function buscarLivroAlterar() {
    const buscar = document.getElementById("buscar-alterar").value.toLowerCase();
    livroParaAlterar = biblioteca.find((livro) => livro.titulo.toLowerCase().includes(buscar));

    if (livroParaAlterar) {
        document.getElementById("form-alterar").classList.remove("hidden");
        document.getElementById("novo-titulo").value = livroParaAlterar.titulo;
        document.getElementById("novo-autor").value = livroParaAlterar.autor;
        document.getElementById("novo-ano").value = livroParaAlterar.ano;
    } else {
        alert("Livro não encontrado");
    }
}

function alterarLivro() {
    if (livroParaAlterar) {
        const novoTitulo = document.getElementById("novo-titulo").value;
        const novoAutor = document.getElementById("novo-autor").value;
        const novoAno = parseInt(document.getElementById("novo-ano").value);  // Convertendo para número

        if (novoTitulo && novoAutor && novoAno) {
            livroParaAlterar.titulo = novoTitulo;
            livroParaAlterar.autor = novoAutor;
            livroParaAlterar.ano = novoAno;

            atualizarLista();
            alert("Livro alterado com sucesso!");
            document.getElementById("form-alterar").classList.add("hidden");
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    }
}
function emprestarLivro() {
    const nomeLivro = document.getElementById("livro-emprestar").value.toLowerCase();
    
    
    const livroParaEmprestar = biblioteca.find((livro) => livro.titulo.toLowerCase() === nomeLivro);
    
    if (livroParaEmprestar) {
       
        biblioteca = biblioteca.filter((livro) => livro !== livroParaEmprestar);
        
       
        alert(`Livro emprestado com sucesso!\n\nTítulo: ${livroParaEmprestar.titulo}\nAutor: ${livroParaEmprestar.autor}\nAno: ${livroParaEmprestar.ano}`);
        
        atualizarLista();
    } else {

        const tabela = document.getElementById("lista-livros");
        tabela.innerHTML = "";
        biblioteca.forEach((livro) => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.ano}</td>
        
        alert    `;
            tabela.appendChild(linha);
        });
    }
}

let vendas =[];

function registrarVenda() {
    const titulo =document.getElementById('venda-titulo').value;
    const preco =document.getElementById('venda-preco').value;
    const comprador =document.getElementById('venda-comprador').value;

    if(titulo && preco && comprador){
        const listaVendas = document.getElementById('lista-vendas');
        const item = document.createElement('li');
        item.textContent = `Titulo: ${titulo}, preço: R$${preco}, comprador: ${comprador}`;
        listaVendas.appendChild(item);

        vendas.push ({titulo,preco,comprador});

        document.getElementById('venda-titulo').value = " ";
        document.getElementById('venda-preco').value = " ";
        document.getElementById('venda-comprador').value = " ";

    }else{
        alert ("Por favor preencha todos os campos corretamente!")
    }
}
function gerarRelatorioVendas() {
    const tabelaRelatorio = document.getElementById('tabela-relatorio-vendas');
    tabelaRelatorio.innerHTML = '';

    if (vendas.length === 0) {
        alert('Nenhuma venda registrada.');
        return;
    }

    let totalVendas = 0;

    vendas.forEach((venda) => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${venda.titulo}</td>
            <td>R$${parseFloat(venda.preco).toFixed(2)}</td>
            <td>${venda.comprador}</td>
        `;
        tabelaRelatorio.appendChild(linha);
        totalVendas += parseFloat(venda.preco);
    });

    const linhaTotal = document.createElement('tr');
    linhaTotal.innerHTML = ` 
        <td><strong>Total</strong></td>
        <td><strong>R$${totalVendas.toFixed(2)}</strong></td>
        <td></td>
    `;
    tabelaRelatorio.appendChild(linhaTotal);

    mostrarsecao("relatorio-vendas");
}

