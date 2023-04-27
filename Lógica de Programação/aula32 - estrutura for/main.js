console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
console.log();

//Usamos a estrurua for quando sabemos a quantidade de iterações(rounds)

    for(let i = 0; i <= 5; i++){
        console.log("Linha " + i);
    }

console.log();

   for(let i = 0; i <= 10; i++){
        const par = i % 2 === 0 ? "Par" : "Impar";// operação ternaria
        console.log(i, par)
   }
   console.log();
   
   const frutas = ['Maça', 'Laranja', 'Uva'];

    for(let i = 0; i < frutas.length; i++){
        console.log(frutas[i]);
    }

