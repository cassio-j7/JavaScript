//Const são valores imutáveis, que não podem ser alterados. 
/*
    const descreve uma variável que não pode ser reatribuída (com o operador de atribuição =). 
    Depois de criá-la, não podemos fazer algo assim:
    const nome = 'luiz';
          nome = 'joão'; // Erro: Assignment to constant variable.
 */

const nome = 'João';

console.log(nome);


const primeiroNumero = 5;
const segundoNumero = 10;
const conta = primeiroNumero * segundoNumero;
const contaDuplicada = conta * 2;
console.log(contaDuplicada);
 


//REGRAS
/*
    1 - Não podemos utilizar palavras reservadas para criar constantes.
        Ex: const var = ...;
        Ex: const let = ...;
        Ex: const function = ...;
        Ex: const  if = ...;
        Ex: const else = ...;

    2 - Precisam ter nomes significativos
        Ex: const n = 'João'; (errado)
            const nomeCliente = 'João'; (corrreto)
    
    3 - Não pode começar o nome de constante com numero.
        Ex: const 1nome = 'João';
    
    4 - O nome de uma constante não pode conter espaços
        Ex: const nome Cliente = 'João';
    
    5 - Se a constante tiver mais de um nome, utilizar camelCase
        Ex: let nomeCliente = 'João';
    
    6 - As constantes são case-sensitive, ou seja, letras maiúsculas e minúsculas importam
        Ex: let nomeCliente = 'João';
        Ex: let NomeCliente = 'João';

            nomeCliente != NomeCliente
    
    7 - Não pode modificar o valor de uma constante. 
    
    8 - Não utilizar var, utilizar const.
    

*/