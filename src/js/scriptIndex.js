const loginButton = document.getElementsByClassName("buttonBase")[0];
const checkRemeber = document.getElementById("checkRemeber");

// // fazer um mideware para validar senha de usuario
loginButton.onclick = function(){ 
   window.location.href = "./src/html/selectAction.html"
}

// Seleciona o botão e o checkbox
function activeRemember() {
  // Adiciona o evento "change" ao checkbox
  checkRemeber.addEventListener("change", function statusCheck () {
    let statusRemeber = checkRemeber.checked; // Verifica se o checkbox está marcado
    console.log(`O status é ${statusRemeber}`); // Exibe o status no console
  });



}

activeRemember()

