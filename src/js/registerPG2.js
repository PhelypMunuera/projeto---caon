const nextButton = document.getElementById("nextButton")
const homeButton = document.getElementById("homeButton")
const moreMember = document.getElementById("moreMemberFamily")

nextButton.onclick = function(){ 

    window.location.href = "../html/registerMedicalInformation.html"
       
}



homeButton.onclick = function(){
    alert("Está ação perdera todo as informações. Deseja continuar?")
    window.location.href = "../html/registerClient.html"

}

moreMember.onclick = function(){
    const newSection = document.createElement("section")    
    const container = document.getElementById("members");

    newSection.innerHTML = `
                <br>
                <section id="containerId" class="newMenber">
                    <input type="text" id="newMenberName" placeholder="Nome">
                    <input type="text" id="newMenberOld" placeholder="idade">
                    <input type="text" id="newMenberPararents" placeholder="Parentesco">
                    <input type="text" id="newMenberEducation" placeholder="Escolaridade">
                    <input type="text" id="newMenberProfession" placeholder="Profissão">
                    <input type="text" id="newMenberIncome" placeholder="Renda">
                </section>
`

container.appendChild(newSection); 

}

const homeButton = document.getElementById("containerHome");

homeButton.onclick = function (){
     window.location.href = "../html/selectAction.html"

}