const data = new Date();
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
animacaoScroll();

function animatedGreetings(frase) {
  const fraseArray = frase.innerHTML.split('');
  frase.innerHTML = '';
  fraseArray.forEach( (letra, i) => setTimeout( () => frase.innerHTML += letra , 250 * i));  
}
function setGreetings(data) {
  const boasVindas = document.querySelector('.js #boas-vindas');
  if(!!boasVindas) {
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
setGreetings(data);

function setCurrentYear(data) {
  ano.innerHTML = data.getFullYear();
}
setCurrentYear(data);

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
activeTabsKnowledge();

function activeCertificateAcordion() {
  const certificadoBoxTitulo = document.querySelectorAll('.js .certificado-titulo-box');
  const certificadoBoxConteudo = document.querySelectorAll('.js .certificado-conteudo-box');
  if(!!certificadoBoxTitulo && !!certificadoBoxConteudo) {
    certificadoBoxTitulo[0].classList.add('ativo');
    certificadoBoxConteudo[0].classList.add('ativo');    
    function activeBoxConteudo(index) {
      certificadoBoxTitulo[index].classList.toggle('ativo');
      certificadoBoxConteudo[index].classList.toggle('ativo');
    }    
    certificadoBoxTitulo.forEach((item, index) => {
      item.addEventListener('click', function() {
        activeBoxConteudo(index);
      });
    });
  }
}
activeCertificateAcordion();

function ativarMenuMobile() {
  const header = document.querySelector('.js header');
  const btnMobile = document.querySelector('.js nav #mobile-menu');
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
ativarMenuMobile();
