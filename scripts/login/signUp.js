const form = document.querySelector('.register');
const inputUser = document.querySelector(".register input[type='text']");
const inputEmail = document.querySelector(".register input[type='email']");
const inputPass = document.querySelector(".register input[type='password']");


const userNameRegex = /^[a-zA-Z0-9\_\-]{4,16}$/;
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordRegex = /^.{4,12}$/;

document.addEventListener("DOMContentLoaded", ()=>{
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        enviarFormulario();
    });
    inputUser.addEventListener("input", ()=>{
       validarCampo(userNameRegex, inputUser, "El usuario debe contener de 4 a 16 digitos alfanúmericos");
    })
    inputEmail.addEventListener("input", ()=>{
        validarCampo(emailRegex, inputEmail, "El correo solo puede contener letras, números, puntos, guiones y guión bajo.");
    })
    inputPass.addEventListener("input", ()=>{
        validarCampo(passwordRegex, inputPass, "La contraseña debe tener entre 4 a 12 digitos.");
    })
});
function validarCampo(regularExpresion, campo, mensaje){
    const validarCampo = regularExpresion.test(campo.value);
    if(validarCampo){
        eliminarAlerta(campo.parentElement.parentElement)
       
      
    }else{
        mostrarAlerta(campo.parentElement.parentElement,mensaje)
        
    }
}
function mostrarAlerta(referencia,mensaje) {
    eliminarAlerta(referencia)
    const alertaDiv = document.createElement("div");
    alertaDiv.classList.add("alerta")
    alertaDiv.textContent = mensaje;
    referencia.appendChild(alertaDiv);
}
function eliminarAlerta(referencia) {
    const alerta = referencia.querySelector(".alerta");
    
    if(alerta){
        alerta.remove()
    }
}

function enviarFormulario(){
    //Validamos envio de formulario
}
console.log('hola');