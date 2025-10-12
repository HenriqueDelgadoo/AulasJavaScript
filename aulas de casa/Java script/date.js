const bornDay = new Date (2005 , 7, 1, 9,0)
const today = new Date()

console.log(bornDay)
console.log (bornDay.toISOString()) // formato ISO (internacional), sem o fuso horário brasileiro
console.log ( "dia", bornDay.getDay()) // busca o dia da data
console.log ("Mês", bornDay.getMonth() +1) // busca o mês inserido, mas devido ao indice faz-se nescessário a soma de mais um 
console.log("Ano",bornDay.getFullYear()) // busca o ano inserido na data de nascimento

console.log("Idade:", today.getFullYear() - bornDay.getFullYear()) // Calcula a idade atual dessa pessooa

const data = Date.now() //retorna o horário em milisegundos 

console.log(data)

//biblioteca para manipular datas "momentjs.com" e "date-fns.org"