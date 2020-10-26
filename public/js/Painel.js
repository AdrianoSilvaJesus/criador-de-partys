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
    document.getElementById("Painel").style.background = "#ffffff";
    document.getElementById("Painel").style.backgroundImage = "url('../public/img/back1.jpg')";
    console.log(document.getElementById("Painel").offsetHeight);
    console.log(document.getElementById("Painel").offsetWidth);
    if (document.getElementById("Painel").offsetHeight <= (document.getElementById("Painel").offsetWidth)*0.7){
        document.getElementById("Painel").style.backgroundSize = "100% 100%";
    }else{
        document.getElementById("Painel").style.backgroundSize = "auto";
    };
    CriandoTicket();
}

function ClosePainel() {  
    document.getElementById("Protecao").remove();
    TaAbertoDiacho = false;
}