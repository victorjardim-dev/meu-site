function personalDebug() {
  const elementoDebug = document.querySelector('#debug-container #debug');
  elementoDebug.classList.add('ativo');
  
  function showDebug(evento) {
    // console.log(evento);
    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;
    const distanciaCimaScroll = Math.abs(document.documentElement.getBoundingClientRect().top);
    const distanciaBaixoScroll = (Math.floor(Math.abs(document.documentElement.getBoundingClientRect().bottom))) - alturaTela;
    const debugMsg = `Tipo de Evento: ${evento.type}<br>Largura da tela: ${larguraTela}<br>Altura da tela: ${alturaTela}<br>Distância de cima do Scroll: ${distanciaCimaScroll}<br>Distância de baixo do Scroll: ${distanciaBaixoScroll}`;      
    if(evento.type == 'click') {
      if(evento.target != debug && evento.target != document.documentElement) {
        evento.preventDefault();
        evento.target.remove();
      }
    }  
    elementoDebug.innerHTML = debugMsg;
  }
  showDebug('adfkjaçslkdfjçalskdjfl');

  const userEvents = ['resize', 'scroll', 'click'];  
  userEvents.forEach((userEvent) => {
    window.addEventListener(userEvent, showDebug);
  });
}

export default personalDebug;