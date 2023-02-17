function activeTabsKnowledge() {
  const conhecimentosPrincipais = document.querySelectorAll('.js .principais-titulo-box span');
  const conhecimentosPrincipaisBox = document.querySelectorAll('.js .principais-descricao-box');
  
  if(!!conhecimentosPrincipais && !!conhecimentosPrincipaisBox) {
    conhecimentosPrincipais[0].classList.add('js-ativo');
    conhecimentosPrincipaisBox[0].classList.add('js-ativo');

    function ativaConhecimento(index) {
      conhecimentosPrincipais.forEach((section) => {
        section.classList.remove('js-ativo');
      });
      conhecimentosPrincipaisBox.forEach((section) => {
        section.classList.remove('js-ativo');
      });
      conhecimentosPrincipais[index].classList.add('js-ativo');
      conhecimentosPrincipaisBox[index].classList.add('js-ativo');
    }
    
    conhecimentosPrincipais.forEach((item, index) => {
      item.addEventListener('click', () => {
        ativaConhecimento(index);
      });
    });
  }  
}

export default activeTabsKnowledge;
