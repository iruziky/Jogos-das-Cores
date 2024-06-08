var posicaocerta;
var estado = 0;
var acertou = false;

function iniciar() {
    acertou = false;
    var vetorrgb = [];
    estado = 1;
    posicaocerta = Math.floor(Math.random() * 6) + 1;
    
    for (var i = 1; i < 7; i++) {
        var opcao = 'op' + i;

        for (var y = 0; y < 3; y++) {
            vetorrgb[y] = Math.floor(Math.random() * 256);
        }

        if (posicaocerta == i) {
            document.getElementById('cores').innerHTML = 'RGB(' + vetorrgb[0] + ',' + vetorrgb[1] + ',' + vetorrgb[2] + ')';
        }

        var a = document.getElementById(opcao);
        a.innerHTML = '';
        var cor = "rgb(" + vetorrgb[0] + "," + vetorrgb[1] + "," + vetorrgb[2] + ")";
        a.style.backgroundColor = cor;
    }
}

function resposta(entrada) {
    if (estado == 1 && !acertou) {
        var a = document.getElementById('op' + entrada);
        var b = document.getElementById('op' + posicaocerta);

        if (a == b) {
            acertou = true;
            var divParabens = document.getElementById("mensagem");
            divParabens.style.display = "block";
        
            var botaoJogarNovamente = document.getElementById("jogar-novamente");
            botaoJogarNovamente.addEventListener("click", function() {
                divParabens.style.display = "none";
                iniciar();
            });
        } else {
            var src = document.getElementById('op' + entrada);
            if (src.getElementsByTagName('img').length > 0) {
                src.removeChild(src.getElementsByTagName('img')[0]);
            }
            var img = document.createElement("img");
            img.src = "https://i.postimg.cc/wjRpWgK2/image.png";
            src.appendChild(img);
        }
    }
}

window.onload = function() {
    iniciar();
}
