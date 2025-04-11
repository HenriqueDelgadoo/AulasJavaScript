function verificarDesconto (){
    let compras = parseInt (prompt ("Qual é a sua compra?"))
if (compras >= 10 && compras <= 20 ){
    alert ("Você recebeu 10% de desconto")  
    }
    else if (compras > 20 ){
        alert ("Você recebeu 20% de desconto")
    }else {
        alert ("Você ainda não esta qualificado, continue comprando")
    }

}

verificarDesconto()

