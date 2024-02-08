document.addEventListener("DOMContentLoaded", function() {
    const botoes = document.querySelectorAll(".botao");
    const personagens = document.querySelectorAll(".personagem");

    if (botoes.length > 0 && personagens.length > 0) {
        botoes.forEach((botao, indice) => {
            botao.addEventListener("click", () => {
                desselecionarBotao();
                desselecionarPersonagem();

                botao.classList.add("selecionado");
                personagens[indice].classList.add("selecionado");
            });
        });
    } else {
        console.error("Elementos não encontrados.");
    }

    function desselecionarPersonagem() {
        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        if (personagemSelecionado) {
            personagemSelecionado.classList.remove("selecionado");
        }
    }

    function desselecionarBotao() {
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        if (botaoSelecionado) {
            botaoSelecionado.classList.remove("selecionado");
        }
    }
});