// Escreva uma funcção que recebe dois numero e retorna o maior deles

function maior(num1, num2){
    let maior, menor;
    if (num1 > num2){
        maior = num1;
        menor = num2;
    }
    else{
        maior = num2;
        menor = num1;
    }
    return 'Maior ' + maior + ' e Menor ' + menor;
}

const a = 5;
const b = 10;
const relacao = maior(a, b);

console.log(relacao);