const telaInicial = document.querySelector('.tela-inicial')
const btnComecar = document.querySelector(".btn-comecar")
const categorias = document.querySelector(".categorias")
const pergunta = document.querySelector(".pergunta")
const mostraOpcaoA = document.querySelector(".opcao-a")
const mostraOpcaoB = document.querySelector(".opcao-b")
const mostraOpcaoC = document.querySelector(".opcao-c")
const mostraOpcaoD = document.querySelector(".opcao-d")
const btnProxima = document.querySelector('.btn-proxima')
const mostraContador = document.querySelector('.mostra-contador')
let qtdeCorretas = document.querySelector(".qtde-corretas")
let qtdeErradas = document.querySelector(".qtde-erradas")
let qtdeNaoResp = document.querySelector(".nao-respondidas")
let respCorretas = 0
let respErradas  = 0
let naoRespondida = 0
let mensagem = document.querySelector(".mensagem")
const telaFinal = document.querySelector(".tela-final")
let msgFinal = document.querySelector(".msg-final")
const btnReiniciar = document.querySelector("btn-reiniciar")
let respondidas = 0
let perguntaEmJogo = ''
let tempoContador = 15

let bancoPerguntas = [
  {
  	pergs: "pergunta 1",
  	opcaoA: "correta",
  	opcaoB: "errada",
  	opcaoC: "errada",
  	opcaoD: "errada",
  	correta: "A"
  },  
  {
  	pergs: "pergunta 2",
  	opcaoA: "resposta errada",
  	opcaoB: "resposta errada",
  	opcaoC: "correta",
  	opcaoD: "resposta errada",
  	correta: "C"
  },  
  {
  	pergs: "pergunta 3",
  	opcaoA: "resposta",
  	opcaoB: "resposta",
  	opcaoC: "correta",
  	opcaoD: "resposta",
  	correta: "C"
  },  
  {
  	pergs: "pergunta 4",
  	opcaoA: "resposta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "correta",
  	correta: "D"
  },  
  {
  	pergs: "pergunta 5",
  	opcaoA: "correta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "resposta",
  	correta: "A"
  },  
  {
  	pergs: "pergunta 6",
  	opcaoA: "resposta",
  	opcaoB: "correta",
  	opcaoC: "resposta",
  	opcaoD: "resposta",
  	correta: "B"
  },  
  {
  	pergs: "pergunta 7",
  	opcaoA: "correta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "resposta",
  	correta: "A"
  },  
  {
  	pergs: "pergunta 8",
  	opcaoA: "resposta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "correta",
  	correta: "D"
  },  
  {
  	pergs: "pergunta 9",
  	opcaoA: "resposta",
  	opcaoB: "resposta",
  	opcaoC: "correta",
  	opcaoD: "resposta",
  	correta: "C"
  },  
  {
  	pergs: "pergunta 10",
  	opcaoA: "correta",
  	opcaoB: "resposta",
  	opcaoC: "resposta",
  	opcaoD: "resposta",
  	correta: "A"
  } 
]

btnComecar.addEventListener('click', ()=> {
  telaInicial.style.display = 'none'
  iniciar()
})

let intervaloContador
function iniciar() {
  processaPergunta()
  intervaloContador = setInterval(contador, 1000)
}

function processaPergunta() {

  console.log('respondidas ' + respondidas)
	if(respondidas < 10) {
    
		perguntaEmJogo = bancoPerguntas[respondidas]
    pergunta.innerHTML = perguntaEmJogo.pergs
    mostraOpcaoA.innerHTML = perguntaEmJogo.opcaoA
    mostraOpcaoB.innerHTML = perguntaEmJogo.opcaoB
    mostraOpcaoC.innerHTML = perguntaEmJogo.opcaoC
    mostraOpcaoD.innerHTML = perguntaEmJogo.opcaoD
   
    respondidas++
	} else {
    telaFinal.style.display = 'flex'
    qtdeErradas.innerHTML = 
    clearInterval(intervaloContador)
    console.log('fim')
  }  
}

function contador() {
  if(tempoContador > 0) {
    tempoContador--
    mostraContador.innerHTML = tempoContador
    console.log(tempoContador)
  } else {
    tempoContador = 15
    naoRespondida++
    qtdeNaoResp.innerHTML = naoRespondida
    processaPergunta()
    console.log('fim do tempo')
  }

}

function checaResposta(resposta) {
  if(resposta === perguntaEmJogo.correta) {
    console.log('correto')
    respCorretas++
    qtdeCorretas.innerHTML = respCorretas
    tempoContador = 15
  } else {
    respErradas++
    qtdeErradas.innerHTML = respErradas
    tempoContador = 15
    console.log('errada')
  }
  if(respCorretas > 10) {
    respCorretas = 0
  }
  processaPergunta()
}

function reiniciar(){
  telaFinal.style.display = 'none'
  iniciar()
}

