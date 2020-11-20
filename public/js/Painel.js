const painel = new Painel();

function GratisClick() {
    painel.renderPainel("#6495ed99");
    AbrirTicket()
}

function PagoClick(){
    painel.renderPainel("#a52a2a99");
    AbrirTicket()
}   

function CriarTicket() {
    painel.renderPainel("#ffffff");
    CriarUmTicket();
}