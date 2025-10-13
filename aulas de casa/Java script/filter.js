// função filter

const numbers = [2, 10 , 18 , 20]

const gt10 = function(item){
    return item > 10 // true or false
}

let res = numbers.filter(function(item){
    return item >10
}) // não altera o array


let re = numbers.filter((n) => n > 10) // com array function 

console.log(re)

const people =[{
    name: "Henrique",
    age: 20,
},
{
    name: "Andre",
    age: 14,
}]

let maior = people.filter((p) => p.age >= 18) // filtra quem é maior de idade dentro da array people

console.log(maior)