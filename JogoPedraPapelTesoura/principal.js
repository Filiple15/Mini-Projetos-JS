document.addEventListener('DOMContentLoaded', () => {
    const jogo = new Jogo();
    
    // Configura eventos (alternativa ao addEventListener interno)
    document.getElementById('pedrau').addEventListener('click', () => jogo.jogar('pedra'));
    document.getElementById('papelu').addEventListener('click', () => jogo.jogar('papel'));
    document.getElementById('tesourau').addEventListener('click', () => jogo.jogar('tesoura'));
});
