//seleciona o primeiro elemento com o nome .paragrafos(class)
const paragrafos = document.querySelector('.paragrafos');

//seleciona todos os elementos com o nome p(tag)
const p = document.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody);

for (let x of p){
    x.style.backgroundColor = backgroundColorBody;
    x.style.color = '#FFFFFF'
    x.style.padding = '10px';   
}

/*
    Podemos usar os mesmos comandos de estilos do css em javaScript
    usando, quando chamarmos o comando, camelCase, e passando os valor 
    dentro de aspas simples.
    
*/