const data = new Date();
const diaSemana = data.getDay();

//Usando IF/ELSE
/*
let nomeDia;

    if(diaSemana === 0){
        nomeDia = 'Domingo';
    }
    else if(diaSemana === 1){
        nomeDia = 'Segunda-feira';
    }
    else if(diaSemana === 2){
        nomeDia = 'Terça-feira';
    }
    else if(diaSemana === 3){
        nomeDia = 'Quarta-feira';
    }
    else if(diaSemana === 4){
        nomeDia = 'Quinta-feira';
    }
    else if(diaSemana === 5){
        nomeDia = 'Sexta-feira';
    }
    else if(diaSemana === 6){
        nomeDia = 'Sábado';
    }

console.log(diaSemana,'-', nomeDia);
*/

//Usando switch-case


switch(diaSemana){
    case 0:
        console.log('Domingo');
        break;

    case 1:
        console.log('Segunda-feira');
        break;
    
    case 2:
        console.log('Terça-feira');
        break;

    case 3:
        console.log('Quarta-feira');
        break;
    
    case 4:
        console.log('Quinta-feira');
        break;
        
    case 5:
        console.log('Sexta-feira');
        break;
    
    case 6:
        console.log('Sábado');
        break;
    
    default:
        console.log('Dia não definido!');
        break;         
} 