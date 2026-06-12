// ==========================================================================
// PROJETO: O Campo e a Natureza: Uma Dupla Invencível!
// CONCURSO AGRINHO 2026 - SUBCATEGORIA 3 (PROGRAMAÇÃO)
// ARQUIVO: script.js (Lógica do Quiz e Manipulação Dinâmica do DOM)
// ==========================================================================

// 1. Capturando os elementos do HTML que vamos controlar (Manipulação do DOM)
const formQuiz = document.getElementById('quiz-form');
const areaResultado = document.getElementById('resultado');
const textoMensagem = document.getElementById('mensagem-final');

// 2. Função principal para calcular os acertos e mostrar a resposta na tela
function validarQuiz(evento) {
    // Evita que a página seja recarregada ao clicar no botão, mantendo o utilizador no site
    evento.preventDefault();

    // Variável acumuladora para armazenar a pontuação final
    let pontuacao = 0;

    // Coletando as respostas que o utilizador selecionou nas 5 perguntas
    const respostaP1 = document.querySelector('input[name="p1"]:checked');
    const respostaP2 = document.querySelector('input[name="p2"]:checked');
    const respostaP3 = document.querySelector('input[name="p3"]:checked');
    const respostaP4 = document.querySelector('input[name="p4"]:checked');
    const respostaP5 = document.querySelector('input[name="p5"]:checked');

    // VALIDAÇÃO OBRIGATÓRIA: Verifica se o utilizador respondeu a todas as perguntas
    if (!respostaP1 || !respostaP2 || !respostaP3 || !respostaP4 || !respostaP5) {
        alert("Por favor, responde a todas as 5 perguntas antes de ver o teu resultado!");
        return; // Para a execução da função aqui mesmo
    }

    // 3. ESTRUTURAS CONDICIONAIS: Somando pontos se a resposta selecionada for a "certo"
    if (respostaP1.value === "certo") { pontuacao += 1; }
    if (respostaP2.value === "certo") { pontuacao += 1; }
    if (respostaP3.value === "certo") { pontuacao += 1; }
    if (respostaP4.value === "certo") { pontuacao += 1; }
    if (respostaP5.value === "certo") { pontuacao += 1; }

    // 4. Exibindo mensagens e cores personalizadas baseadas no desempenho (Lógica de Decisão)
    if (pontuacao === 5) {
        textoMensagem.textContent = "Nota Máxima! Acertou 5 de 5 perguntas.Você é um verdadeiro defensor do Agro Sustentável! 🎉";
        textoMensagem.style.color = "#2d5a27"; // Verde escuro de sucesso
    } else if (pontuacao >= 3) {
        textoMensagem.textContent = `Muito bem! Acertou ${pontuacao} de 5 perguntas.Você está no bom caminho para entender a natureza! 👍`;
        textoMensagem.style.color = "#3b7a57"; // Verde médio
    } else {
        textoMensagem.textContent = `Acertou ${pontuacao} de 5 perguntas. Vale a pena ler o texto novamente para aprender mais sobre o meio ambiente! 📚`;
        textoMensagem.style.color = "#b71c1c"; // Vermelho de atenção
    }

    // 5. Modificando as classes do CSS para fazer a área de resultado aparecer na tela
    areaResultado.classList.remove('escondido');
}

// 6. EVENT LISTENER: Adicionando o escutador de eventos que deteta o envio do formulário
formQuiz.addEventListener('submit', validarQuiz);

// --- NOVA LÓGICA: BOTÃO DE TENTAR NOVAMENTE ---
const btnReiniciar = document.getElementById('btn-reiniciar');

if (btnReiniciar) {
    btnReiniciar.addEventListener('click', () => {
        formQuiz.reset(); // Limpa as respostas
        areaResultado.classList.add('escondido'); // Esconde o resultado
        window.scrollTo({ top: formQuiz.offsetTop, behavior: 'smooth' }); // Sobe a página suavemente
    });
}
