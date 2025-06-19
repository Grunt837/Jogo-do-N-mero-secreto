let listaDeNumeroSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 100");
}

exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector("input").value;
    
    if  (chute == numeroSecreto) { 
    exibirTextoNaTela("h1", "Parabéns!!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número Secreto (${chute}) com ${tentativas} ${palavraTentativa}.`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("h1", "Errou!!");
            exibirTextoNaTela("p", `O Número Secreto é Menor que ${chute}.`);
    }   else {
            exibirTextoNaTela("h1", "Errou!!");
            exibirTextoNaTela("p", `O Número Secreto é Maior que ${chute}.`) ;
        } 
        tentativas++;
        limparCampo()
    }
}

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let QuantidadeDeElementosNaListas = (listaDeNumeroSorteados.length);

    if (QuantidadeDeElementosNaListas == numeroLimite){
        listaDeNumeroSorteados = [];
    }

    if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
    return gerarNumeroSecreto ();
    } else {
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log(listaDeNumeroSorteados);
    return numeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true); 
}