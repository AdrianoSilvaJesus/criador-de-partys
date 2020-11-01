class Painel{
    constructor(){
        this.verificaPainel = false;
    };
    
    renderPainel(color = null, imageUrl = null){
        if (document.getElementById("Protecao") !== null) {
            document.getElementById("Protecao").remove();
        }

        // Setando Vars
        var Painel= document.createElement("DIV");
        var Close = document.createElement("DIV");
        var CloseX  = document.createElement("DIV");
        var Protecao = document.createElement("DIV");

        // Setando Ids e Class
        Painel.id = "Painel";
        Close.id = "Close";
        CloseX.id = "CloseX";
        Protecao.id = "Protecao";
        Close.className = "btn";
        Painel.className = "img";

        // Setando estilos
        Painel.style.background = color;

        // Setando Conteudos
        CloseX.innerText = "X";

        // Setando Pais
        document.getElementById("PainelControle").appendChild(Protecao);
        document.getElementById("Protecao").appendChild(Painel);
        document.getElementById("Painel").appendChild(Close);
        document.getElementById("Close").appendChild(CloseX);

        Close.addEventListener("click", this.closePainel);
        CloseX.addEventListener("click", this.closePainel);

        
        if (imageUrl) {
            document.getElementById("Painel").style.backgroundImage = "url('../public/img/back1.jpg')";
        };
        
        !this.verificaPainel;
    }

    closePainel(){
        document.getElementById("Protecao").remove();
        !this.verificaPainel;
        
        }
};

    
function CriarUmTicket() {
    const Nomes = ['Título','Descrição','Instância','Nível','Horário','Valor','Owner','Owner2','Vagas','Vagas','Vagas','Vagas','Owner2','Vagas','Vagas','Vagas','Vagas','Vagas']
    const Names = ['titulo','descricao','valor','owner','owner2','vaga1','vaga5','vaga3','vaga7','vaga2','vaga6','vaga4','vaga8','intancia','nivel','horario']

    for (i = -2; i < 29; i++) {
        // Criando Ajustes
        if (i === 0) {
            // Titulo
            var OqueCriar = "h2";
            var QualId = "TituloH2";
            var QualClass = "TituloH2";
            var QualConteudo = "Criando um Ticket.";
            var Pai = "Painel";
            var GridArea = "";
            var Name = ""

        }else if (i === -2) {
            // Container
            var OqueCriar = "form";
            var QualId = "ContainerCriandoTicket";
            var QualClass = "ContainerCriandoTicket";
            var QualConteudo = "";
            var Pai = "Painel";
            var GridArea = "";
            var Name = ""

        }else if (i === -1) {
            // Enviar
            var OqueCriar = "button";
            var QualId = "EnviarTicket";
            var QualClass = "EnviarTicket";
            var QualConteudo = "Enviar Ticket";
            var Pai = "ContainerCriandoTicket";
            var GridArea = "EnviarTicket";   
            var Name = ""        

        }else if (i<13) {
            // São as Labels.
            var OqueCriar = "p";
            var QualId  = "Label"+i;
            var QualClass = "Label";
            var QualConteudo = Nomes[i-1];
            var Pai = "ContainerCriandoTicket";
            var GridArea = "Label"+i;
            var Name = ""

        }else if (i<26){
            // São os TxtBox.
            var OqueCriar = "input";
            var QualId  = "TxtBox"+(i-13)
            var QualClass = "Input TxtBox"
            var QualConteudo = "";
            var Pai = "ContainerCriandoTicket";
            var GridArea = "Input"+(i-12);
            var Name = true

        }else{
            // São os ComboBox.
            var OqueCriar = "select";
            var QualId  = "ComboBox"+(i-25)
            var QualClass = "Input ComboBox"
            var QualConteudo = "";
            var Pai = "ContainerCriandoTicket";
            var GridArea = "Input"+(i-12);
            var Name = true
        }

        // Setando Vars.       
        var Criando = document.createElement(OqueCriar);

        // Setando Id.
            Criando.id = QualId;

        // Setando Class.
            Criando.classList = QualClass;

        // Setando Conteudo.
            Criando.innerText = QualConteudo;
            if (Name !== "") {
                Criando.setAttribute('name',Names[i-13]);
            }

        // Setando GridArea 
            Criando.style.gridArea = GridArea;

        // Setando os Pais.
        document.getElementById(Pai).appendChild(Criando);

        // Setando Opções do ComboBox
        // Caputurar dados do BD para analisar se pode ser aberto um.
    }
    const Instancias = ['EndLess Tower', 'Cake', 'Undead', 'Oracle', 'Thanatos Tower', 'EC']
    for (x=0 ; x<6 ; x++) {
        // Setando Vars.       
        var Criando = document.createElement("Option");

        // Setando Conteudo.
            Criando.innerText = Instancias[x];

        // Setando os Pais.
        document.getElementById("ComboBox1").appendChild(Criando);
    }
    ComboBoxSetando();
    document.getElementById("ComboBox1").addEventListener("change", ComboBoxSetando);
};

