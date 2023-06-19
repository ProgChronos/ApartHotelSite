/*-SLICK CAROUSEL-*/
$('.slick-center').slick({
  centerMode: true,
  centerPadding: '50px',
  slidesToShow: 2,
  autoplay: true,
  autoplaySpeed: 3500,
  responsive: [
    {
      breakpoint: 910,
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
  var itemFixo = document.getElementById('itemFixo');
  var limiteScroll;

  if (window.innerWidth > 1400) {
    limiteScroll = 550;
  } else if (window.innerWidth > 920) {
    limiteScroll = 300;
  } else {
    limiteScroll = 200;
  }

  if (window.scrollY > limiteScroll) {
    itemFixo.style.opacity = '0';
  } else {
    itemFixo.style.opacity = '1';
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