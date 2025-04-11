function antes(){
    let numero = parseInt(prompt("Me informe o numero?"))
    let res = document.getElementById('result');
    
    res.innerHTML = `<p> Os numeros proximos são ${numero +1}, ${numero-1}.</p>`;
}