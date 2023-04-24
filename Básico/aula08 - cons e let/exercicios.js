/*
    Cassio Jordan tem 26 anos, pesa 100kg e 
    tem 1.80m de altura e seu IMG é 25.996547841454787
*/

const nome = 'Cassio';
const sobreNome = 'Jordan';
let idade = 26;
let altura = 1.80;
let peso = 100.0;
let imc = peso / (altura * altura);
let anoNascimento = 2023 - idade;


console.log(`${nome} ${sobreNome} tem ${idade} de idade e pesa ${peso}kg.`);
console.log(`Mede ${altura}m de altura e seu IMC é ${imc}.`);
console.log(`${nome} ${sobreNome} nasce no ano de ${anoNascimento}.`);