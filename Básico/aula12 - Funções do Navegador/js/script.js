// funcao alert mostra uma mensagem de alerta com pop-up 
window.alert('Nossa mensagem');

/*funcao confirm é mostrado um por-up de confirmação
  retorna um false ou true*/
window.confirm('Deseja realmente cancelar?');

/*funcao prompt abre um input de texto para o o usuario escrever 
  retorna algo escrito pelo usuário*/
window.prompt('Digite seu nome: ');


const confirma = confirm('Vai mesmo?')
console.log(confirma);

let num1 = prompt('Digite um numero:');
let num2 = prompt('Digite outro numero: ');
console.log(num1);
console.log(num2);
let soma = Number(num1) + Number(num2);


const resultado = alert('O resultado é ' + soma);
