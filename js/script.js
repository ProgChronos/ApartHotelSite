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

/*-INSERÇÃO DE ANO ATUAL NO FOOTER-*/
{
    function getYear() {
        const ano = document.getElementById('year');
        const data = new Date;
        const anoAtual = data.getFullYear();

        ano.innerHTML = ` ${anoAtual}`
    }
}