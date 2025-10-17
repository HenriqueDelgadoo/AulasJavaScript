const calculadora = ((a,b,p) =>{
    switch (p) {
        case "+":
            return a + b 
        
        case "-" :
            return a - b 
        
        case "*":
            return a*b
      
        case "/":
            return a / b
        
        default:
        break;
    }
    
})

console.log(calculadora(10,20,"*"))