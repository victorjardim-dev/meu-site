function ativarMenuMobile() {
  const header = document.querySelector('.js header');
  const btnMobile = document.querySelector('.js [data-menu="button-mobile"]');
  const navMenu = document.querySelector('.js .nav-menu');

  function setBgHeader() {
    if(window.innerWidth <= 955) {
      if(header.scrollHeight < (window.scrollY + header.scrollHeight)) {
        header.style.backgroundColor = '#06021B';
      } else {
        header.style.backgroundColor = '';
      }
    } else {
      header.style.backgroundColor = '';
    }
  }

  
  navMenu.classList.remove('ativo');
  function abrirMenuMobile(e) {
    e.preventDefault();
    navMenu.classList.toggle('ativo');
  }
  
  btnMobile.addEventListener('click', abrirMenuMobile);
  window.addEventListener('scroll', setBgHeader);
}

export default ativarMenuMobile;