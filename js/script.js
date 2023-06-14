/*-REVELAR O CAMPO PESQUISA-*/
{
    function onSearch() {
        const onFind = document.getElementById('searchInput');

        onFind.innerHTML = `<input type="text" id="myInput" placeholder=" Digite e pressione enter..." style="display: block;">`;
    }
    function offSearch() {
        const offFind = document.getElementById('searchInput');

        offFind.innerHTML = `<input type="text" id="myInput" style="display: none;">`;
    }
}

/*-REVELAR INFO DOS PROJETOS-*/
{
    function onP1() {
        const pic1 = document.getElementById('p1');

        pic1.innerHTML += `<h3 class="projectInfo">Museu de arte moderna</h3>`
    }
    function onP2() {
        const pic2 = document.getElementById('p2');

        pic2.innerHTML += `<h3 class="projectInfo">Residencial AlphaVille</h3>`
    }
    function onP3() {
        const pic3 = document.getElementById('p3');

        pic3.innerHTML += `<h3 class="projectInfo">Montserrat studio</h3>`
    }
    function onP4() {
        const pic4 = document.getElementById('p4');

        pic4.innerHTML += `<h3 class="projectInfo">Clinica Grazza</h3>`
    }
    function onP5() {
        const pic5 = document.getElementById('p5');

        pic5.innerHTML += `<h3 class="projectInfo">Residencial Velaskez</h3>`
    }
    function onP6() {
        const pic6 = document.getElementById('p6');

        pic6.innerHTML += `<h3 class="projectInfo">Buzios Grand Hotel</h3>`
    }
    function onP7() {
        const pic7 = document.getElementById('p7');

        pic7.innerHTML += `<h3 class="projectInfo">Buzios Grand Hotel</h3>`
    }
    function onP8() {
        const pic8 = document.getElementById('p8');

        pic8.innerHTML += `<h3 class="projectInfo">Buzios Grand Hotel</h3>`
    }
    function onP9() {
        const pic9 = document.getElementById('p9');

        pic9.innerHTML += `<h3 class="projectInfo">Buzios Grand Hotel</h3>`
    }
    function onP10() {
        const pic10 = document.getElementById('p10');

        pic10.innerHTML += `<h3 class="projectInfo">Hotel Bavaria 1</h3>`
    }
    function onP11() {
        const pic11 = document.getElementById('p11');

        pic11.innerHTML += `<h3 class="projectInfo">Gavazza gastrô</h3>`
    }
    function onP12() {
        const pic12 = document.getElementById('p12');

        pic12.innerHTML += `<h3 class="projectInfo">Residencial Várzea tower</h3>`
    }
    function onP13() {
        const pic13 = document.getElementById('p13');

        pic13.innerHTML += `<h3 class="projectInfo">Henzo apart-hotel</h3>`
    }
    function onP14() {
        const pic14 = document.getElementById('p14');

        pic14.innerHTML += `<h3 class="projectInfo">TK Tower</h3>`
    }
    function onP15() {
        const pic15 = document.getElementById('p15');

        pic15.innerHTML += `<h3 class="projectInfo">Residencial Schmith</h3>`
    }
    function onP16() {
        const pic16 = document.getElementById('p16');

        pic16.innerHTML += `<h3 class="projectInfo">Residencial Fazanni</h3>`
    }
}

/*-ESCONDER INFO DOS PROJETOS-*/
{
    function offP() {
        const img1 = document.getElementById('p1');
        const img2 = document.getElementById('p2');
        const img3 = document.getElementById('p3');
        const img4 = document.getElementById('p4');
        const img5 = document.getElementById('p5');
        const img6 = document.getElementById('p6');
        const img7 = document.getElementById('p7');
        const img8 = document.getElementById('p8');
        const img9 = document.getElementById('p9');
        const img10 = document.getElementById('p10');
        const img11 = document.getElementById('p11');
        const img12 = document.getElementById('p12');
        const img13 = document.getElementById('p13');
        const img14 = document.getElementById('p14');
        const img15 = document.getElementById('p15');
        const img16 = document.getElementById('p16');

        img1.innerHTML = `<img src="img/p1.jpg" alt="imagem do projeto"><h3 class="projectInfo" style="display: none;"></h3>`;
        img2.innerHTML = `<img src="img/p2.jpg" alt="imagem do projeto"><h3 class="projectInfo" style="display: none;"></h3>`;
        img3.innerHTML = `<img src="img/p3.jpg" alt="imagem do projeto"><h3 class="projectInfo" style="display: none;"></h3>`;
        img4.innerHTML = `<img src="img/p4.jpg" alt="imagem do projeto"><h3 class="projectInfo" style="display: none;"></h3>`;
        img5.innerHTML = `<img src="img/p5.jpg" alt="imagem do projeto"><h3 class="projectInfo" style="display: none;"></h3>`;
        img6.innerHTML = `<img src="img/p6.jpg" alt="imagem do projeto"><h3 class="projectInfo" style="display: none;"></h3>`;
        img7.innerHTML = `<img src="img/p7.jpg" alt="imagem do projeto"><h3 class="projectInfo" style="display: none;"></h3>`;
        img8.innerHTML = `<img src="img/p8.jpg" alt="imagem do projeto"><h3 class="projectInfo" style="display: none;"></h3>`;
        img9.innerHTML = `<img src="img/p9.jpg" alt="imagem do projeto"><h3 class="projectInfo" style="display: none;"></h3>`;
        img10.innerHTML = `<img src="img/p10.jpg" alt="imagem do projeto"><h3 class="projectInfo" style="display: none;"></h3>`;
        img11.innerHTML = `<img src="img/p11.jpg" alt="imagem do projeto"><h3 class="projectInfo" style="display: none;"></h3>`;
        img12.innerHTML = `<img src="img/p12.jpg" alt="imagem do projeto"><h3 class="projectInfo" style="display: none;"></h3>`;
        img13.innerHTML = `<img src="img/p13.jpg" alt="imagem do projeto"><h3 class="projectInfo" style="display: none;"></h3>`;
        img14.innerHTML = `<img src="img/p14.jpg" alt="imagem do projeto"><h3 class="projectInfo" style="display: none;"></h3>`;
        img15.innerHTML = `<img src="img/p15.jpg" alt="imagem do projeto"><h3 class="projectInfo" style="display: none;"></h3>`;
        img16.innerHTML = `<img src="img/p16.jpg" alt="imagem do projeto"><h3 class="projectInfo" style="display: none;"></h3>`;
    }
}

/*-INSERÇÃO DE ANO ATUAL NO FOOTER-*/
{
    function getYear() {
        const ano = document.getElementById('year');
        const data = new Date;
        const anoAtual = data.getFullYear();

        ano.innerHTML = ` ${anoAtual}`
    }
}