//Podemos criar variáveis em JS com os prefixos let ou var
//O empregro de ambas depende do escopo

let nome = 'João';


console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome + ' casou-se com Maria em 2012.');
console.log(`Maria teve um filho de ${nome} em 2015`);
console.log(`O filho de ${nome} se chama Eduardo.`);

//REGRAS
/*
    1 - Não podemos utilizar palavras reservadas para criar vaiáveis.
        Ex: let var = ...;
        Ex: let let = ...;
        Ex: let function = ...;
        Ex: let if = ...;
        Ex: let else = ...;

    2 - Precisam ter nomes significativos
        Ex: let n = 'João'; (errado)
            let nomeCliente = 'João'; (corrreto)
    
    3 - Não pode começar o nome de variável com numero
        Ex: let 1nome = 'João';
    
    4 - O nome de uma variavel não pode conter espaços
        Ex: let nome Cliente = 'João';
    
    5 - Se a vriável tiver mais de um nome, utilizar camelCase
        Ex: let nomeCliente = 'João';
    
    6 - As variáveis são case-sensitive, ou seja, letras maiúsculas e minúsculas importam
        Ex: let nomeCliente = 'João';
        Ex: let NomeCliente = 'João';

            nomeCliente != NomeCliente
    
    7 - Não utilizar var, utilizar let
    

*/