let a = 10;
let b = 20;
let c = 15;

let resultadoE = (a > b) && (a > c);
console.log ("resultado: " + resultadoE); //false

let combinados = (a > b ) && !(b < c);
console.log ("resultado:  " + combinados); //false

let resultadoc = (a > c) || (b > c) && !(a > b);
console.log ("resultado: " + resultadoc); //true 

let nresultado = !(a > b ) || !(b > c);
console.log ("resultado: " + nresultado); //true
