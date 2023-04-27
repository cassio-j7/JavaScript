const frutas = ['Maça', 'Uva', 'Pêra'];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
console.log();

for (let i in frutas){
    console.log(frutas[i]);
}
console.log();

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 26, 
    altura: 1.8
};

for(let i in pessoa){
    console.log(i)
}
console.log();

//outra forma de chamar um atributo
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);
console.log(pessoa['idade']);
console.log(pessoa['altura']);

//Resumo: For in retorna o índice ou chave(string, array ou objetos)