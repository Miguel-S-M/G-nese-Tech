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




const curiosidades = [

    "O ENIAC pesava cerca de 30 toneladas.",

    "Ada Lovelace escreveu o primeiro algoritmo da história.",

    "O primeiro disco rígido da IBM pesava mais de uma tonelada.",

    "Um smartphone atual possui muito mais poder de processamento que o ENIAC.",

    "Charles Babbage é conhecido como o pai da computação.",

    "Alan Turing ajudou a decifrar códigos durante a Segunda Guerra Mundial.",

    "O Ábaco foi criado há mais de 4 mil anos."

];

function mostrarCuriosidade(){

    const numero = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("curiosidade").innerHTML = curiosidades[numero];

}



let palavra = "";

document.addEventListener("keydown", function(event){

    palavra += event.key.toUpperCase();

    if(palavra.length > 5){
        palavra = palavra.slice(-5);
    }

    if(palavra === "ENIAC"){

        let aviso = document.getElementById("easterEgg");

        aviso.style.display = "block";

        setTimeout(function(){

            aviso.style.display = "none";

        },4000);

        palavra = "";

    }

});
