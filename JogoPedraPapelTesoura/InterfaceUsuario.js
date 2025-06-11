class InterfaceUsuario
{
    constructor(jogo)
    {
        this.jogo = jogo;
        this.elementos = {
            imagem: document.getElementById('imagem'),
            mensagem: document.getElementById('mensagem'),
            pedra: document.getElementById('pedrau'),
            papel: document.getElementById('papelu'),
            tesoura: document.getElementById('tesourau')
        };
    }

    mostrarBordasIniciais()
    {
        this.elementos.pedra.classList.add('bordaInicial');
        this.elementos.papel.classList.add('bordaInicial');
        this.elementos.tesoura.classList.add('bordaInicial');
    }

    atualizarInterface()
    {
        this.limparEstilos();
        this.destacarEscolhas();
        this.mostrarResultado();
    }

    limparEstilos()
    {
        // Limpa todos os elementos visuais
        Object.values(this.elementos).forEach(el => {
            el.classList.remove(
                'borda', 'bordaInicial',
                'feedback-vitoria', 'feedback-derrota', 'feedback-empate'
            );
        });
    }

    destacarEscolhas()
    {
        // Destaca escolha do usuário
        const elementoUsuario = this.elementos[this.jogo.escolhaUsuario];
        elementoUsuario.classList.add('borda', `feedback-${this.jogo.resultado}`);

        // Mostra escolha do computador
        this.elementos.imagem.src = `${this.jogo.escolhaComputador}.png`;
        this.elementos.imagem.classList.add('borda', `feedback-${this.jogo.resultado}`);
    }

    mostrarResultado()
    {
        const mensagens =
        {
            'vitoria': `Você ganhou! ${this.jogo.escolhaUsuario} vence ${this.jogo.escolhaComputador}`,
            'derrota': `Você perdeu! ${this.jogo.escolhaComputador} vence ${this.jogo.escolhaUsuario}`,
            'empate': `Empate! Ambos escolheram ${this.jogo.escolhaUsuario}`
        };
        
        this.elementos.mensagem.textContent = mensagens[this.jogo.resultado];
        this.elementos.mensagem.classList.add(`feedback-${this.jogo.resultado}`);
    }
}