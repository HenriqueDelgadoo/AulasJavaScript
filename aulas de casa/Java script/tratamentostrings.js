let name = "Henrique"
let num = 12345

console.log (name.length)
console.log(num.length) // para contar a quantidades de numeros, precisa tranformar em string para pode contar. Função: String()

let frase = "Eu sou um cara legal!"

console.log (frase.split(" ").join ("-")) // manipulação de string. ex: criação de arquivos e insterações com sistemas 

// Maisculo e minusculo

console.log (frase.toLowerCase()) // para minusculo
console.log (frase.toUpperCase()) // para maisculo

//Localizar em uma frase 

console.log(frase.includes("@")) // verifica se na frase possue "@". OBS: se atentar com os upper e lower cases

// substituir uma string 

console.log (frase.replace('Eu', "Henrique")) // altera a string com o replace, pede dois parametros, o que vai ser modificado e a modificação

let value  = 1234.56

console.log(value.toFixed(2).replace(".", ","))