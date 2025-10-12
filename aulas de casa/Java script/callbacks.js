function mult(values){
    for (let i= 0; i < values.length; i ++){ // percorre toda a array iniciando no indice 0
        // values[i] *= values[i] // n *= n
        values[i] = func (values[i]) // recebe a função "func" que possue sua lógica, callback
    }
    return values
}

const values = [1,2,3,4,10]
const func = (n) => n *= n // arrow function

// calback: map, filter, reduce
console.log(mult(values))