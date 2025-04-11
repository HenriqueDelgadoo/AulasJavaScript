let contador = 0;
let resultado = document.getElementById('resultado');

function contar() {
    contador++;
    resultado.innerHTML = `<p>Agora o contador está em <mark>${contador}</mark>.</p>`;
}

function zerar() {
    contador = 0;
    resultado.innerHTML = `<p>O contador foi zerado.</p>`;
}

function diminuir() {
    contador--;  // Usando a variável 'contador' em vez de 'diminuidor'
    resultado.innerHTML = `<p>Agora o contador está em <mark>${contador}</mark>.</p>`;
}
