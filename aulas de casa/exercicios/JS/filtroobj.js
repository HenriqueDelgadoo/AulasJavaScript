const pessoas = [
  { nome: "Ana", idade: 28, profissao: "Desenvolvedora" },
  { nome: "João", idade: 22, profissao: "Designer" },
  { nome: "Carlos", idade: 30, profissao: "Desenvolvedor" },
  { nome: "Mariana", idade: 24, profissao: "Desenvolvedora" },
];

//Dado um array de objetos representando pessoas com nome, idade e profissão, filtre apenas aquelas com mais de 25 anos e que sejam desenvolvedores.

const filtro = pessoas.filter((pessoas)=>{
    return(pessoas.idade > 25 && pessoas.profissao.includes("Desenvolvedor"))
      
})

console.log(filtro)