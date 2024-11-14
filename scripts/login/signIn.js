// Variables
const formulario = document.querySelector('.sign');
const inputE = document.querySelector(".sign input[type='email']");
const inputP = document.querySelector(".sign input[type='password']");

const regexE = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regexP = /^.{4,12}$/;

//Eventos

document.addEventListener("DOMContentLoaded", ()=>{
    formulario.addEventListener("submit", (e)=>{
        e.preventDefault();
        enviarFormulario();
    });
    inputE.addEventListener("input", ()=>{
        validarCampo(regexE, inputE, "El correo solo puede contener letras, números, puntos, guiones y guión bajo.");
    })
    inputP.addEventListener("input", ()=>{
        validarCampo(regexP, inputP, "La contraseña debe tener entre 4 a 12 digitos.");
    })
});
function validarC(regularExpresion, campo, mensaje){
    const validarCamp = regularExpresion.test(campo.value);
    if(validarCamp){
        eliminarA(campo.parentElement.parentElement)
    }else{
        mostrarA(campo.parentElement.parentElement,mensaje)
    }
}
function mostrarA(referencia,mensaje) {
    eliminarA(referencia)
    const alertaDiv = document.createElement("div");
    alertaDiv.classList.add("alerta")
    alertaDiv.textContent = mensaje;
    referencia.appendChild(alertaDiv);
}
function eliminarA(referencia) {
    const alerta = referencia.querySelector(".alerta");
    
    if(alerta){
        alerta.remove()
    }
}
