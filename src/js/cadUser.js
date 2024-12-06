const moreMember = document.getElementById("moreMemberFamily");

moreMember.onclick = function () {
    if (document.getElementById("saveButton")) {
        alert("Você tem atualizações não salvas");
        return;
    }

    const firstObsDiv = document.querySelector("#otherObs");

    const newInput = document.createElement("input");
    newInput.className = "obs";
    newInput.type = "text";
    newInput.placeholder = "Escreva nova observação:";
    newInput.style.marginTop = "10px";

    firstObsDiv.appendChild(newInput);

    const saveButton = document.createElement("button");
    saveButton.textContent = "Salvar";
    saveButton.id = "saveButton";
    saveButton.className = "buttonbase";
    saveButton.style.marginTop = "10px";

    firstObsDiv.appendChild(saveButton);

    console.log("Novo input e botão 'Salvar' criados.");
};


const homeButton = document.getElementById("containerHome");

homeButton.onclick = function (){
     window.location.href = "../html/selectAction.html"

}