function ComboBoxSetando() {
    const ET = ['0-100','0-99','0-50','51-100','51-99', '100-100','61-62'];
    const Cake = ['Até o 5','Até o 10','Até o 15'];
    const Oracle = ['Fácil', 'Médio', 'Hard', 'Nightmare'];
    const TT = ['TTE', 'TTB', 'TTL'];
    const EC = ['01+', '11+', '21+', '31+', '41+', '51+'];

    var Cb = document.getElementById("ComboBox1")
    var InstanciaAtive = Cb.options[Cb.selectedIndex].value;

    var TamanhoDaLimpeza = document.getElementById("ComboBox2").length
    for (x=0; x<TamanhoDaLimpeza; x++){
        document.getElementById("ComboBox2").remove(0);
    }

    TrocandoInstancia()

    if (InstanciaAtive === 'EndLess Tower') {
        for (i=0; i<ET.length; i++){
            // Setando Vars.       
            var Criando = document.createElement("Option");

            // Setando Conteudo.
                Criando.innerText = ET[i];

            // Setando os Pais.
            document.getElementById("ComboBox2").appendChild(Criando);
        }
    }else if (InstanciaAtive === 'Cake') {
        for (i=0; i<Cake.length; i++){
            // Setando Vars.       
            var Criando = document.createElement("Option");

            // Setando Conteudo.
                Criando.innerText = Cake[i];

            // Setando os Pais.
            document.getElementById("ComboBox2").appendChild(Criando);
        }
    }else if (InstanciaAtive === 'Undead') {
            // Setando Vars.       
            var Criando = document.createElement("Option");

            // Setando Conteudo.
                Criando.innerText = "Completo.";

            // Setando os Pais.
            document.getElementById("ComboBox2").appendChild(Criando);
    }else if (InstanciaAtive === 'Oracle') {
        for (i=0; i<Oracle.length; i++){
            // Setando Vars.       
            var Criando = document.createElement("Option");

            // Setando Conteudo.
                Criando.innerText = Oracle[i];

            // Setando os Pais.
            document.getElementById("ComboBox2").appendChild(Criando);
        }
    }else if (InstanciaAtive === 'Thanatos Tower') {
        for (i=0; i<TT.length; i++){
            // Setando Vars.       
            var Criando = document.createElement("Option");

            // Setando Conteudo.
                Criando.innerText = TT[i];

            // Setando os Pais.
            document.getElementById("ComboBox2").appendChild(Criando);

            document.getElementById('TxtBox4').style.display = "";
            document.getElementById('TxtBox9').style.display = "";
            document.getElementById('TxtBox10').style.display = "";
            document.getElementById('TxtBox11').style.display = "";
            document.getElementById('TxtBox12').style.display = "";
            document.getElementById('Label8').style.display = "";
            document.getElementById('Label10').style.display = "";
            document.getElementById('Label11').style.display = "";
        }
    }else if (InstanciaAtive === 'EC') {
        for (i=0; i<EC.length; i++){
            // Setando Vars.       
            var Criando = document.createElement("Option");

            // Setando Conteudo.
                Criando.innerText = EC[i];

            // Setando os Pais.
            document.getElementById("ComboBox2").appendChild(Criando);
            document.getElementById('TxtBox7').style.display = "none";
            document.getElementById('TxtBox8').style.display = "none";
        }
    }
}

    function TrocandoInstancia() {
        document.getElementById('TxtBox4').style.display = "none";
        document.getElementById('TxtBox9').style.display = "none";
        document.getElementById('TxtBox10').style.display = "none";
        document.getElementById('TxtBox11').style.display = "none";
        document.getElementById('TxtBox12').style.display = "none";
        document.getElementById('TxtBox7').style.display = "";
        document.getElementById('TxtBox8').style.display = "";
        document.getElementById('Label8').style.display = "none";
        document.getElementById('Label10').style.display = "none";
        document.getElementById('Label11').style.display = "none";

        document.getElementById('TxtBox4').value = "";
        document.getElementById('TxtBox9').value = "";
        document.getElementById('TxtBox10').value = "";
        document.getElementById('TxtBox11').value = "";
        document.getElementById('TxtBox12').value = "";
        document.getElementById('TxtBox7').value = "";
        document.getElementById('TxtBox8').value = "";
    };
