const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "jovem curioso chamado Lucas encontrou um antigo computador empoeirado no sótão de sua casa. Ao ligá-lo, ele descobriu que o computador estava equipado com um software avançado de inteligência artificial que havia sido projetado há décadas, mas nunca havia sido usado. Fascinado, Lucas começou a explorar o sistema e logo percebeu que a IA tinha a capacidade de aprender e se adaptar. Com o tempo, ele começou a fazer experimentos e a interagir com a IA, que se mostrou cada vez mais inteligente e útil. A descoberta transformou a vida de Lucas, permitindo-lhe resolver problemas complexos e até criar novos projetos inovadores. Para você a inteligencia artificial e boa para sociedade?",
        alternativas: [
            {
                texto: "eu acho que a inteligencia artificial nos prende mais ainda na tecnologia!",
                afirmacao: " aqueles que ultilizam muito da internet acaba ficando viciado em celulares, computadores e tablets. "
            },
            {
                texto: "sim a inteligencia artificial nos ajudam bastante hoje em dia!!",
                afirmacao: "IA não só expandiu seus conhecimentos, mas também abriu portas para oportunidades acadêmicas e profissionais."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial,então com essa tecnologia o que você faria com ela? ",
        alternativas: [
            {
                texto: "Usar a IA para obter informações detalhadas e atualizadas, e depois analisar essas informações criticamente, integrando-as com seu próprio conhecimento e reflexões para criar um trabalho bem fundamentado e original.",
                afirmacao: "e bom utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Utilizar a tecnologia da IA apenas para copiar e colar informações sem compreensão, o que pode levar a um trabalho superficial e com falta de análise crítica.",
                afirmacao: " mais facilidade em utilizar esses recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Em uma pequena cidade, as pessoas estavam preocupadas com uma nova IA que prometia automatizar várias tarefas no escritório essa tecnologia pode ajuda-los no futuro?",
        alternativas: [
            {
                texto: "sim essa tecnologia pode ajuda-los, ate mesmo conseguirem mais empregos ou facilitar a vidas .",
                afirmacao: "essa tecnolia pode impulsionar bastenteno conhecimento e no trabalho."
            },
            {
                texto: "mesmo podendo ajudar pessoas ela tambem pode substituilos a qualquer momentos porque são mais eficientes que os humanos",
                afirmacao: "podemos ultilizar a tecnologiaporem temos que tomar cuidado."
            }
        ]
    },
    {
        enunciado: "o que voçce pensa sobre a IA?",
        alternativas: [
            {
                texto: "A IA é uma ameaça iminente que pode substituir empregos e aumentar a desigualdade social, sem levar em conta os benefícios potenciais que pode oferecer.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda usar essa ferramentas tradicionais ."
            },
            {
                texto: "A IA tem o potencial de transformar positivamente a sociedade ao automatizar tarefas repetitivas, oferecer novas oportunidades e ajudar na resolução de problemas complexos, desde que seja implementada de maneira ética e responsável.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "em um trabalho em grupo você ira ultilizar a IA para fazer um trablho na escola isso seria ruim ou bom? ",
        alternativas: [
            {
                texto: "Usar a IA para fazer o trabalho inteiro sem a participação ativa do grupo, resultando em um trabalho que não reflete o esforço ou aprendizado dos membros e desconsidera a importância da colaboração.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final"
            },
            {
                texto: "Usar a IA para fazer o trabalho inteiro sem a participação ativa do grupo, resultando em um trabalho que não reflete o esforço ou aprendizado dos membros e desconsidera a importância da colaboração. ",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2050...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
