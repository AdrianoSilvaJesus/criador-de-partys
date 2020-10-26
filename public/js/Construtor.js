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
    var Titulo = document.createElement("div");
    Titulo.id = "Container2";
    document.getElementById("Painel").appendChild(Titulo);

    const Nomes = ['Titulo','Descricao','Instancia','Nivel','Horario','Valor','Owner','Vaga1','Vaga2','Vaga3','Vaga4','Vaga5','Owner2','Vaga6','Vaga7','Vaga8','Vaga9','Vaga10']

    var Style = false;

    for (var i = 0  ; i < 18; i++) {
        var Criando = document.createElement("Label");
        var Criando2 = document.createElement("input");
        
        if (i >1) {if (i <5){
            var Criando2 = document.createElement("select");  
        }}
        
        if (Style === false) {
            Style = true;
            var Labels = "label Style";
            var Interativos = "input Style";
        }else{
            Style = false;
            var Labels = "label1 Style1";
            var Interativos = "input1 Style1";
        }

        // Labels
        Criando.id = "p"+i;
        Criando.classList = Labels;
        Criando.innerText = Nomes[i];
        Criando.style.gridArea = 'l'.concat(i);
        document.getElementById("Container2").appendChild(Criando);

        // Interativos
        Criando2.id = "I"+i;
        Criando2.classList = Interativos;
        Criando2.style.gridArea = 'i'.concat(i);
        Criando2.value = Nomes[i];
        document.getElementById("Container2").appendChild(Criando2);
     }
}