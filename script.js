const form = document.getElementById("form");
const nome = document.getElementById("nome");
const tel = document.getElementById("tel");
const email = document.getElementById("email");
const duvida = document.getElementById("duvida");




form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    inputNome();
    inputTel();
    inputEmail();
    inputDuvida();
    
    alert(` 
        Usuário Cadastrado Com Sucesso!

        Nome: ${nome.value}
        Telefone: ${tel.value}
        Email: ${email.value}
        Dúvida: ${duvida.value}`);
});

function inputNome() {
    const recebeNome = nome.value;
    console.log(recebeNome);
}

function inputTel() {
    const recebeTel = tel.value;
    console.log(recebeTel);
}

function inputEmail() {
    const recebeEmail = email.value;
    console.log(recebeEmail);
}

function inputDuvida() {
    const recebeDuvida = duvida.value;
    console.log(recebeDuvida);
}

