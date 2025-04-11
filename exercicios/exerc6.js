// algoritmo para declarar se o numero é par

function apar (numero){
    return (numero % 2 == 0);
}

console.log (apar(10)); //true
console.log (apar(5));  //false

//vacinação acima de 60 anos 

function vacinacao (idade) {
    return idade >= 60;
}

console.log(vacinacao (16)); //false
console.log(vacinacao (61)); //true

//algoritmo veiculo elétrico ou flex

function verificarTipoVeiculo(tipo) {
    
    const tipos = {
        "flex": "Veículo Flex",
        "eletrico": "Veículo Elétrico"
    };
    
    
    return tipos[tipo] || "Tipo de veículo inválido";
}


let tipoVeiculo = "flex"; 


console.log(verificarTipoVeiculo(tipoVeiculo));
