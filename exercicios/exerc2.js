//operador ou (||)
let x = false;
let y = true;

console.log(x || y); // true
console.log(x || false); // false
console.log(y || false); // true
console.log(x || (y && false)); // false
