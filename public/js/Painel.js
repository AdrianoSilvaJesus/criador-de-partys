function GratisClick() {
    CreatPainel();
    document.getElementById("Painel").style.background = "#6495ed99";
}

function PagoClick() {
    CreatPainel();
    document.getElementById("Painel").style.background = "#a52a2a99";
}
function ClosePainel() {  
    document.getElementById("Protecao").remove();
}

function CreatPainel() {
    // Setando Vars
    var Painel = document.createElement("DIV");
    var Close = document.createElement("DIV");
    var Protecao = document.createElement("DIV");

    // Setando Ids
    Painel.id = "Painel";
    Close.id = "Close";
    Protecao.id = "Protecao";

    // Setando Conteudos
    Close.innerText = "X";

    // Setando Pais
    document.getElementById("PainelControle").appendChild(Protecao);
    document.getElementById("Protecao").appendChild(Painel);
    document.getElementById("Painel").appendChild(Close);
    Close.addEventListener("click", ClosePainel);
    Resize();
};
