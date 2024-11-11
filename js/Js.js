function enviarFormulario() {
    // Pega os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    // Valida se os campos estão preenchidos
    if (nome && email && assunto && mensagem) {
        // Simula o envio do formulário (por exemplo, pode integrar com uma API de envio de e-mails)
        console.log("Nome:", nome);
        console.log("E-mail:", email);
        console.log("Assunto:", assunto);
        console.log("Mensagem:", mensagem);
        
        alert("Mensagem enviada com sucesso!");
        return false; // Previna o envio real do formulário para testes
    } else {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
}

// Array com conjuntos de imagens para cada ciclo
const conjuntosDeImagens = [
    ['https://lastfm.freetls.fastly.net/i/u/770x0/e5f40ae3767cf5b6184776f97e52b8ca.jpg#e5f40ae3767cf5b6184776f97e52b8ca', 'https://lastfm.freetls.fastly.net/i/u/770x0/2a783d64b0ea6d133eb7f6258ec1b6b0.jpg#2a783d64b0ea6d133eb7f6258ec1b6b0', 'https://lastfm.freetls.fastly.net/i/u/770x0/eed51418bdbc41bc9aa959de2d65dd5d.jpg#eed51418bdbc41bc9aa959de2d65dd5d'], // Primeiro ciclo de imagens
    ['https://lastfm.freetls.fastly.net/i/u/770x0/3d359b955132742bc2fc3eacdff90b8c.jpg#3d359b955132742bc2fc3eacdff90b8c', 'https://lastfm.freetls.fastly.net/i/u/770x0/7b99660593d36842212fe10e7ec6a7ef.jpg#7b99660593d36842212fe10e7ec6a7ef', 'https://lastfm.freetls.fastly.net/i/u/770x0/5bef877b7563e13a4218da382b86fe7a.jpg#5bef877b7563e13a4218da382b86fe7a']  // Segundo ciclo de imagens
];

// Seleciona todas as imagens que devem ser trocadas
const imagens = document.querySelectorAll('.cols-3 img');
let indexTroca = 0;

function trocarImagens() {
    // Altera o src de cada imagem com o conjunto atual
    for (let i = 0; i < imagens.length; i++) {
        imagens[i].src = conjuntosDeImagens[indexTroca][i];
    }

    // Incrementa o índice e reseta para 0 quando alcança o fim dos conjuntos
    indexTroca = (indexTroca + 1) % conjuntosDeImagens.length;
}

// Define a troca de imagens a cada 3 segundos
setInterval(trocarImagens, 3000);

