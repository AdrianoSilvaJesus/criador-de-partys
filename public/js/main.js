// Rezise do botão usuario.
window.addEventListener("resize", Resize);

function Resize() {
    // Tamanho de apenas um botão.
    var HeaderHeight = document.getElementById("button1").offsetHeight;

    // Resizes
    document.getElementById("button1").style.width = HeaderHeight;
    document.getElementById("button2").style.width = HeaderHeight;
    document.getElementById("Close").style.width = HeaderHeight;

    if (document.getElementById("Painel").offsetHeight <= (document.getElementById("Painel").offsetWidth)*0.7){
        document.getElementById("Painel").style.backgroundSize = "100% 100%";
    }else{
        document.getElementById("Painel").style.backgroundSize = "auto";
    };
};
