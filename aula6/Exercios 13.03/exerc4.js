function troco (){

    let produto = (prompt("Qual produto deseja comprar?"))
    let preco = parseFloat(prompt("Qual o preço?"))
    let total = parseFloat (prompt("Quanto o cliente entregou?"))

    let calculo = total - preco
    let res = document.getElementById('result');
    
    res.innerHTML = `<p> O produto custa R$ ${preco.toFixed(2)}.</p>`; 
    res.innerHTML += `<p> O valor final do troco será de R$ ${calculo.toFixed(2)}.</p>`; 

}