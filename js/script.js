/*-SLICK CAROUSEL-*/
$('.slick-center').slick({
  centerMode: true,
  centerPadding: '50px',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '25px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '25px',
        slidesToShow: 1
      }
    }
  ]
});


$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3500,
});

/*-EFEITO SCROLL-*/
window.addEventListener('scroll', function () {
  var textoFixo = document.getElementById('textoFixo');
  var limiteScroll = 200; // Altere o valor conforme necessário

  if (window.scrollY > limiteScroll) {
    textoFixo.style.opacity = '0';
  } else {
    textoFixo.style.opacity = '1';
  }
});

/*-INSERÇÃO DE ANO ATUAL NO FOOTER-*/
{
  function getYear() {
    const ano = document.getElementById('year');
    const data = new Date;
    const anoAtual = data.getFullYear();

    ano.innerHTML = ` ${anoAtual}`
  }
}