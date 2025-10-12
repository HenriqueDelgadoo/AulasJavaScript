// comporador if (se), cira um desvio de fluxo

console.log("inicio do programa ")

const senha = "12345678"

if(senha === "12345678") console.log ("senha correta")

{}// delimitar contexto

// if(true) console.log("Se for uma linha não precisa de delimitador")

console.log('fim do programa')


//else, senão

if(true){
    console.log("verdadeiro")
}else{
    console.log("falso")
}

if ("1" == 1){
    console.log("verdadeiro")
}else{
    console.log("falso")
}

if (false){
    console.log ("verdadeiro")
}else{
    console.log ('falso')
}

if ("1" === 1 ){
    console.log ('falso')
}else{
    console.log ('verdadeiro')
}

//else if
const valor = 9


if (valor <= 1 ){
    console.log ("condição 1")
}else if (valor > 1 && valor <= 2){
    console.log('condição 2')
}else if ( valor > 2 && valor <= 3){
    console.log ('condição 3')
}else{
    console.log ("condição outra")
}

// ternário, atrbuimos uma condição de execução para o if 
// variavel ==(condição) ? if : else 

let texto = "A"
let num 

// if(texto== "A"){
//     num = 10
// }else{
//     num  = 20
// }

num = texto  == "A" ? 10 : 20
console.log("valor: " , num)