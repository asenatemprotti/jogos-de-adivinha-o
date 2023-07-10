var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var tentativas = 0;

function adivinhar() {
    var palpite = parseInt(document.getElementById("palpite").value);
    var mensagem = document.getElementById("mensagem");

    if (palpite === numeroAleatorio) {
        mensagem.textContent = "Você acertou! Parabéns!";
    } 
    
    else if (palpite < numeroAleatorio) {
        mensagem.textContent = "O número é maior! Tente novamente.";
    } 
    
    else if (palpite < 1 || palpite > 100) {
        mensagem.textContent = "Número inválido! Digite um número entre 1 e 100.";
    }

    else {
        mensagem.textContent = "O número é menor! Tente novamente.";
    }

    tentativas++;
}
