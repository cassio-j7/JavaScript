/*
    Escreva uma função chamada ePaisagem que 
    recebe dois argumentos, largura e altura, de uma 
    imagem. 
    Retorne true se a imagem estiver no modo paisagem.
    (largura > altura)
*/

const largura  = 10;
const altura = 20;

function ePaisagem(a, b){
   return a > b;
}

const formato = ePaisagem(largura, altura);
console.log(formato);