class Painel{
    constructor(){
        this.verificaPainel = false;
    }

    renderPainel(color = null, imageUrl = null){
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
        if (imageUrl) Painel.style.backgroundImage = "url('../public/img/back1.jpg')";

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

