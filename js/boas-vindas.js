function animatedGreetings(frase) {
  const fraseArray = frase.innerHTML.split('');
  frase.innerHTML = '';
  fraseArray.forEach( (letra, i) => setTimeout( () => frase.innerHTML += letra , 200 * i));  
}

function setGreetings() {
  const boasVindas = document.querySelector('.js #boas-vindas');
  if(!!boasVindas) {
    const dataAtual = new Date();
    // dataAtual.setHours(8);
    const horaAtual = dataAtual.getHours();    
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