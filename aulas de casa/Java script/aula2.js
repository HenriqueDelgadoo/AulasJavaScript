function adicionarTarefa() {

    const inputTarefa = document.getElementById("inputTarefa") //puxa dentro do documento HTML o id "input tarefa"
    let tarefa = inputTarefa.value //com o .value essa variavel puxa o valor do input inserido
    const mensagem = document.getElementById("mensagem")

    if (tarefa == ""){
    let mensagemVazio ="Insira uma tarefa válida!"
        mensagem.textContent.style.color = mensagemVazio;
    }else{

        let mensagemSucesso = "Tarefa adicionada com sucesso! ";
    //variavel mensagem retornando após inserir a tarefa  
       mensagem.textContent.style.color = mensagem;//retorna no parafagrafo abaixo a mensagem definida a cima 
        const listatarefas = document.getElementById ("listatarefas")// puxa dentro do HTML o id "listatarefas"
        let novaTarefa = document.createElement("li")//cria o "li" que são os elementos do "ul", basicamente gera uma lista não ordenada 
        novaTarefa.textContent = tarefa;//inseri dentro da variavel "novaTarefa" o texto que foi adiciona a tarefa lá em cima
    
        listatarefas.appendChild(novaTarefa)//appendChild define que a variavel novaTarefa vai gerar uma "li" sendo filha do id "listatarefas" que no HTML é o "ul" ou seja, a lista.
    
    }
    inputTarefa.value =""// define que após inserir a informação no input ele retorna a ser vazio ""

}