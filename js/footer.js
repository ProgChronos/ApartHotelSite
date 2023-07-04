document.addEventListener('DOMContentLoaded', function () {
  (function footer() {
    const footer = document.querySelector('footer');
    //Adição de classes ao footer
    footer.classList.add('d-flex', 'flex-wrap', 'justify-content-between', 'align-items-center', 'py-3', 'my-4', 'border-top');
    //Adição de ID ao footer
    footer.id = 'footer';


    const footerInjet = `
            
        <p class="col-md-4 mb-0 text-muted">©<span id="year"></span>
        Instituto Chronos do Brasil, Inc</p>

    <a href="/"
        class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <img class="nav-logo" src="img/logo-x.svg" alt="Logo">
    </a>

    <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="index.html"
                class="nav-link px-2 text-muted">Home</a></li>        
        <li class="nav-item"><a href="#"
                class="nav-link px-2 text-muted">Contato</a></li>
        <li class="nav-item"><a href="#"
                class="nav-link px-2 text-muted">About</a></li>
    </ul>
      `;

    footer.innerHTML = footerInjet;

    /*-INSERÇÃO DE ANO ATUAL NO FOOTER-*/
    const ano = document.getElementById('year');
    const data = new Date;
    const anoAtual = data.getFullYear();

    ano.innerHTML = ` ${anoAtual}`
  })();
});

document.addEventListener('DOMContentLoaded', function () {
  (function msg() {
    const msg = document.querySelector('.msg');

    const msgInjet = `
      <div class='msg-text'>
        <h2><img class="nav-logo" src="img/logo-x.svg" alt="Logo">clusive apart hotel</h2>
        <h3>Conforto, conveniência e estilo!</h3>
        </div>
        <div id="maps" style="overflow:hidden;resize:none;max-width:100%;width:300px;height:300px;"><div id="display-google-map" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=R.+Tapera,+80+-+São+JOÃO,+Feira+de+Santana+-+BA,+Brasil&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="google-map-html" href="https://www.bootstrapskins.com/themes" id="make-map-data">premium bootstrap themes</a><style>#display-google-map img{max-height:none;max-width:none!important;background:none!important;}</style></div>
</div>
      `;

    msg.innerHTML = msgInjet;
  })();
});