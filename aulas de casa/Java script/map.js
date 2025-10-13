// função map, retorna um array manipulado em cada elemento

const numbers = [1,2,3,4,5]

const double =  numbers.map ((n) => n *2) // função que executa a multiplicação de cada elemento do array por 2
console.log(double)

const triple = numbers.map((t) => t*3) // lembre-se na arraw function, quando há apenas um return pode se declarar na mesma linha que já gerará esse código
console.log(triple)

// Essa função não altera o array inicial, apenas gera um novo tratando o dado do array já passsado

const people = [{
    name: "Henrique", age: 20,
},{
    name: "jOao", age: 25,
}]

const nomeNomalizado = people.map((p) =>  p.name.toLowerCase())
console.log(nomeNomalizado)