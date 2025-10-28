//Crie uma função executarOperacao que recebe dois números e uma função callback, que define qual operação matemática realizar (soma, subtração, etc).

function executarOperacao(a,b,operacao){

        switch (operacao){
            case "+":
                return a + b;
            case "-":
                return a-b;
            case "*":
                return a*b;
            case "/":
                return a/b;
            default:
                break;
        }

}
console.log(executarOperacao(5,10, "/"))

// function executarOperacao(a,b,callbak){
//     return callback (a,b)
// }
// const soma = (x,y)=> x+y
// const subtracao = (x,y)=> x-y
// const mult =  (x,y)=>x*y
// const div = (x,y)=> y !== 0 ? x/y: "Erro: divisão por zero!"

// console.log(executarOperacao(5,10,soma))

