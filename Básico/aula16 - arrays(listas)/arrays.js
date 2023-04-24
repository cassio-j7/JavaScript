// Um array é uma lista, uma coleção de coisas.
// Diferente de Java, em JavaScript o array não é homogêneo. 

const alunos= ['Cassio', 'Cadu', 'Apolo', 1, 25.69, null, true];
console.log(alunos);
console.log();

//impressão de elementos por posição.
console.log(alunos[0]);
console.log();

//impressão de posição por elementos.
console.log(alunos['Cassio']);
console.log();

//altera os elementos de um vetor.
alunos[4] = 'Kira';
console.log(alunos);
console.log();

//adicionar elemento ao final do vetor
alunos.push('Mabel');
console.log(alunos);
console.log();

//adicionar elemento ao inicio do vetor
alunos.unshift('Bravinha');
console.log(alunos);
console.log();

//remove o elemento final do vetor
//alunos.pop();
console.log(alunos);
console.log();

const removidoFinal = alunos.pop();
console.log(removidoFinal);
console.log();

//remove o elemeno do inicio
console.log(alunos);

const removidoInicio = alunos.shift();
console.log(removidoInicio);
console.log();

//delete o elemento final do vetor
delete alunos[1];
console.log(alunos);
console.log();


//para limita a quantidade de elementos que serão impressos
console.log(alunos.slice(0, 2));
console.log();

//para saber se aquele conjunot é um array
console.log(alunos instanceof Array);



