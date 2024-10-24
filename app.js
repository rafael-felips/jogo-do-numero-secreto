let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do numero secreto");
  exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    let mensagemTentativas =
      tentativas > 1
        ? `Você descobriu o numero secreto! com ${tentativas} tentativas`
        : `Você descobriu o numero secreto! com ${tentativas} tentativa`;
    exibirTextoNaTela("h1", "Acertou!");
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "numero secreto é menor");
    } else {
      exibirTextoNaTela("p", "numero secreto é maior");
    }
  }
  tentativas++;
  limparCampo();
}

function gerarNumeroAleatorio() {
  let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == numeroLimite) {
    alert("Reiniciando os numeros aleatorios");
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(NumeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(NumeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return NumeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
