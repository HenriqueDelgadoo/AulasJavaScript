//combinação de operações 
let a = true;
let b = false;
let c = true;

console.log(a && b || c); // true
console.log((a || b) && !c); // false
console.log(!(a && b) || (c && !b)); // true
console.log(a && (b || c) && !b); // true