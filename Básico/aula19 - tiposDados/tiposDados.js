/*
    Existem dois tipos de dados: 

    -Primitivos (imutáveis): string, number, boolean, undefined, bigint, symbol 
    
    Não permite reatribuir um dado a uma variável que já possui um valor.

    Valores copiados.
*/

const a = 33;
//a = 20;// dará erro durante a execução


/*    
    -Referência (mutável): array, object, function.

    Permite reatribuir um dado a uma variável que já possui um valor.

    Valores passados por referência.
*/

let b = [1, 2, 3];
b.push[1] = 10;
console.log(b);
