function animatedGreetings(frase) {
  const fraseArray = frase.innerHTML.split('');
  frase.innerHTML = '';
  fraseArray.forEach( (letra, i) => setTimeout( () => frase.innerHTML += letra , 250 * i));  
}

function setGreetings(data) {
  const boasVindas = document.querySelector('.js #boas-vindas');
  if(!!boasVindas) {

    // data.setHours(15); // Teste para mensagem
    const horaAtual = data.getHours();   

    if(horaAtual >= 0 && horaAtual < 6) {
      boasVindas.innerHTML = "boa madrugada!";
    } else if (horaAtual >= 6 && horaAtual < 12) {
      boasVindas.innerHTML = "bom dia!";
    } else if(horaAtual >= 12 && horaAtual < 18) {
      boasVindas.innerHTML = "boa tarde!";
    } else {
      boasVindas.innerHTML = "boa noite!";
    }
    
    animatedGreetings(boasVindas);
    
  }
}

export default setGreetings;