

var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 70;
var nnivel = window.location.search;
var criaMosquitoTempo = 1500;
nnivel.replace('?', '');

if(nnivel === "?normal"){
    criaMosquitoTempo = 1500;
}else if(nnivel === "?dificil"){
    criaMosquitoTempo = 1000;
}else if(nnivel === "?darksouls"){
    criaMosquitoTempo = 700;
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura);
}
function iniciarJogo(){
 var nivel = document.getElementById("nivel").value;

 if(nivel == ''){
     alert('selecione um nível para iniciar o jogo');
     return false;
 }

 window.location.href = 'app.html?' + nivel;
}

var cronometro = setInterval(function(){
    if(tempo<=0) {
        clearInterval(cronometro);
        clearInterval(criarMosca);
        window.location.href = 'vitoria.html';
       
    }else{
    tempo--;
    document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);

ajustaTamanhoPalcoJogo();

function posicaoRandomica() {

    if(document.getElementById('mosquito')){ 
        document.getElementById('mosquito').remove();

        if(vidas> 3) {
            window.location.href = 'fim_de_jogo.html';
        }

        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";

        vidas++;    
}
    

    var posicaoX = Math.floor(Math.random() * largura) -90;
    var posicaoY = Math.floor(Math.random() * altura) -90;

    if(posicaoX < 0){posicaoX = 0;}
    if(posicaoY < 0){posicaoY = 0;}

    console.log(posicaoX, posicaoY);

    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.classList.add(tamanhoAleatorio());
    mosquito.classList.add(ladoAleatorio());
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY +  'px';
    mosquito.style.position = 'absolute';
    mosquito.id = "mosquito";
    document.body.appendChild(mosquito);
    mosquito.onclick = function() {
        this.remove();
    }
    

    console.log(tamanhoAleatorio());
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);
    console.log(classe);

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);
    switch(classe){
        case 0:
            return 'ladoa'
        case 1:
            return 'ladob'
    }

}

