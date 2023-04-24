//capturar evento de submit do formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
       setResultado('Peso inválido!', false)
        return
    }

    if(!altura){
        setResultado('Altura inválida!', false)
        return
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    
    const msg = `Seu IMC é ${imc} - (${nivelImc}).`;

    setResultado(msg, true);
    
});

function getNivelImc(imc){
    const nivel = ['Abaxio do peso', 'Peso noraml', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];

    //boa pratica em JS: quanto a codição for muito pequena, custama-se colocar os if em mesma linha. com o return sem chaves.
    if (imc > 39.9) return nivel[5];
    
    if(imc >= 34.9) return nivel[4];
    if(imc >= 39.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
    

}

//calcula o imc
function getImc( peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

//cria paragrafo
function criaP(){
    const p = document.createElement('p');
    return p;
}

//imptressão do resultado
function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}