//let numero = (prompt('Digite um número qualquer: ')); obs: retorna string
let numero = Number(prompt('Digite um número qualquer: '));


//seleciona o ID de um elemento na pagina HTML e armazena na variavel numeroTitulo.
const numeroTitulo = document.getElementById('numero-titulo');

//seleciona o ID de um elemento na pagina HTML e armazena na variavel def.
const def = document.getElementById('texto');

//alterar o html interno do elemento numeroTitulo
numeroTitulo.innerHTML = numero;

//alterar o html interno do elemento texto
def.innerHTML += `<p> A raiz quadrada de ${numero} é  ${Math.sqrt(numero)}.</p>`;
def.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
def.innerHTML += `<p>${numero} é NaN(Not is a Number): ${Number.isNaN(numero)}.</p>`;
def.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
def.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
def.innerHTML += `<p>Com duas casa decimais: ${numero.toFixed(2)}.</p>`;


