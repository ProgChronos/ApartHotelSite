document.addEventListener('DOMContentLoaded', function () {
    (function head() {
        const head = document.querySelector('.head');
        const itemFixo = document.querySelector('#itemFixo');
        const h1 = itemFixo.querySelector('h1');
        const title = h1.innerHTML;

        const headInjet = `
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link rel="shortcut icon" href="img/logo-branco-1.png" type="image/x-icon">
      <!--BOOTSTRAP CSS-->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
          <!-- UIkit CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.16.22/dist/css/uikit.min.css" />
      <!--CSS LOCAL-->
      <link rel="stylesheet" href="/css/style.css">
      <!--CSS SLICK SLIDER-->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick-theme.css">
      `;

        head.innerHTML = headInjet;
    })();
});
