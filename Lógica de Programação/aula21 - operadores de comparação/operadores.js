/*

Operadores de comparação comparam dois valores e retorna um reultado 
bolleano, ou seja, true or false.
    >   maior que 
    >=  maior ou igaul a
    <   menor que 
    <=  menor ou igual a
    ==  igualdade (compara valores)
    === igualdade estrita (compara o valor e o tipo)
    !=  diferente
    !== diferente estrito
 */


// Maior e Maior ou igual a
const maior = 10 > 5;//resultado: true
const maior2 = 10 >= 11; // resultado: false
console.log(maior);
console.log(maior2);

// Menor e Menor ou igual a
const menor = 10 < 5;//resultado: false
const menor2 = 10 <= 11; // resultado: true
console.log(menor);
console.log(menor2);

// Igualdade
const igual = 10 == 5;//resultado: false
const igual2 = 10 == 10; // resultado: true
console.log(igual);
console.log(igual2);

// Igualdade estrita
const num1 = 10;//number
const num2 = '10';//Strimg - coerção de tipos (converter um tipo em outro)
const num3 = 1.5;
const num4 = 10;

const a = num1 == num3;
const b = num1 == num2;
const c = num1 === num2;//false - dois tipos diferentes

console.log(a);
console.log(b);
console.log(c);

// Diferença estrita

const d = num1 !== num3;//ture
const e = num1 !== num2;//true
const f = num1 !== num4;//false


console.log(d);
console.log(e);
console.log(f);

