/*
    Estruturas de controle permite controlarmos o fluxo de infromações 
    mediante condições.
*/


const hora = 50;

    if (hora > 0 && hora < 12 ) {
        console.log('Bom dia!');
    }

    else if (hora >=12 && hora <= 18){
        console.log('Boa tarde!');
    }

    else if (hora > 18 && hora <= 24){
        console.log('Boa noite!');
    }

    else{
        console.log("Horário indefinido!");
    }
