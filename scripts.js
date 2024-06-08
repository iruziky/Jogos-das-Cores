var posicaocerta;
var estado = 0;
var acertou = false;

function iniciar() {
    // Reiniciando estado de acerto
    acertou = false;

    // Vetor para armazenar valores RGB
    var vetorrgb = [];
    
    // Definindo estado como "jogo iniciado"
    estado = 1;

    // Definindo a posição correta aleatoriamente
    posicaocerta = Math.floor(Math.random() * 6) + 1;

    // Iterando sobre cada quadrado para definir suas cores
    for (var i = 1; i < 7; i++) {
        var opcao = 'op' + i;

        // Gerando valores RGB aleatórios
        for (var y = 0; y < 3; y++) {
            vetorrgb[y] = Math.floor(Math.random() * 256);
        }

        // Se a posição atual é a correta, atualizando o texto da cor
        if (posicaocerta == i) {
            document.getElementById('cores').innerHTML = 'RGB(' + vetorrgb[0] + ',' + vetorrgb[1] + ',' + vetorrgb[2] + ')';
        }

        // Definindo a cor do quadrado atual
        var a = document.getElementById(opcao);
        a.innerHTML = '';
        var cor = "rgb(" + vetorrgb[0] + "," + vetorrgb[1] + "," + vetorrgb[2] + ")";
        a.style.backgroundColor = cor;
    }
}

function resposta(entrada) {
    // Verificando se o jogo está em andamento e se o usuário ainda não acertou
    if (estado == 1 && !acertou) {
        var a = document.getElementById('op' + entrada);
        var b = document.getElementById('op' + posicaocerta);

        // Se a resposta está correta
        if (a == b) {
            acertou = true;
            
            // Exibindo mensagem de parabéns e a sobreposição
            var divParabens = document.getElementById("mensagem");
            var overlay = document.getElementById("overlay");
            divParabens.style.display = "block";
            overlay.style.display = "block";
        
            // Adicionando evento para o botão de jogar novamente
            var botaoJogarNovamente = document.getElementById("jogar-novamente");
            botaoJogarNovamente.addEventListener("click", function() {
                // Ocultando mensagem de parabéns e a sobreposição, e reiniciando o jogo
                divParabens.style.display = "none";
                overlay.style.display = "none";
                iniciar();
            });
        } else {
            // Se a resposta está errada, exibindo imagem de erro
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

// Iniciando o jogo quando a página carrega
window.onload = function() {
    iniciar();
}
