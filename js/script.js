// Animação slide 
new SimpleSlide({
  slide:"quote", // nome do atributo data-slide="principal"
  time: 2000, // tempo de transição dos slides
  //nav: true, // se deve ou não mostrar a navegação
  //pauseOnHover: true, // pausa a transição automática
 // auto: true, // se o slide deve passar automaticamente
});


if(window.SimpleSlide) {
  new SimpleAnime();
}