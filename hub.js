// Aguarda o documento HTML ser totalmente carregado na tela
document.addEventListener("DOMContentLoaded", () => {
    
    // Captura o elemento do título principal pelo ID
    const titulo = document.getElementById("titulo-principal");
    
    // Pequeno atraso (delay) de 200 milissegundos para disparar o efeito suavemente
    setTimeout(() => {
        // Adiciona a classe CSS que executa o crescimento e a opacidade do nome principal
        titulo.classList.add("titulo-animado");
    }, 200);

});
