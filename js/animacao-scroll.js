function animacaoScroll() {
  const elemento = document.querySelectorAll('.js .elementoScroll');
  if(!!elemento) {
    const metadeJanela = window.innerHeight * 0.30;
  
    function animaScroll() {
      elemento.forEach((secao) => {
        const elementoTopo = secao.getBoundingClientRect().top - metadeJanela;
        const isElementoVisivel = elementoTopo - metadeJanela < 0;
        if(isElementoVisivel) {
          secao.classList.add('ativo');
        } else {
          secao.classList.remove('ativo');
        }
      });
    }
    animaScroll();
  
    window.addEventListener('scroll', animaScroll);
  }
}

export default animacaoScroll;