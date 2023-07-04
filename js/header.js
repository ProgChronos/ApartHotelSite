document.addEventListener('DOMContentLoaded', function() {
    (function header() {
      const header = document.querySelector('.header');
  
      const headerInjet = `
      <nav class="navbar navbar-dark  fixed-top">
      <div class="container-fluid">
          <a class="navbar-brand" href="index.html"><img class="nav-logo" src="img/logo-x.svg" alt="Logo"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel">
              <div class="offcanvas-header">
              <img class="nav-logo" src="img/logo-x.svg" alt="Logo">
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                      aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li class="nav-item">
                          <a class="nav-link" aria-current="page" href="index.html">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="galery.html">Galeria</a>
                      </li>
                      <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                              aria-expanded="false">
                              Espaços
                          </a>
                          <ul class="dropdown-menu dropdown-menu-dark">
                              <li><a class="dropdown-item" href="apt1.html">Apartamento Kairos Two</a></li>
                              <li><a class="dropdown-item" href="apt2.html">Apartamento Temp One</a></li>
                              <li><a class="dropdown-item" href="services.html">Serviços</a></li>
                              <li><a class="dropdown-item" href="club.html">Boate</a></li>
                          </ul>
                      </li>
                  </ul>
                  
              </div>
          </div>
      </div>
  </nav>
      `;
  
      header.innerHTML = headerInjet;
    })();
  });
  