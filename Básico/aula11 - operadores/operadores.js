/*
    Operadores aritiméticos:

    + adição/concatenação
    - subtração
    * multiplicação
    / divisão
    ** potencia
    % resto da divisão

*/

const num1 = 3;
const num2 = 10; 
const num3 = 8;

let num4 = 10;
let num5 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2 * num3);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num2 % num1);

//REGRAS DE PRECEDÊNCIA
/*
  
   () -> Parenteses
   ** -> Exponênciação
   * / % -> Multiplicação/Divisão/Resto
   + - -> Soma/Subtração

 */

//Operador de incremento (++)
let contador = 1;
contador++;//2
contador++;//3
contador++;//4
console.log(contador);

//Operador de decremento (--)
let contador2 = 10;
contador2--;//9
contador2--;//8
contador2--;//7
console.log(contador2);

//Operadores de atribuição

/*
    num1 += num2 -> (num1 = num1 + num2)
    num1 -= num2 -> (num1 = num1 - num2)
    num1 *= num2 -> (num1 = num1 * num2)
    num1 /= num2 -> (num1 = num1 / num2)

*/

console.log(num4 += num5);
//console.log(num4 -= num5);
//console.log(num4 *= num5);
//console.log(num4 /= num5);

//Erro NaN -> Not a number


