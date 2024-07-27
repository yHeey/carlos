var varPorta = document.getElementById("porta")
var resetarPagina = document.getElementById("resetar");


var imagens = [
    "img/porta.png",
    "img/porta.png",
    "img/porta.png",
    "img/porta.png",
    "img/porta.png",
    "img/aberta.png"
]
function resetarPagina() {
    location.reload()
}

function playAudio () {
    document.getElementById("musica").play()
}

function tocarBatida () {
    document.getElementById("tocando").play()
}

function musicaVitoria () {
    document.getElementById("vitoria").play()
}

function pauseAudio () {
    document.getElementById("musica").pause()
}



varPorta.addEventListener('click', function () {
    var aleatoriedade = Math.floor(Math.random() * imagens.length);
    varPorta.src = imagens[aleatoriedade];

    
    if (varPorta.src.includes("aberta.png")) {
        musicaVitoria()
        resetarPagina.style.display = 'block'
    } else {
        tocarBatida()
    }
})


