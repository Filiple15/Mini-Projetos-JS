class Jogo
{
    constructor()
    {
        this.opcoes = ['pedra', 'papel', 'tesoura'];
        this.escolhaUsuario = null;
        this.escolhaComputador = null;
        this.resultado = null;
        
        this.interface = new InterfaceUsuario(this);
        this.iniciar();
    }

    iniciar()
    {
        this.interface.mostrarBordasIniciais();
    }

    jogar(escolhaUsuario)
    {
        this.escolhaUsuario = escolhaUsuario;
        this.escolhaComputador = this.obterEscolhaComputador();
        this.resultado = this.calcularResultado();
        
        this.interface.atualizarInterface();
    }

    obterEscolhaComputador()
    {
        const indiceAleatorio = Math.floor(Math.random() * 3);
        return this.opcoes[indiceAleatorio];
    }

    calcularResultado()
    {
        if (this.escolhaUsuario === this.escolhaComputador) {
            return 'empate';
        } else if (
            (this.escolhaUsuario === 'pedra' && this.escolhaComputador === 'tesoura') ||
            (this.escolhaUsuario === 'papel' && this.escolhaComputador === 'pedra') ||
            (this.escolhaUsuario === 'tesoura' && this.escolhaComputador === 'papel')
        ) {
            return 'vitoria';
        } else {
            return 'derrota';
        }
    }
}
