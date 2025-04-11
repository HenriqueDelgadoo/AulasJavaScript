//condicionais com if, else e else if
let nota = 50; // variavel de nota 
if(nota >= 80) {
    console.log ('parabéns, você foi aprovado(a) !');} 
    else if (nota < 80 && nota >= 60) { 
console.log('você está na nossa lista de espera');
}else {
    console.log ('você foi aprovado(a)'); 
}
 // if da a condição de verdadeiro caso a nota seja maior ou igual a 80, enquanto o else if da a condição de lista de espera caso a nota esteja entre 80 ou 60 ( a condição "e" faz a comparação entre as notas). Por fim, se for menor que 60 o else da a condição de reprovado.

 let nota1 = 70;
if (nota1 >= 90) {
    console.log ("escelente");
}
else if (nota1 >= 80) {
    console.log ("bom");
}
else if (nota1 >= 70) {
    console.log ("regular");
}
else if (nota1 >= 60) {
    console.log ("se preocupe");
}
    
else {
    console.log ("você precisa estudar");
}
//dia da semana
let dia = 'sabado'
if(dia === 'domingo') {
    console.log('vou para a praia');
} else if (dia === 'segunda') {
    console.log ('vou trabalhar');
} 
 else if (dia === 'terca') {
    console.log ('vou para escola');
}
 else if (dia === 'quarta') {
    console.log ('vou à academia');
 }
else if (dia === 'quinta') {
    console.log ('vou ao boliche');
}
 else if (dia === 'sexta') {
    console.log ('vou ao namata');
 }
 else if (dia = 'sabado') {
    console.log ('dormir')
 }
    else {
    console.log('fico em casa');
    }
// hora do dia 
let hora = 23;
if(hora < 12) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 18) {
    console.log ('boa tarde');
}
else if (hora >= 18,1 && hora<= 24) { 
    console.log('Boa noite');
}

    else {
        console.log ("erro!")
    } 