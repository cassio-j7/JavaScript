let num1 = 1; //number
let num2 = 2.5; //number
let num3 = 10.56654789715616548; //number
let temp = num2 * 'Olá';


//conversão para string usando toString.
console.log(num1.toString() + num2.toString());

//arredondamento para quantidade fixa de casas decimais, no exemplo 3 casas.
console.log(num3.toFixed(3));

//para verificar se um número qualquer é um inteiro, usamos a função isInteger.
console.log(Number.isInteger(num1));

//para verificar se um dado não é um número usamos a função isNaN
console.log(Number.isNaN(temp));

//para arredondar soma de decimais para valores inteiro usamos o toFixed. 
let num4 = 0.1;
let num5 = 0.7;

let soma = num4 + num5;
console.log(soma);
console.log(soma.toFixed(0));