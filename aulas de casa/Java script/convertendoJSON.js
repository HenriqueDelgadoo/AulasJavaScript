// JSON - JavaScript Object Notation
// JSON.stringify()
// JSON.parse()

const people = [{
    id: 1,
    name:"Henrique",
    lasName: "Delgado",
    bornDate: new Date( 2005,8,1),
    addres: {
    city: "Limeira",
    },
},
{
    id: 2,
    name: "Eduardo",
    lastName: "Moraes",
    bornDate: new Date(2007, 9, 5),
    addres:{
        city: "Recife",
    },
},
]


console.log(JSON.stringify(people)) // conversão de objeto para uma string

const json = '[{"id":1,"name":"Henrique","lasName":"Delgado","bornDate":"2005-09-01T03:00:00.000Z","addres":{"city":"Limeira"}},{"id":2,"name":"Eduardo","lastName":"Moraes","bornDate":"2007-10-05T03:00:00.000Z","addres":{"city":"Recife"}}]'

console.log(JSON.parse(json)) // converte uma string para um objeto em js

// ultiliza o JSON para se comunicar com outras linguagens ou API's
// transforma o objeto em string 