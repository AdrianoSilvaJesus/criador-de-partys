class Painel{
    constructor(){
        this.verificaPainel = false;
    }

    renderPainel(color = null){
        // Setando Vars
        var Painel= document.createElement("DIV");
        var Close = document.createElement("DIV");
        var Protecao = document.createElement("DIV");

        // Setando Ids
        Painel.id = "Painel";
        Close.id = "Close";
        Protecao.id = "Protecao";

        // Setando estilos
        Painel.style.background = color;

        // Setando Conteudos
        Close.innerText = "X";

        // Setando Pais
        document.getElementById("PainelControle").appendChild(Protecao);
        document.getElementById("Protecao").appendChild(Painel);
        document.getElementById("Painel").appendChild(Close);

        Close.addEventListener("click", this.closePainel);
        !this.verificaPainel;
    }

    closePainel(){
        document.getElementById("Protecao").remove();
        !this.verificaPainel;
    }
};

    
function CriarUmTicket() {
    const formulario = new Form("formulario-ticket");
    formulario.createForm();

    const campos = ['Título','Descrição','Instância','Nível','Horário','Valor','Owner','Owner2','Vagas','Vagas','Vagas','Vagas','Owner2','Vagas','Vagas','Vagas','Vagas','Vagas']

    for(campo of campos){
        formulario.input(campo, 'text', 'entre horário...');
    }
};

