window.onload = function () {
    let titulo = document.querySelector('h1');
    titulo.innerText = "Alterando o titulo com botão!";

    let primeiroParagrafo = document.querySelectorAll('p')[1];
    if (primeiroParagrafo){
        primeiroParagrafo.style.color = "blue";

    }
};

