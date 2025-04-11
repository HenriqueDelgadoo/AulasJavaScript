const planos = {
    basic: 29.99,
    family: 49.99,
    supremacy: 99.99
};

function assine() {
    let planoEscolhido = prompt("Qual plano deseja escolher? (basic, family, supremacy)");

    // Convertendo a escolha do usuário para minúsculas e acessando o valor do plano
    let valor = planos[planoEscolhido.toLowerCase()]; 

    let res = document.getElementById('result');

    // Verificando se o plano é válido
    if (valor !== undefined) {
        res.innerHTML = `<p>O valor do plano escolhido foi R$ ${valor.toFixed(2)}.</p>`;
    } else {
        res.innerHTML = `<p>Plano inválido. Por favor, escolha entre: basic, family ou supremacy.</p>`;
    }
}

function verplanos() {
    let kao = document.getElementById('result1');
    kao.innerHTML = `<p>Os planos disponíveis são: 
                        <strong>Basic (R$29,99)</strong>, 
                        <strong>Family (R$49,99)</strong>, 
                        <strong>Supremacy (R$99,99)</strong>.
                    </p>`;
}

function conta() {
    let usuario = prompt("Qual seu usuário?");
    let senha = prompt("Qual sua senha?");
    
    let mio = document.getElementById('result2');
    mio.innerHTML = `<p>Você ainda não tem acesso à sua conta! Aguarde eu terminar a programação ;).</p>`;
}
