//Crie uma interface com um título e um botão. Ao pressionar o botão deverá apresentar uma mensagem perguntando Nome e Idade e ao finalizar exibir em outra janela a junção das duas informações.

    function gerar() {
        
        let nome = (prompt("Qual seu nome?"));
        let idade = parseInt(prompt ("Qual sua idade?"))
        let res = document.getElementById('result');
    
        res.innerHTML = `<p> seu nome e idade são ${nome}, ${idade}.</p>`; 
    }
