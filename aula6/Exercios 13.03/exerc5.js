function converter (){

    let real =(prompt("Quantos em reais deseja converter?"));
    let dollar = (5.81);
    let valor = real / dollar;

    let res = document.getElementById ('result')

    res.innerHTML = `<p> O real se tornará em $${valor.toFixed(2)}.</p>`; 

}