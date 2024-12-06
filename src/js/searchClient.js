const actionButton = document.getElementById("confirmation")
const homeButton = document.getElementById("homeButton")
const valueCardSus = document.getElementById("cardSUSUser")

// // fazer um mideware para validar senha de usuario
actionButton.onclick = function(){ 
   
   const value = valueCardSus.value
    
        window.location.href = "../html/cadastrado.html"

        console.log("if ")
   /* if() { Aqui ficara a logica para entegra o banco de dados, para buscar usuarios 
    }else {
        alert("Úsuario Não Cadastrado")
    }
*/

}



homeButton.onclick = function(){
   
    window.location.href = "../html/selectAction.html"
}

const homeButton = document.getElementById("containerHome");

homeButton.onclick = function (){
     window.location.href = "../html/selectAction.html"

}