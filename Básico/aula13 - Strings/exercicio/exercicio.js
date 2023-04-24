//Atalho para escrever dentro do html que o script estaá inserido
//document.body.innerHTML = `O seu nome é: ${nome} <br/>`;
//document.body.innerHTML += ` O seu nome é : ${nome} <br/>`
/*
    Atalho para escrever na tela com JS. 
    winddow.document.write('Um texto Qualquer');
*/
const nome = prompt('Digite seu nome: ');
    document.body.innerHTML += `Seu nome é: ${nome}<br />`;
    document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
    document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`;
    document.body.innerHTML += `Qual o primeiro índice da letra s no seu nome? ${nome.indexOf('s')}<br />`;
    document.body.innerHTML += `Qual o último índice da letra s no seu nome?${nome.lastIndexOf('s')}<br />`;
    document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;
    document.body.innerHTML += `As palavras do seu nome são: ${nome.split('')}<br />`;
    document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
    document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;
  