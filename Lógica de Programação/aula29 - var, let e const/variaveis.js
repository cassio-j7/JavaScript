
/*
// Relembrando: prefixos let permitem reatribuir um novo valor a uma variável.
let nome = 'Cassio ';
console.log(nome);

nome = 'Jordan';
console.log(nome);

// Relembrando: prefixos const permitem reatribuir um novo valor a uma variável.
const nome1 = 'Cassio ';
console.log(nome);

//error
nome1 = 'Jordan';
console.log(nome);

*/


//Let possui escopo de bloco {...}, ou seja, só está definida dentro do bloco em que é declarada. 
const verdadeira = true;

    if (verdadeira){
        let nome = 'Cassio';
        console.log(nome);

        if (verdadeira){
            let nome = 'Jordan';
            console.log(nome);
        }
    }