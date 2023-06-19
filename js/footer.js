document.addEventListener('DOMContentLoaded', function () {
    (function footer() {
        const footer = document.querySelector('#footer');

        const footerInjet = `
            
        <p class="col-md-4 mb-0 text-muted">©<span id="year"></span>
        Company, Inc</p>

    <a href="/"
        class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32">
            <use xlink:href="#bootstrap"></use>
        </svg>
    </a>

    <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="#"
                class="nav-link px-2 text-muted">Home</a></li>
        <li class="nav-item"><a href="#"
                class="nav-link px-2 text-muted">Features</a></li>
        <li class="nav-item"><a href="#"
                class="nav-link px-2 text-muted">Pricing</a></li>
        <li class="nav-item"><a href="#"
                class="nav-link px-2 text-muted">FAQs</a></li>
        <li class="nav-item"><a href="#"
                class="nav-link px-2 text-muted">About</a></li>
    </ul>
      `;

        footer.innerHTML = footerInjet;
    })();
});
