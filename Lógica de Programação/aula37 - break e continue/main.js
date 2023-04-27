//Usamos a palavra continue quanto queremos que alguma iteração não seja executada.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){
    if(numero === 2){
        console.log('Pulei o numero 2')
        continue;
    }
    if(numero === 5){
        console.log('Pulei o numero 5')
        continue;
    }
    console.log(numero);
}


console.log('#############')


//Usamos a palabra break quando queremos parar um processo em determinado ponto.

for(let numero of numeros){
    if (numero === 7){
        break;
    }
    console.log(numero);
}
