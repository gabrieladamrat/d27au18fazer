document.querySelector('.pararmetro-senha_botao');
const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
senha.TextContent = tamanhoSenha;
const botoes = document.querySelectorAll('.parametro-senha_botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

console.log(botoes);

function diminuiTamanho() {
    if(tamanhoSenha > 1)
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.TextContent = tamanhoSenha;
}
function aumentaTamanho() {
    if (tamanhoSenha < 20){
    tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.TextContent = tamanhoSenha;
}
