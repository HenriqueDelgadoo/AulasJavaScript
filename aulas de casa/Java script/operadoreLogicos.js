  // ou " ||"
  // no ou qualquer comparador se tiver um true toda a expressão se torna verdadeira

  console.log (false || false) // false
  console.log (true || true) // true 
  console.log (false || true ) // true
  console.log (true || false) // true

// e " &&"
// No operador e retorna apenas se todos os valores forem verdadeiros

console.log( false && false ) // false
console.log( true && false ) // false 
console.log (false && true ) // false
console.log (true && true ) // true 

// mista 

console.log( false || (false && true)) // E tem superioridade sobre o ou, como se fosse multiplicação que é superior a adição, mas da para ser forçada pelo parenteses também 

// ! inverte

console.log (!false && true) // true 

// Resultado de uma expressão (comparação) é booleano 

console.log (23 < 24 && "A" == "A") // true (booleano)

let a = 10
let b = 20

console.log ( a < b)