const actionButton = document.getElementById("confirmation")
const homeButton = document.getElementById("homeButton")
const valueSelected = document.getElementById("valueOfSelected")

// // fazer um mideware para validar senha de usuario
actionButton.onclick = function(){ 
   
   const value = valueSelected.value
    if(value == "consult") {
        window.location.href = "../html/searchClient.html"
    }else {
        window.location.href = "../html/registerClient.html"
    }
    console.log("esta no botao")

}



homeButton.onclick = function(){
   
    window.location.href = "../../index.html"
}