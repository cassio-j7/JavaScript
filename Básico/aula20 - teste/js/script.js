function enviar(){

     const form = document.querySelector('.form');
     const resultado = document.querySelector('.resultado');
     const pessoas = [];

     function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            peslo: peso.value,
            altura: altura.value
        });

       console.log(pessoas);

       resultado.innerHTML += `<p>${nome.value} ${peso.value} ${altura.value}</p>`;

    }

    form.addEventListener('submit', recebeEventoForm);
}
enviar();