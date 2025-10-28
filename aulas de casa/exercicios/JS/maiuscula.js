// Faça uma função que transforme uma string como "hoje está muito quente" em "Hoje Está Muito Quente" (capitalize cada palavra).

function ucWords(str){
    return String(str).toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}

const frase = "hoje está muito quente"
const fraseCorreta = ucWords(frase)

console.log(fraseCorreta)