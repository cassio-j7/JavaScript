//selecioanando a area de texto h1 (container(h1)) = .container h1
const h1 = document.querySelector('.container h1'); 
const div = document.querySelector('.container');

//instanciando um objeto tipo data.
const data = new Date();
const dia = data.getDay();
const nomeDia = getDiaSemanaTexto(dia);
const nomeData = formataData(data);
// const 

//escrevendo dentro da da seleção h1
div.innerHTML = `
    <h1>${nomeDia}</h1>
    <p> ${nomeData} </p>
`;

function formataData(data){

    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const mesFormat = nomeMes(mes);

    return `${dia} de ${mesFormat} de ${ano}`;

}

function getDiaSemanaTexto(dia){
    let diaSemanaTexto;

    switch(dia){
        case 0:
            diaSemanaTexto = "Domgino"
            return diaSemanaTexto;

        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;

        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
            
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        
        default:
            diaSemanaTexto = ('Dia não definido!');
            return diaSemanaTexto; 
        }

}

function nomeMes(mes){
    let nomeMes = '';

    switch(mes){
        case 1:
        nomeMes = 'Janeiro';
        return nomeMes;
        
        case 2:
        nomeMes = 'Fevereiro';
        return nomeMes;

        case 3:
        nomeMes = 'Março';
        return nomeMes;

        case 4:
        nomeMes = 'Abril';
        return nomeMes;

        case 5:
        nomeMes = 'Maio';
        return nomeMes;

        case 6:
        nomeMes = 'Junho';
        return nomeMes;

        case 7:
        nomeMes = 'Julho';
        return nomeMes;

        case 8:
        nomeMes = 'Agosto';
        return nomeMes;

        case 9:
        nomeMes = 'Setembro';
        return nomeMes;

        case 10:
        nomeMes = 'Outubro';
        return nomeMes;

        case 11:
        nomeMes = 'Novembro';
        return nomeMes;

        case 12:
        nomeMes = 'Dezembro';
        return nomeMes;
    }
}


