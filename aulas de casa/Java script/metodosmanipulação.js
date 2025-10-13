let people = [ "Henrique", "Felipe" , "André", "Maria", "Marcelo"]

// tratamento de array

// todos os elementos  = people.length
// Retornar elementos específicos de um array
console.log(people[2])
console.log(people[people.length - 1]) // retorna o penultimo

// Retornar "fatias" de um array
console.log(people.slice(2)) // a partir de um momento especifico (2)
console.log(people.slice(1,3)) //  do 1 ao 3

// Adicionar novos elementos no array (inicio e fim)
people.push("Ana") // adiciona oa final, empurrar = push
console.log(people)
people.unshift("Beatriz") // Adiciona ao inicio do array
console.log(people)

// Remover elementos no array (inicio e fim)
people.pop() // remove elementos do fim do array, da para verificar o que foi removido
people.shift() // Remove elementos no Inicio do array, retorna também o elemento removido

console.log(people)

// remover "fatias" de um array
people.splice(1,1) // primeiro é o indice que começa, e o segundo é a quantidade
console.log(people)

// Localizar elementos 
let index = people.indexOf("Henrique") // localiza no array o indice do elemento indicado
people.splice(index,1) // elemina o elemento indicado 

console.log(index)
console.log(people)
