function AbrirTicket () {
    const Itens = [
        'Titulo',
        'Descricao',
        'InstanciaENivel',
        'Horario',
        'Valor',
        'Owner'
    ]

    // Container
        var Criando = document.createElement("div")
        Criando.id = "ContainerTicket"
        document.getElementById('Painel').appendChild(Criando)

    for (i=0 ; i<6 ; i++) {
        var Criando = document.createElement("Label")
        Criando.id = "ContainerTicket_" + Itens[i]
        Criando.innerText = Itens[i]
        Criando.style.gridArea = Itens[i]
        document.getElementById('ContainerTicket').appendChild(Criando)
    }

    // 
    var Criando = document.createElement("Button")
        Criando.id = "SeInscrever"
        Criando.style.gridArea = "SeInscrever"
        Criando.innerText = "Se Inscrever"
        document.getElementById('ContainerTicket').appendChild(Criando)
}