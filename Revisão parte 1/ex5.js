const numero = require("readline");

const num = numero.createInterface({
    input:process.stdin,
    output: process.stdout,
});
num.question ("Digite o primeiro número: ", (num1)=> {
    num.question ("Digite o segundo número: ", (num2)=> {  
        num.question ("Digite o terceiro número: ", (num3)=> {
            num.question ("Digite o quateiro número: ", (num4)=> {  
    let soma = Number (num1)+ Number (num2) + Number (num3) + Number (num4);
console.log (`A soma dos numeros é: ${soma}`)
})
})
})
})