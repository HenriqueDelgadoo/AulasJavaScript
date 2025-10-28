async function buscarUsuarioGithub(username){
    try {
        const response = await fetch(`https://api.github/users/&{username}`);
        if(!response.ok){
            throw new Error("Usuário não encontrado");
        }
        const dados = await response.json();
        console.log(dados);
    }catch(erro){
        console.error("erro ao buscar usuário:", erro.message)
    }
}