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

    // Colocando Eventos
    Close.addEventListener("click", ClosePainel);
    
    // Funções Externas
    TaAbertoDiacho = true;
    Resize();
};

function TicketAberto () {
    
}

function CriandoTicket () {
    // Setando Vars
    var Painel = document.getElementById("Painel");
    var Titulo = document.createElement("H2");

    var p01 = document.createElement("Label"); // Titulo
    var p02 = document.createElement("Label"); // Descricao
    var p03 = document.createElement("Label"); // Instancia
    var p04 = document.createElement("Label"); // Nivel
    var p05 = document.createElement("Label"); // Horario
    var p06 = document.createElement("Label"); // Valor
    var p07 = document.createElement("Label"); // Owner
    var p08 = document.createElement("Label"); // Vaga1
    var p09 = document.createElement("Label"); // Vaga2
    var p10 = document.createElement("Label"); // Vaga3
    var p11 = document.createElement("Label"); // Vaga4
    var p12 = document.createElement("Label"); // Vaga5
    var p13 = document.createElement("Label"); // Owner2
    var p14 = document.createElement("Label"); // Vaga6
    var p15 = document.createElement("Label"); // Vaga7
    var p16 = document.createElement("Label"); // Vaga8
    var p17 = document.createElement("Label"); // Vaga9
    var p18 = document.createElement("Label"); // Vaga10


    var c01 = document.createElement("input"); // Titulo
    var c02 = document.createElement("input"); // Descricao
    var c03 = document.createElement("select"); // Instancia
    var c04 = document.createElement("select"); // Nivel
    var c05 = document.createElement("select"); // Horario
    var c06 = document.createElement("input"); // Valor
    var c07 = document.createElement("input"); // Owner
    var c08 = document.createElement("input"); // Vaga1
    var c09 = document.createElement("input"); // Vaga2
    var c10 = document.createElement("input"); // Vaga3
    var c11 = document.createElement("input"); // Vaga4
    var c12 = document.createElement("input"); // Vaga5
    var c13 = document.createElement("input"); // Owner2
    var c14 = document.createElement("input"); // Vaga6
    var c15 = document.createElement("input"); // Vaga7
    var c16 = document.createElement("input"); // Vaga8
    var c17 = document.createElement("input"); // Vaga9
    var c18 = document.createElement("input"); // Vaga10
    
    // Setando Ids
    Titulo.id = "Titulo";
    p01.id = "p01";
    p02.id = "p02";
    p03.id = "p03";
    p04.id = "p04";
    p05.id = "p05";
    p06.id = "p06";
    p07.id = "p07";
    p08.id = "p08";
    p09.id = "p09";
    p10.id = "p10";
    p11.id = "p11";
    p12.id = "p12";
    p13.id = "p13";
    p14.id = "p14";
    p15.id = "p15";
    p16.id = "p16";
    p17.id = "p17";
    p18.id = "p18";
    c01.id = "c01";
    c02.id = "c02";
    c03.id = "c03";
    c04.id = "c04";
    c05.id = "c05";
    c06.id = "c06";
    c07.id = "c07";
    c08.id = "c08";
    c09.id = "c09";
    c10.id = "c10";
    c11.id = "c11";
    c12.id = "c12";
    c13.id = "c13";
    c14.id = "c14";
    c15.id = "c15";
    c16.id = "c16";
    c17.id = "c17";
    c18.id = "c18";    

    // Setando classList
    p01.classList = "label";
    p02.classList = "label";
    p03.classList = "label";
    p04.classList = "label";
    p05.classList = "label";
    p06.classList = "label";
    p07.classList = "label";
    p08.classList = "label";
    p09.classList = "label";
    p10.classList = "label";
    p11.classList = "label";
    p12.classList = "label";
    p13.classList = "label";
    p14.classList = "label";
    p15.classList = "label";
    p16.classList = "label";
    p17.classList = "label";
    p18.classList = "label";

    c01.classList = "input";
    c02.classList = "input";
    c03.classList = "input select";
    c04.classList = "input select";
    c05.classList = "input select";
    c06.classList = "input";
    c07.classList = "input";
    c08.classList = "input";
    c09.classList = "input";
    c10.classList = "input";
    c11.classList = "input";
    c12.classList = "input";
    c13.classList = "input";
    c14.classList = "input";
    c15.classList = "input";
    c16.classList = "input";
    c17.classList = "input";
    c18.classList = "input";
    
    // Setando Conteudos
    Titulo.innerText = "Criando um Ticket";
    p01.innerText = "Título";
    p02.innerText = "Descrição";
    p03.innerText = "Instância";
    p04.innerText = "Nível";
    p05.innerText = "Horário";
    p06.innerText = "Valor";
    p07.innerText = "Owner";
    p08.innerText = "Vaga1";
    p09.innerText = "Vaga2";
    p10.innerText = "Vaga3";
    p11.innerText = "Vaga4";
    p12.innerText = "Vaga5";
    p13.innerText = "Owner2";
    p14.innerText = "Vaga6";
    p15.innerText = "Vaga7";
    p16.innerText = "Vaga8";
    p17.innerText = "Vaga9";
    p18.innerText = "Vaga10";

    // Setando Pais
    document.getElementById("Painel").appendChild(Titulo);

    document.getElementById("Painel").appendChild(p01);
    document.getElementById("Painel").appendChild(c01);
    document.getElementById("Painel").appendChild(p02);
    document.getElementById("Painel").appendChild(c02);
    document.getElementById("Painel").appendChild(p03);
    document.getElementById("Painel").appendChild(c03);
    document.getElementById("Painel").appendChild(p04);
    document.getElementById("Painel").appendChild(c04);
    document.getElementById("Painel").appendChild(p05);
    document.getElementById("Painel").appendChild(c05);
    document.getElementById("Painel").appendChild(p06);
    document.getElementById("Painel").appendChild(c06);
    document.getElementById("Painel").appendChild(p07);
    document.getElementById("Painel").appendChild(c07);
    document.getElementById("Painel").appendChild(p08);
    document.getElementById("Painel").appendChild(c08);
    document.getElementById("Painel").appendChild(p09);
    document.getElementById("Painel").appendChild(c09);
    document.getElementById("Painel").appendChild(p10);
    document.getElementById("Painel").appendChild(c10);
    document.getElementById("Painel").appendChild(p11);
    document.getElementById("Painel").appendChild(c11);
    document.getElementById("Painel").appendChild(p12);
    document.getElementById("Painel").appendChild(c12);
    document.getElementById("Painel").appendChild(p13);
    document.getElementById("Painel").appendChild(c13);
    document.getElementById("Painel").appendChild(p14);
    document.getElementById("Painel").appendChild(c14);
    document.getElementById("Painel").appendChild(p15);
    document.getElementById("Painel").appendChild(c15);
    document.getElementById("Painel").appendChild(p16);
    document.getElementById("Painel").appendChild(c16);
    document.getElementById("Painel").appendChild(p17);
    document.getElementById("Painel").appendChild(c17); 
    document.getElementById("Painel").appendChild(p18);
    document.getElementById("Painel").appendChild(c18);
   
    
    
}