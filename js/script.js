/*-SLICK CAROUSEL-*/
$('.slick-center').slick({
  centerMode: true,
  centerPadding: '50px',
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 5500,
  responsive: [
    {
      breakpoint: 1930,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '25px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1400,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 650,
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
  autoplaySpeed: 5500,
});

/*-EFEITO FADE SCROLL-*/
window.addEventListener('scroll', function () {
  const itemFixo = document.querySelector('#itemFixo');
  const navbar = document.querySelector('.navbar');
  let limiteScroll;

  if (window.innerWidth > 1400) {
    limiteScroll = 350;
  } else if (window.innerWidth > 1200) {
    limiteScroll = 250;
  } else if (window.innerWidth > 920) {
    limiteScroll = 200;
  } else if (window.innerWidth > 600) {
    limiteScroll = 175;
  } else if (window.innerWidth > 400) {
    limiteScroll = 170;
  } else {
    limiteScroll = 150;
  }

  if (window.scrollY > limiteScroll) {
    itemFixo.style.opacity = '0';
    itemFixo.style.display = 'none';
    navbar.style.opacity = '1';
    navbar.style.zIndex = '1';
  } else if (window.scrollY > limiteScroll * 0.8) {
    itemFixo.style.opacity = '0.2';
    itemFixo.style.display = 'block';
    navbar.style.opacity = '0.8';
    navbar.style.display = 'block';
    navbar.style.zIndex = '1';
  } else if (window.scrollY > limiteScroll * 0.6) {
    itemFixo.style.opacity = '0.4';
    itemFixo.style.display = 'block';
    navbar.style.opacity = '0.6';
    navbar.style.display = 'block';
    navbar.style.zIndex = '1';
  } else if (window.scrollY > limiteScroll * 0.4) {
    itemFixo.style.opacity = '0.6';
    itemFixo.style.display = 'block';
    navbar.style.opacity = '0.4';
    navbar.style.display = 'block';
    navbar.style.zIndex = '1';
  } else if (window.scrollY > limiteScroll * 0.2) {
    itemFixo.style.opacity = '0.8';
    itemFixo.style.display = 'block';
    navbar.style.opacity = '0.2';
    navbar.style.display = 'block';
    navbar.style.zIndex = '1';
  } else {
    itemFixo.style.opacity = '1';
    itemFixo.style.display = 'block';
    navbar.style.opacity = '0';
    navbar.style.zIndex = '-1';
  }

  /*-APLICAR BLUR*/
  window.addEventListener('scroll', function () {
    const navbrand = document.querySelector('.navbar-brand');
    const navtoggler = this.document.querySelector('.navbar-toggler')
    navbrand.style.backdropFilter = 'blur(15px)';
    navtoggler.style.backdropFilter = 'blur(15px)';
  });
});

/*-EXIBIR IMAGEM AMPLIADA APÓS CLICK-*/
const galleryItems = document.querySelectorAll(".gallery-item");
let touchStartX = 0;
let touchEndX = 0;

galleryItems.forEach(item => {
  item.addEventListener("click", function () {
    this.classList.toggle("fullscreen");
  });

  item.addEventListener("touchstart", function (event) {
    touchStartX = event.touches[0].clientX;
  });

  item.addEventListener("touchend", function (event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe(this);
  });
});

function handleSwipe(item) {
  const minSwipeDistance = 100; // Distância mínima para considerar um swipe

  if (touchEndX - touchStartX > minSwipeDistance) {
    // Swipe para a direita (imagem anterior)
    showPreviousImage(item);
  } else if (touchStartX - touchEndX > minSwipeDistance) {
    // Swipe para a esquerda (próxima imagem)
    showNextImage(item);
  }
}

function showPreviousImage(item) {
  const previousItem = item.previousElementSibling;

  if (previousItem && previousItem.classList.contains("gallery-item")) {
    previousItem.classList.toggle("fullscreen");
    item.classList.toggle("fullscreen");
  }
}

function showNextImage(item) {
  const nextItem = item.nextElementSibling;

  if (nextItem && nextItem.classList.contains("gallery-item")) {
    nextItem.classList.toggle("fullscreen");
    item.classList.toggle("fullscreen");
  }
}
