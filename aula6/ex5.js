function calcularpreco() {
    let preco = parseFloat(prompt("Qual o preço?")); 
    let desconto = parseFloat(prompt("Qual a porcentagem de desconto?")); 
    let valor = (preco * desconto) / 100; 
    let total = preco - valor; 
    
    let res = document.getElementById('result');
    
    res.innerHTML = `<p> O produto custa R$ ${preco.toFixed(2)}.</p>`; 
    res.innerHTML += `<p> Um desconto de ${desconto}% sobre ele será de R$ ${valor.toFixed(2)}.</p>`; 
    res.innerHTML += `<p> O valor final a ser pago será de R$ ${total.toFixed(2)}.</p>`; 
}
