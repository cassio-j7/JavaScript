/*
try{

    console.log(x);
    caso seja encontrado qualqueer erro aqui durante a execução
        o programa executa o proximo bloco chamado catch com uma solução
        para o erro ou uma mensagem para o usuário.
}

catch(e){

    executado quando há erro
    console.log('Variavel não inciada!');
}

finally{
    sempre será executado.
}
*/

function soma(x, y){
    if( typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser números!');
    }
    return x + y;
}

try{
console.log(soma(10, '5'));
}
catch(error){
    console.log(error)
}

/*

    try{
        console.log('Abri um arquivo')
        console.log('Manipula um arquivo')
        console.log('Fecha um arquivo')
    }
    catch(e){
        trata  o erro encontrado em try
    }
    finally{
        sempre executado, indepedente de erro em try.
    }
*/