let set1 = [1,2,3,4,5]
let set2 = [6,7,8,9,10]
let set3 = [11,12,13,14]

//Juntar dois arrays

// jeito errado:
console.log(set1 + set2) // junta os array como strings sem considerar a concatenação
console.log([set1,set2]) // cria um novo array com 2 sub-array

// Jeitos certos:
console.log(set1.concat(set2)) // junta os dois array em um novo concatenado
console.log(set1.concat(set2).concat(set3)) // junta 3 arrays

//função concat, cria um novo array inserindo cada elemento. o que deixa ele ser manipulado.