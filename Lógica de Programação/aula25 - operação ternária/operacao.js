/*  
    O operador ternário em JavaScript é o ? e : 
    
    Pode sintetizar partes do código em que utilizaríamos
    um if e else.
*/

//Exemplo: Vamos classificar um usuario com base em sua pontuação

//Utilizando IF e ELSE
/*
    const pontUsuario = 1000;

        if (pontUsuario >= 1000){
            console.log('Usiario VIP');
        }
        else{
            console.log('Usuario Normal.');
        }
*/   

//Utilizando OPERAÇÃO TERNARIA

    const pontUsuario = 1000;
    const nivelUsuario = pontUsuario >= 1000? 'Usuario VIP' : 'Usuario normal!';
    console.log(nivelUsuario);

