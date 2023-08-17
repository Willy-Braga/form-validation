//Preciso pegar os inputs e o textArea
//Preciso pegar o botão

const inputs = document.querySelectorAll('.form-envio');
const botao = document.querySelector('.btn');
const error = document.querySelectorAll('.error-message');

//Criar a função do botão
// Adicionar evento de click ao botão

botao.addEventListener('click', (event) => {

    //Usado para interceptar error de submit
    event.preventDefault(); 

    //Criar a função para percorrer cada item do input
    inputs.forEach(function (input) {
        if (input.value === "") {
            input.classList.remove('accepted');
            input.classList.add('erro');
            error.forEach(function (messageError) {
                messageError.classList.remove('error-message'); // Mostrar a mensagem de erro
            });
        } else if (input.value !== ""){
            input.classList.remove('erro');
            input.classList.add('accepted');
            error.forEach(function (messageError) {
                messageError.classList.add('error-message'); // Esconder a mensagem de erro
            });
        };
    });
});