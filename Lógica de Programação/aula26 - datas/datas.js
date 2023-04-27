//const data = new Date(0);//marco zero timestamp unix 01/01/1970.
//console.log(data.toString());

/*
    JavaScript conta o tempo em milisegundos. Assim, toda opeção com datas
    deve levar em conta esse detalhe. 
*/

//data de inicio do sistema unix
const tresHoras = 60 * 60 * 1000 * 3;//((60s * 60 = 1h ) * 3 ) * 1000mls = 3h
const umDia = 60 * 60 * 24 * 1000;

const data = new Date(0);
console.log(data.toString());

//data atual
const data2 = new Date();
console.log(data2.toString());

//data por extenso
const data3 = new Date(2022, 4, 23, 12, 00);//ano, mes, dia, hora, minuto, segundo
console.log(data3.toString());

//data como string
const data4 = new Date('2022-05-23T12:59:59');
console.log(data4.toString());

//numero do dia
console.log('Dia',  data4.getDate());

//numero do mes
console.log('Mes',  data4.getMonth() + 1);//mes começa do 0

//numero do ano
console.log('Ano',  data4.getFullYear());

//hora
console.log('Hora',  data4.getHours());

//minuto
console.log('Minuto',  data4.getMinutes());

//segundo
console.log('Segundo',  data4.getSeconds());

//numero do dia da semana
console.log('Dia da semana',  data4.getDay());//semana comeã no domingo = 0 - Sábado = 6

//Outra forma de saber a data atual 
console.log(Date.now());// resultado em milesimos de segundos a partir da data inicial (01/01/1970)


//formatar data com funções 

function formataData(data){
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
    
}

const data5 = new Date();
const dataBrasil = formataData(data5);
const dataNasc = formataData(data4);
console.log(dataBrasil);
console.log(dataNasc);