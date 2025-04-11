//exemplo 1: verificação de idade
let idade = 80;

if ( idade <= 12){
    console.log ('criança');
}
else if ( idade <= 18 ){
    console.log('adolescente');

}
else if (idade <= 60) {
    console.log ('Adulto')
} else {
    console.log ('idoso')
}

//Exemplo 2: verificação de nota com mensagem

let nota = 50; 

if(nota >= 60) {
    console.log ('parabéns, você foi aprovado(a) !');} 
    else if (nota < 60 && nota >= 50) { 
console.log('você está de recuperação');
}else {
    console.log ('você foi reprovado(a)'); 
}

//Exemplo 3: verificação de dia da semana 

let dia = "sabado";

if (dia == "segunda" || dia == "terça" || dia == "quarta" || dia == "quinta" || dia == "sexta" ){
    console.log ("Dia de semana");
} else {
    console.log ('Fim de semana');
}

//Exemplo 4: verificação do horario do dia 
let hora = 15;

if(hora < 12) {
    console.log('Bom dia');
} 
else if (hora > 18) {
    console.log ('Boa noite')
 } else {
    console.log('Boa tarde');
}

//Exemplo 5: Verificação de peso ideal 

let peso = 70;
let altura = 1.80;
let imc = (peso/(altura**2));

if (imc > 18 && imc < 25){
    console.log ('Saudavel');
}
else if (imc >= 25) {
    console.log ("Sobrepeso");
}else{
    console.log ("Abaixo do peso ideal");
}
//exemplo 6: Numeros primos
