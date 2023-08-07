let inputs = document.querySelectorAll('input')
console.log(inputs)
let formulario = document.querySelector('form')
console.log(formulario)
let avisos = document.querySelectorAll('.opacity')
console.log(avisos)



formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    inputs.forEach(function (input) {
        console.log(input);
        if (input.value !== ""){
            input.style.border = "1px solid #00C22B";
        } else if (input.value === ""){
            input.style.border = "1px solid #F52E2E";
            avisos.forEach(function (aviso) {
                aviso.classList.remove('opacity')
            })
        }
    });
});
