document.addEventListener('DOMContentLoaded', function () {
    (function head() {
        const title = document.querySelector('title');
        const itemFixo = document.querySelector('#itemFixo');
        const h1 = itemFixo.querySelector('h1');

        title.innerHTML = h1.innerHTML;
    })();
});