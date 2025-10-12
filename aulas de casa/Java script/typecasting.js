// type casting = conversão pelo usuário
// Type coersion = conversão 'coercitiva' pela VM

console.log (Number("2") + 2) // junta. Usando o type casting com a função number você converte o dado para o tipo especifico que você quiser.
// Number: string for Number

console.log(String(2))
// String: Number for string 


// Tipos booleanos:
console.log (Boolean(" "))
console.log (Boolean("abc"))
console.log (Boolean(0))
console.log (Boolean(1))

console.log (Number(true))
console.log (Number(false))

console.log(String(false))
console.log(String(true))

// Datas
// Data -> Formato ISO. Mês / dia / ano || ano - mês - ano
console.log(new Date("10/11/2025"))

console.log ( Number(new Date()))
console.log ( String(new Date()))
console.log ( Boolean(new Date())) //  true 


console.log(new Date().toISOString())
console.log(new Date().toString())

