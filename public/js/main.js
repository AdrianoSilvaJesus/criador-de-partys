// Rezise do botão usuario.
window.addEventListener("resize", Resize);

function Resize() {
    // Tamanho de apenas um botão.
    var HeaderHeight = document.getElementById("button1").offsetHeight;

    // Resizes
    document.getElementById("button1").style.width = HeaderHeight;
    document.getElementById("button2").style.width = HeaderHeight;
};
