TaAbertoDiacho = false;

function ValidarSeTaAberto() {
    console.log(TaAbertoDiacho)
    if (TaAbertoDiacho === true) {
        console.log('Hello')
        ClosePainel();  
    }
    CreatPainel();
}

function GratisClick() {
    ValidarSeTaAberto();
    document.getElementById("Painel").style.background = "#6495ed99";
}

function PagoClick() {
    ValidarSeTaAberto();
    document.getElementById("Painel").style.background = "#a52a2a99";
}

function CriarTicket() {
    ValidarSeTaAberto();
    document.getElementById("Painel").style.background = "#00000099";
    CriandoTicket();
}

function ClosePainel() {  
    document.getElementById("Protecao").remove();
    TaAbertoDiacho = false;
}