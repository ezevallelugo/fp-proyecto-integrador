(function () {
    const formLogin = document.querySelector('.sign');
    const inputEmail = document.querySelector(".sign input[type='email']");
    const inputPass = document.querySelector(".sign input[type='password']");
    const alertaError = document.querySelector(".sign .alerta-Error");
    const alertaExito = document.querySelector(".sign .alerta-Exito");

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRegex = /^.{4,12}$/; // Cambié el rango a 4-10

    const estadoValidacionCampos = {
        userEmail: false,
        userPassword: false,
    }

    document.addEventListener("DOMContentLoaded", () => {
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            enviarFormulario();
        });
        inputEmail.addEventListener("input", () => {
            validarCampo(emailRegex, inputEmail, "El correo solo puede contener letras, números, puntos, guiones y guión bajo.");
        });
        inputPass.addEventListener("input", () => {
            validarCampo(passwordRegex, inputPass, "La contraseña debe tener entre 4 a 10 dígitos."); // Ajusté el mensaje
        });
    });

    function validarCampo(regularExpresion, campo, mensaje) {
        const validarCampo = regularExpresion.test(campo.value);
        if (validarCampo) {
            eliminarAlerta(campo.parentElement.parentElement);
            estadoValidacionCampos[campo.name] = true; // Campo válido
            campo.parentElement.classList.remove("error");
        } else {
            mostrarAlerta(campo.parentElement.parentElement, mensaje);
            estadoValidacionCampos[campo.name] = false; // Campo no válido
            campo.parentElement.classList.add("error");
        }
    }

    function mostrarAlerta(referencia, mensaje) {
        eliminarAlerta(referencia);
        const alertaDiv = document.createElement("div");
        alertaDiv.classList.add("alerta");
        alertaDiv.textContent = mensaje;
        referencia.appendChild(alertaDiv);
    }

    function eliminarAlerta(referencia) {
        const alerta = referencia.querySelector(".alerta");
        if (alerta) {
            alerta.remove();
        }
    }

    function enviarFormulario() {
        if (estadoValidacionCampos.userEmail && estadoValidacionCampos.userPassword) {
            alertaExito.classList.add("alertaExito");
            alertaError.classList.remove("alertaError");
            formLogin.reset(); // Cambié formRegister a formLogin
            setTimeout(() => {
                alertaExito.classList.remove("alertaExito");
            }, 3000);
            return;
        } else {
            alertaExito.classList.remove("alertaExito");
            alertaError.classList.add("alertaError");
            setTimeout(() => {
                alertaError.classList.remove("alertaError");
            }, 3000);
        }
    }
})();


/* (function (){
    const formLogin = document.querySelector('.sign');
    const inputEmail = document.querySelector(".sign input[type='email']");
    const inputPass = document.querySelector(".sign input[type='password']");
    const alertaError = document.querySelector(".sign .alerta-Error");
    const alertaExito = document.querySelector(".sign .alerta-Exito");

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRegex = /^.{4,10}$/;

    const estadoValidacionCampos = {
        userEmail: false,
        userPassword: false,
    }

    document.addEventListener("DOMContentLoaded", ()=>{
        formLogin.addEventListener("submit", (e)=>{
            e.preventDefault();
            enviarFormulario();
        });
        inputEmail.addEventListener("input", ()=>{
            validarCampo(emailRegex, inputEmail, "El correo solo puede contener letras, números, puntos, guiones y guión bajo.");
        });
        inputPass.addEventListener("input", ()=>{
            validarCampo(passwordRegex, inputPass, "La contraseña debe tener entre 4 a 12 dígitos.");
        });
    });

    function validarCampo(regularExpresion, campo, mensaje){
        const validarCampo = regularExpresion.test(campo.value);
        if(validarCampo){
            eliminarAlerta(campo.parentElement.parentElement);
            estadoValidacionCampos[campo.name] = true;
            campo.parentElement.classList.remove("error");
            return;
        } else {
            mostrarAlerta(campo.parentElement.parentElement, mensaje);
            campo.parentElement.classList.add("error");
        }
    }

    function mostrarAlerta(referencia, mensaje) {
        eliminarAlerta(referencia);
        const alertaDiv = document.createElement("div");
        alertaDiv.classList.add("alerta");
        alertaDiv.textContent = mensaje;
        referencia.appendChild(alertaDiv);
    }

    function eliminarAlerta(referencia) {
        const alerta = referencia.querySelector(".alerta");
        if(alerta){
            alerta.remove();
        }
    }

    function enviarFormulario(){
        if(estadoValidacionCampos.userEmail && estadoValidacionCampos.userPassword) {
            alertaExito.classList.add("alertaExito");
            alertaError.classList.remove("alertaError");
            formLogin.reset(); // Cambié formRegister a formLogin
            setTimeout(() => {
                alertaExito.classList.remove("alertaExito");
            }, 3000);
            return;
        } else {
            alertaExito.classList.remove("alertaExito");
            alertaError.classList.add("alertaError");
            setTimeout(() => {
                alertaError.classList.remove("alertaError");
            }, 3000);
        }
    }
})(); */