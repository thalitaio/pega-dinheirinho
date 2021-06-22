var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

//variaveis dos niveis
var criaDinheirinhoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'normal') {
    criaDinheirinhoTempo = 1500
} else if(nivel === 'dificil') {
    criaDinheirinhoTempo = 1200
} else if(nivel === 'ninja') {
    criaDinheirinhoTempo = 900
}


function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
    tempo -= 1
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaDinheirinho)
        window.location.href = 'vitoria.html'
    } else {
    document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoAleatoria(){

    //remover o dinheirinho anterior (caso exista)
   if(document.getElementById('dinheirinho')) {
    document.getElementById('dinheirinho').remove()

        //diminuindo as vidas
        if(vidas > 3) {
            window.location.href = 'fim_do_jogo.html'
        } else {
        document.getElementById('vida' + vidas).src = "imagens/saco vazio.png"
        vidas++
        }
   }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    var dinheirinho = document.createElement('img')
    dinheirinho.src = 'imagens/dinheirinho.png'
    dinheirinho.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    dinheirinho.style.left = posicaoX + 'px'
    dinheirinho.style.top = posicaoY + 'px'
    dinheirinho.style.position = 'absolute'
    dinheirinho.id = 'dinheirinho'
    dinheirinho.onclick = function() {
        this.remove()
    }

    document.body.appendChild(dinheirinho)

    console.log(ladoAleatorio())

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'dinheirinho1'
        case 1:
            return 'dinheirinho2'
        case 2:
            return 'dinheirinho3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}