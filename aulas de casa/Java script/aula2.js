document.addEventListener("DOMContentLoaded", () => {
    const inputTarefa = document.getElementById("inputTarefa");
    const mensagem = document.getElementById("mensagem");
    const listaTarefas = document.getElementById("listatarefas");

    const mostrarMensagem = (texto, tipo = "info") => {
        mensagem.textContent = texto;
        mensagem.style.color = tipo === "erro" ? "red" : "green";
    };

    const criarItemLista = (texto) => {
        const item = document.createElement("li");
        item.textContent = texto;
        return item;
    };

    const limparInput = () => {
        inputTarefa.value = "";
        inputTarefa.focus();
    };

    const adicionarTarefa = () => {
        const tarefa = inputTarefa.value.trim();

        if (!tarefa) {
            mostrarMensagem("Inserir tarefa válida!", "erro");
            return;
        }

        listaTarefas.appendChild(criarItemLista(tarefa));
        mostrarMensagem("Tarefa adicionada com sucesso!", "sucesso");
        limparInput();
    };

    const botaoAdicionar = document.getElementById("btnAdicionar");
    botaoAdicionar.addEventListener("click", adicionarTarefa);
})
