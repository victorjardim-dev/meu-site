function activeCertificateAcordion() {
  const certificadoBoxTitulo = document.querySelectorAll('.js .certificado-titulo-box');
  const certificadoBoxConteudo = document.querySelectorAll('.js .certificado-conteudo-box');

  console.log(certificadoBoxTitulo, certificadoBoxConteudo);

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

export default activeCertificateAcordion;
