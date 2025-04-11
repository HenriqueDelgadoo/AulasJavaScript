const elevador = document.querySelector('.elevador');
const botoes_andar = document.querySelectorAll('.andar-botao');
const tamanho_piso = 50; // altura de cada andar

let andar_atual = 0;

botoes_andar.forEach(button => {
    button.addEventListener('click', () => {
        const deslocar = parseInt(button.dataset.floor);
        moverElevador(deslocar);
    });
});

function moverElevador(andar_destino){
    const distancia = (andar_destino - andar_atual) * tamanho_piso;
    elevador.style.bottom = `${distancia}px`; // Corrigido aqui
    andar_atual - andar_destino;
}
