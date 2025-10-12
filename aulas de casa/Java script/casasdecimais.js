// toFixed()
//Math.ceil()
//Math.floor()
//Math.round()
// new Intl.NumberFormat().format()
let value = 1234.59

console.log(value.toFixed(1)) // arredonda para uma casa decimal

console.log(Math.ceil(value)) // arrendonda o numero para cima 
console.log(Math.floor(value)) // Arredonda para baixo
console.log(Math.round(value)) //  para cima também
console.log(
 new Intl.NumberFormat("pt-BR",{
     style:"currency",
     currency:"BRL",
     }).format(value)

) // converte o número para moeda, indicada pelo pais sendo assim , R$.