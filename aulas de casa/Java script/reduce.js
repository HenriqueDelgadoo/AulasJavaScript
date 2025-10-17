// A função reduce() em JavaScript é usada para reduzir um array a um único valor, aplicando uma função acumuladora a cada elemento do array (da esquerda para a direita). precisa de dois parametros para ser executado

// callback: função que será executada em cada elemento, recebendo:

// acumulador: valor acumulado até o momento. valor que vai iniciar sua contagem
// valorAtual: o elemento atual do array.
// índice: índice do elemento atual.
// array: o array original.


// valorInicial (opcional): valor inicial do acumulador. Se não for fornecido, o primeiro elemento do array será usado.

let values = [1.5, 2 , 4 , 10]

// function callback (acumulador, valorAtual, indice, array){
//     console.log('Acumulador:' , acumulador)
//     console.log('ValorAtual:', valorAtual)
//     console.log('indice:', indice)
//     console.log('array' , array)

//     return acumulador + valorAtual
// }

// values.reduce(callback ,0)

// const callback = ((acumulador, valorAtual) => {
//     return acumulador + valorAtual})

// const resultado = values.reduce(callback)
// console.log(resultado)

// agregação

// let sum = values.reduce((total,item) => total + item,0)
// console.log("soma", sum )

// media 

// let media  =  values.reduce((total,item,index) => (total + item) / index-1, 0)
// console.log(media.toFixed(2))

// doouble 

// const double = values.reduce((total, item) => total.concat(item*2),[] )
// console.log('Double:' , double)

let filter = values.reduce((total, item) => {
    if (item > 2){
        total.push(item)
    }
        return total
},[])

console.log(filter)