var pegaDivTempo = document.getElementById("tempo")
let pegaDivEspaco = document.querySelector("#espaco")

// Função de Tempo
function timeMsg(){
    setTimeout("insereHtml()", 3000)
}

function insereHtml(){
    pegaDivTempo.innerHTML = "Conteúdo Inserido"
}

// Função URL
function spaceMsg(){
    let location = window.location.href
    pegaDivEspaco.innerHTML = location
}

// Função da Imagem
function response(){
    alert("Você colocou o mouse em cima da imagem")
}