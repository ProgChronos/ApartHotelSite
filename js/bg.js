document.addEventListener('DOMContentLoaded', function() {
    (function bg() {
      const bg = document.querySelectorAll('.background');
  
      const bgInject = `
        <img src="img/backgroundSVG.svg" alt="image">
      `;
  
      for (let i = 0; i < bg.length; i++) {
        bg[i].innerHTML = bgInject;
      }
    })();
  });