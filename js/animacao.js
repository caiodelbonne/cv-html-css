
function initAnimacao () {
  const itemAnimacao = document.querySelectorAll('.animacao dt');
  
  if(itemAnimacao.length) {
      itemAnimacao[0].classList.add('ativo');
      itemAnimacao[0].nextElementSibling.classList.add('ativo');
  
      function ativaAnimacao (event) {
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
      }
  
      itemAnimacao.forEach((item)=>{
        item.addEventListener('click',ativaAnimacao) ;
  })
  }
  }
  
  initAnimacao();
  