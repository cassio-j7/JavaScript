const pessoa = {
    nome: 'Cassio',
    idade: 26,
    endereco:{//um obejto dentro de outro objeto
        rua: 'Av Brasil',
        numero: 320
    }
};

console.log(pessoa)

//Como chamar atributos do objeto
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.endereco.rua);
console.log(pessoa.endereco.numero);

//Poderiamos atibuir os atributos de um objeto a uma variavel.
const nome = pessoa.nome;
const idade = pessoa.idade;
const endereco = pessoa.endereco;

console.log(nome, idade, endereco);

//Atribuição via desestruturação. Ela procura a variavel dentro do objeto e retorna o valor 
//const { nome } = pessoa;
//console.log(nome);

//Para renomear o atributo, usamos (:). Ele proucura o atribu com o nome informado
// e o renomeia.

const { nome: teste } = pessoa;
console.log(teste);

const {
    endereco: { rua: logadouro, numero: numeroCasa},
    endereco: novoEndereco
} = pessoa;
console.log(logadouro, numeroCasa, novoEndereco);