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
    var Titulo = document.createElement("H2");
    Titulo.id = "Titulo";
    Titulo.innerText = "Criando um Ticket";
    document.getElementById("Painel").appendChild(Titulo);

    const Nomes = ['Titulo','Descricao','Instancia','Nivel','Horario','Valor','Owner','Vaga1','Vaga2','Vaga3','Vaga4','Vaga5','Owner2','Vaga6','Vaga7','Vaga8','Vaga9','Vaga10']
    var Style1 = false;
    
    for (var i = 0  ; i < 9; i++) {
        var Criando = document.createElement("Label");
        var Criando2 = document.createElement("input");
        var Criando3 = document.createElement("Label");
        var Criando4 = document.createElement("input");
        if (i >1) {if (i <5){
            var Criando2 = document.createElement("select");
        }}
            var Labels = "label Style";
            var Interativos = "input Style";

            var Labels1 = "label Style1";
            var Interativos1 = "input Style1";


        // Labels
        Criando.id = "p"+i;
        Criando.classList = Labels;
        Criando.innerText = Nomes[i];
        document.getElementById("Painel").appendChild(Criando);
        Criando3.id = "p"+(i+9);
        Criando3.classList = Labels1;
        Criando3.innerText = Nomes[(i+9)];
        document.getElementById("Painel").appendChild(Criando3);
        var Break2 = document.createElement("br");
        document.getElementById("Painel").appendChild(Break2);

        // Interativos
        Criando2.id = "I"+i;
        Criando2.classList = Interativos1;
        Criando2.value = Nomes[i];
        document.getElementById("Painel").appendChild(Criando2);
        Criando4.id = "I"+(i+9);
        Criando4.classList = Interativos;
        Criando4.value = Nomes[(i+9)];
        document.getElementById("Painel").appendChild(Criando4);

        //break
        var Break = document.createElement("br");
        document.getElementById("Painel").appendChild(Break);
     }
}