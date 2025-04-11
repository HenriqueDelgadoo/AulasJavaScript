//imprimir 11 vezes "hello world"
for (let i = 0; i < 11; i ++) { 
    console.log ("hello world");
}
//Tabuada 
for (let i = 1; i <= 10; i++) {  
    for (let j = 1; j <= 10; j++) {
      console.log (`${i} x ${j} = ${i * j}.`);
    }
} 

// soma de todos os numeor impares de 1 a 100
let soma = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    soma += i;
  }
}
  console.log (soma);
  
//Contagem regressiva de 10 a 1, no final falar feliz ano novo
  for (let i = 10; i >= 1; i--) {
    console.log (i);
  }
  console.log ("Feliz ano novo!");
