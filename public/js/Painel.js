const painel = new Painel();

function GratisClick() {
    painel.renderPainel("#6495ed99");
}

function PagoClick(){
    painel.renderPainel("#a52a2a99");
}   

function CriarTicket() {
    //"url('../public/img/back1.jpg')"
    painel.renderPainel("#fffffff7");
    CriarUmTicket();
}