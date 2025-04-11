//break
for (let i = 0; i < 10; i ++) {
    if (i === 5) {
    }
    console.log (i);
}
//continue
for (let i = 0; i < 10; i ++) {
    if (i === 5){
        continue;
    }
    console.log (i);
}

//imprimir número pares de 1 a 20:
for (let i = 2; i<= 30; i++) {
    if (i % 2 ===0) {
        console.log (i);
    }
}
//calcular a soma de números:

let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log (soma);

//calcular o fatorial de um número fornecido pelo usuário

// const readlineSync = require ("readline- sync");

//let numero = readline Sync. question ("Digite um número:");

let numero = 5;

numero = Number (numero);
let fatorial = 1;
for (let i = 1; i <= numero; i ++){
    fatorial *=i;
}

console.log (`o fatorial de ${numero} é ${fatorial}.`);

//alterar sobre um array:

let frutas = [ "maça", "banana", "laranja"];
for (let i = 0; i < frutas.length; i ++) {
    console.log (frutas[i]);
}

let jogos = [ "fifa", "god of wars", "valorant", "cs-go", "ghost of tsushima"]
for (let i= 0; i< jogos.length; i++) {
    console.log (jogos[i]);
}
