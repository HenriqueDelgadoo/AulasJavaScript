// estrutura de repetição 
// for 

for (let i = 0 ; i <=100 ; i+=2){ // 3 parametros, variável, condição, contador( faça enquanto verdadeiro )
    console.log(i)
}

// for of 

const nomes = [ "Felipe", "Maria" , "Paulo" , "Marcus"]

// for (let a = 0 ;  a < nomes.length ;a ++){
//     console.log(nomes[a])
// }

for (const nome of nomes){ // for of, minimiza o codigo e retorna todo o conteudo do array. Ideal para manipulção de arrays qnd o indice pouco importa 
    console.log (nome)
}

// for in, interage com objestos

//obj.prop
//obj.['prop']

const person  = {
    nome : "Henrique",
    idade : 20,
    cidade : "Limeira",
}

 for(const prop in person){ // prop == propriedades, ele sempre retorna a propriedades do objeto
    console.log (`Prop: ${prop} - ${person[prop]}`) // dois jeitos de retornar, aqui retorna toda a lista de propriedades do objeto
    console.log (`${person.cidade}`) // já aqui retorna a propriedade desejada do objeto
 }