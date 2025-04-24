let estado = 0;

function mudarLuz() {
    const luzvermelha = document.getElementById("vermelha");
    const luzlaranja = document.getElementById("laranja");
    const luzamarela = document.getElementById("amarelo");
    const luzverde = document.getElementById("verde");
    const luzazul = document.getElementById("azul");

    
    luzvermelha.classList.remove("vermelha");
    luzlaranja.classList.remove("laranja");
    luzamarela.classList.remove("amarela");
    luzverde.classList.remove("verde");
    luzazul.classList.remove("azul");

    
    if (estado === 0) {
        luzvermelha.classList.add("vermelha");
        estado = 1;
    } else if (estado === 1) {
        luzlaranja.classList.add("laranja");
        estado = 2;
    } else if (estado === 2) {
        luzamarela.classList.add("amarela");
        estado = 3;
    } else if (estado === 3) {
        luzverde.classList.add("verde");
        estado = 4; 
    } else if (estado === 4) {
        luzazul.classList.add("azul");
        estado = 0; 
    }
}
