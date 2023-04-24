//Strings são indexadas. Cada caractere tem um índice, começando a partir de 0.
       //index - 12345678
let umaString = 'Um texto';
let outraString = 'O rato roeu a roupa do rei de roma.'

console.log(umaString);

//imprimi um índice da string
console.log(umaString[4]);

//imprimi um índice da string
console.log(umaString.charAt(0));

//concatenação de string
console.log(umaString.concat(' ', 'num', ' ', 'lindo', ' ', 'dia!'));

//concatenação de string
console.log(umaString + ' num lindo dia!');

//concatenação de string
console.log(`${umaString} num lindo dia!`);

//mostra a posição do início da string
console.log(umaString.indexOf('texto'));

//mostra o índice da string
console.log(umaString.search('o'));

//troca um elemento por outro
console.log(umaString.replace('Um', 'Outro'));

//mosta o comprimento da string
console.log(umaString.length);
console.log(outraString.length)

//altera um elemento específico da string
console.log(outraString.replace(/r/g, '#'));

//altera um elemento específico da string
console.log(outraString.split('r'));

//pega os ultimos indices da string
console.log(outraString.slice(-3));

//transforma tudo em caixa baixa
console.log(outraString.toLowerCase());

//transforma tudo em caixa alta
console.log(outraString.toUpperCase());



