let num1 = 9.546878;
console.log(num1);

//arredondamento para baixo.
let num2 = Math.floor(num1);
console.log(num2);

//arredondamento para baixo.
let num3 = Math.ceil(num1);
console.log(num3);

//arredondamento para número inteiro mais próximo.
let num4 = Math.round(num1);
console.log(num4);

//para encontrar o valor máximo usamos math.max.
console.log(Math.max(0, 3, 2, 22, 15, 36));

//para encontrar o valor mínimo usamos math.min.
console.log(Math.min(0, 3, 2, 22, 15, 36));

//para gerar um numero aleatório usamos Math.random.
const aleatorio = Math.random();
console.log(aleatorio); 

//para gerar um numero aleatório dentro de um intervalo.
const aleatorio2 = Math.random() * (10-5) + 5;
console.log(aleatorio2);

//para elevar a potencia usamos Math.pow(base, expoente).
console.log(Math.pow(2, 3));

//para sabermos a raiz usamos Math.sqrt(radicando).
console.log(Math.sqrt(16));

//Tomar cuidado porque JavaScrip permite divisão por 0, e resultado lógico é true.
console.log(100/0);