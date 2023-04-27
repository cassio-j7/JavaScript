const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

//O addEventList pega a ação feita no display, como passei como parâmetro o click, ele espera a ação de clique.
btnTarefa.addEventListener('click', function(event) {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

//O addEventList pega a ação feita no display, como passei como parâmetro o click, ele espera a ação de clique.
inputTarefa.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
}

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaBotaoApagar(li){
    li.innerText += '';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

document.addEventListener('click', function(event){
    const el = event.target;

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
    }
});

