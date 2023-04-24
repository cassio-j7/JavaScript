//funcções executam ações e retornam um valor. Quando uma função não retorna um valor ela se torna um método.


//Declaração da função
function saudacao(nome){
    //escopo da função
    console.log(`Bom dia ${nome}!`);
    return 123;
}

//para se chamar a funcção fazemos: saudacao();
saudacao('Cassio'); 
saudacao('Lais');
saudacao('Cadu');
saudacao('Mabel');

//podemos fazer uma variavel receber uma função
const variavel = saudacao('Kira');
console.log(variavel);


let x = 10;
let y = 15;

function soma(x, y){
    return x + y;
}
console.log(soma(x, y));
console.log(soma(5, 3));
console.log(soma(9, 2));
console.log(soma(1, 1));
 

//outra forma de criar função. ElloFunction
const raiz = n => Math.sqrt(n);
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
