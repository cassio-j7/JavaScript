let a = 'A';
let b = 'B';
let c = 'C';

// atribuição via desestruturação. Note que cada variavel recebe o valor da posição do array correspondente.
const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

/*podemos criar duas constantes ao mesmo tempo. Note que da mesma forma, as variaveis recebem os valores correspondentes 
 do arry numeros. */
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numeros;


console.log(primeiroNumero);
console.log(segundoNumero);
console.log(resto);

//Casso precisemos de elemento espeíficos: basta usar espaços vazios.
const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco);
