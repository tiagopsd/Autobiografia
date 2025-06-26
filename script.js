const botao = document.getElementById('botaoMensagem');
const mensagemDiv = document.getElementById('mensagem');

botao.addEventListener('click', () => {
    mensagemDiv.textContent = "Você é capaz de alcançar grandes coisas! 💪";
});