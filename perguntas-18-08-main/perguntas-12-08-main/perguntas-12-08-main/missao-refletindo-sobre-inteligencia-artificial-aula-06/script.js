const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como deve ser a regulagem da plataforma da colheitadeira?",
        alternativas: [
            {
                texto: "A plataforma precisa estar alinhada corretamente com a quantidade de linhas de plantio.",
                afirmacao: "certa"
            },
            {
                texto: "regulada de forma superficial tudo abaixada no chão",
                afirmacao: "errada"
            }
        ]
    },
    {
        enunciado: "De qual marca de maquinas você prefere",
        alternativas: [
            {
                texto: "case ih",
                afirmacao: "a melhor marca,as maquinas são boas e tem um bom rendimento"
            },
            {
                texto: "jonh deere",
                afirmacao: "As maquinas são muito caras,as peças também e tem pouco rendimento"
            }
        ]
    },
    {
        enunciado: "Para que serve o rolo faca?",
        alternativas: [
            {
                texto: " Implemento agrícola usado principalmente no sistema de plantio direto para o manejo da vegetação, especialmente plantas de cobertura ou restos de culturas anteriores.",
                afirmacao: "acertou"
            },
            {
                texto: "Para descompactar o solo, removendo camadas compactadas e melhorando sua estrutura, sem a necessidade de revolvimento profundo.",
                afirmacao: "errou"
            }
        ]
    },
    {
        enunciado: "Qual dessas é a melhor dica para aumentar a produção de soja?",
        alternativas: [
            {
                texto: "Scarificar e passar a grade na roça toda.",
                afirmacao: "errada"
            },
            {
                texto: "Plantar braquiaria,aveia,nabo e etc.. para ter uma boa palhada",
                afirmacao: "certa"
            }
        ]
    },
    {
        enunciado: "O que é manejo agricola",
        alternativas: [
            {
                texto: "Um conjunto de todas as práticas aplicadas a um solo visando a produção agrícola.",
                afirmacao: "certa"
            },
            {
                texto: "Conjunto de atividades e práticas utilizadas para preparar e cultivar a terra visando a produção de plantas para diversos fins, como alimentação humana e animal, ou para produção de matérias-primas para indústrias.",
                afirmacao: "errada"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "0";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado por participar.";
    caixaAlternativas.textContent = "";
}

mostraPergunta();