/*
    Escreva uma função que recebe um numero e retorneo seguinte: 
        - Numero é divisivel por 3 = Fixzz
        - Numero é divisivel por 5 = Buzz
        - NUmero é divisivel por 3 e 5 = FizzBuzz
        - Não é divisível por 3 e 5 = Retorna o proprio número
*/

function fizzBuzz(num){
    if (num % 3 === 0 && num % 5 === 0){
        return 'FizzBuzz';
    }

    else if (num % 5 === 0){
        return 'Buzz';
    }

    else if (num % 3 === 0){
        return 'Fizz';
    }
    
    else{
        return num;
    }
}

for(let i = 0; i < 100; i++){
    console.log(i, fizzBuzz(i));
}