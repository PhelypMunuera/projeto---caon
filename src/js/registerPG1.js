const nextButton = document.getElementById("nextButton")
const homeButton = document.getElementById("homeButton")

nextButton.onclick = function(){ 
        window.location.href = "../html/registerClientFamily.html"
}

homeButton.onclick = function(){
    alert("Está ação perdera todo as informações. Deseja continuar?")
    window.location.href = "../html/selectAction.html"

}


const homeButton = document.getElementById("containerHome");

homeButton.onclick = function (){
     window.location.href = "../html/selectAction.html"

}