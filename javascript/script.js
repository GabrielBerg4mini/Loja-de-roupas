let proximaImagem = 1;
let zIndexAtual = 0; 
let imagens = document.getElementById("sliders").children;

function avancarImagem() {
    imagem = imagens[proximaImagem];
    imagem.stile.zIndex = ++zIndexAtual;
    imagem.style.marginLeft = "0%";

    proximaImagem++;

    if(proximaImagem >= imagens.length) {
        proximaImagem = 0;
    }
    setTimeout(resetarImagens,500);
}

function resetarImagens() {
    imagemVisivel = proximaImagem -1;

    if(imagemVisivel < 0) {
        imagemVisivel = imagens.length - 1;
    }
    for(let i = 0; i < imagens.length; i++) {
        if(i != imagemVisivel) {
            imagens[i].style.marginleft = "100%";
        }
    }
}

let intervalo = setInterval (avancarImagem, 2000);