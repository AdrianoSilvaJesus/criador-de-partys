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
        Close.className = "btn";
        Protecao.id = "Protecao";

        // Setando estilos
        Painel.style.background = color;
        if (imageUrl) Painel.style.backgroundImage = "url('../public/img/back1.jpg')";

        // Setando Conteudos
        CloseX.innerText = "X";

        // Setando Pais
        document.getElementById("PainelControle").appendChild(Protecao);
        document.getElementById("Protecao").appendChild(Painel);
        document.getElementById("Painel").appendChild(Close);
        document.getElementById("Close").appendChild(CloseX);

        Close.addEventListener("click", this.closePainel);
        CloseX.addEventListener("click", this.closePainel);
        !this.verificaPainel;
    }

    closePainel(){
        document.getElementById("Protecao").remove();
        !this.verificaPainel;
        }
};


