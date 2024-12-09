
document.addEventListener("DOMContentLoaded", () => {
    const mobileRegister = document.querySelector(".register-mobile");
    const inputUser     = document.querySelector("#register-name");
    const inputEmail = document.querySelector("#register-email");
    const inputPass = document.querySelector("#register-password");
    const aR = document.querySelector(".alertaR");
    const aE = document.querySelector(".alertaE");

    const userNameRegex = /^[a-zA-Z0-9\_\-]{4,16}$/;
    const emailRx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRx = /^.{4,12}$/;

    const estadoDeCampos = {
        usName: false,
        emUsuario: false,
        passUsuario: false,
    };

    if (mobileRegister) {
        mobileRegister.addEventListener("submit", (e) => {
            e.preventDefault();
            enviarFor(); // Asegúrate de que aquí se llame a enviarFor
        });
    }

    if (inputUser ) {
        inputUser .addEventListener("input", () => {
            validarC(userNameRegex, inputUser , "El nombre de usuario es inválido.", "userName");
        });
    }

    if (inputEmail) {
        inputEmail.addEventListener("input", () => {
            validarC(emailRx, inputEmail, "El correo es inválido.", "emailUsuario");
        });
    }

    if (inputPass) {
        inputPass.addEventListener("input", () => {
            validarC(passwordRx, inputPass, "La contraseña es inválida.", "passwordUsuario");
        });
    }

    function validarC(regularExpresion, campo, mensaje, campoNombre) {
        const validarCampos = regularExpresion.test(campo.value);
        estadoDeCampos[campoNombre] = validarCampos;

        if (validarCampos) {
            eliminarA(campo.parentElement);
            campo.classList.remove("error");
        } else {
            mostrarAlert(campo.parentElement, mensaje);
            campo.classList.add("error");
        }
    }

    function mostrarAlert(referencia, mensaje) {
        eliminarA(referencia);
        const alertaDiv = document.createElement("div");
        alertaDiv.classList.add("alerta");
        alertaDiv.textContent = mensaje;
        referencia.appendChild(alertaDiv);
    }

    function eliminarA(referencia) {
        const alerta = referencia.querySelector(".alerta");
        if (alerta) {
            alerta.remove();
        }
    }
    function enviarFor() {
        console.log("Validando campos:", estadoDeCampos);
    
        // Ocultar alertas antes de la validación
  
    
        if (estadoDeCampos.usName && estadoDeCampos.emUsuario && estadoDeCampos.passUsuario) {
            console.log("Todos los campos son válidos.");
            aE.style.display = 'block';
            aR.style.display = 'none';// Mostrar alerta de éxito
            mobileRegister.reset(); // Reiniciar el formulario
            setTimeout(() => {
                aE.style.display = 'none'; // Ocultar alerta de éxito después de 3 segundos
            }, 3000);
        } else {
            aE.style.display = 'none';
            aR.style.display = 'block';
            setTimeout(() => {
                aR.style.display = 'none'; // Ocultar alerta de error después de 3 segundos
            }, 3000);
        }
    }
});

/* document.addEventListener("DOMContentLoaded", () => {
    const mobileRegister = document.querySelector(".register-mobile");
    const inputUser  = document.querySelector("#register-name");
    const inputEmail = document.querySelector("#register-email");
    const inputPass = document.querySelector("#register-password");
    const aR = document.querySelector(".alertaR");
    const aE = document.querySelector(".alertaE");

    const userNameRegex = /^[a-zA-Z0-9\_\-]{4,16}$/;
    const emailRx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRx = /^.{4,12}$/;

    const estadoDeCampos = {
        userName: false,
        emailUsuario: false,
        passwordUsuario: false,
    };

    if (mobileRegister) {
        mobileRegister.addEventListener("submit", (e) => {
            e.preventDefault();
            enviarF();
        });
    }

    if (inputUser ) {
        inputUser .addEventListener("input", () => {
            validarC(userNameRegex, inputUser , "El nombre de usuario es inválido.", "userName");
        });
    }

    if (inputEmail) {
        inputEmail.addEventListener("input", () => {
            validarC(emailRx, inputEmail, "El correo es inválido.", "emailUsuario");
        });
    }

    if (inputPass) {
        inputPass.addEventListener("input", () => {
            validarC(passwordRx, inputPass, "La contraseña es inválida.", "passwordUsuario");
        });
    }

    function validarC(regularExpresion, campo, mensaje, campoNombre) {
        const validarCampos = regularExpresion.test(campo.value);
        estadoDeCampos[campoNombre] = validarCampos;

        if (validarCampos) {
            eliminarA(campo.parentElement);
            campo.classList.remove("error");
        } else {
            mostrarAlert(campo.parentElement, mensaje);
            campo.classList.add("error");
        }
    }

    function mostrarAlert(referencia, mensaje) {
        eliminarA(referencia);
        const alertaDiv = document.createElement("div");
        alertaDiv.classList.add("alerta");
        alertaDiv.textContent = mensaje;
        referencia.appendChild(alertaDiv);
    }

    function eliminarA(referencia) {
        const alerta = referencia.querySelector(".alerta");
        if (alerta) {
            alerta.remove();
        }
    }

    function enviarF() {
        // Ocultar alertas antes de la validación
        /* alertaE.style.display = 'none';
        alertaR.style.display = 'none'; */

/*         if (estadoDeCampos.userName && estadoDeCampos.emailUsuario && estadoDeCampos.passwordUsuario) {
            aE.style.display = 'block';
            mobileRegister.reset();
            setTimeout(() => {
                aE.style.display = 'none';
            }, 3000);
        } else {
            aR.style.display = 'block';
            setTimeout(() => {
                aR.style.display = 'none';
            }, 3000);
        }
    }
}); */ 
/* document.addEventListener("DOMContentLoaded", () => {
    const mobileRegister = document.querySelector(".register-mobile"); // Cambiado a la clase correcta
    const inputUser  = document.querySelector("#register-name");
    const inputEmail = document.querySelector("#register-email");
    const inputPass = document.querySelector("#register-password");
    const alertaR = document.querySelector(".alerta-error"); // Cambiado a la clase correcta
    const alertaE = document.querySelector(".alerta-exito"); // Cambiado a la clase correcta

    const userNameRegex = /^[a-zA-Z0-9\_\-]{4,16}$/;
    const emailRx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRx = /^.{4,12}$/;

    const estadoDeCampos = {
        userName: false,
        emailUsuario: false,
        passwordUsuario: false,
    };

    if (mobileRegister) {
        mobileRegister.addEventListener("submit", (e) => {
            e.preventDefault();
            enviarF();
        });
    }

    if (inputUser ) {
        inputUser .addEventListener("input", () => {
            validarC(userNameRegex, inputUser , "El nombre de usuario es inválido.", "userName");
        });
    }

    if (inputEmail) {
        inputEmail.addEventListener("input", () => {
            validarC(emailRx, inputEmail, "El correo es inválido.", "emailUsuario");
        });
    }

    if (inputPass) {
        inputPass.addEventListener("input", () => {
            validarC(passwordRx, inputPass, "La contraseña es inválida.", "passwordUsuario");
        });
    }

    function validarC(regularExpresion, campo, mensaje, campoNombre) {
        const validarCampos = regularExpresion.test(campo.value);
        estadoDeCampos[campoNombre] = validarCampos;

        if (validarCampos) {
            eliminarA(campo.parentElement);
            campo.classList.remove("error");
        } else {
            mostrarAlert(campo.parentElement, mensaje);
            campo.classList.add("error");
        }
    }

    function mostrarAlert(referencia, mensaje) {
        eliminarA(referencia);
        const alertaDiv = document.createElement("div");
        alertaDiv.classList.add("alerta");
        alertaDiv.textContent = mensaje;
        referencia.appendChild(alertaDiv);
    }

    function eliminarA(referencia) {
        const alerta = referencia.querySelector(".alerta");
        if (alerta) {
            alerta.remove();
        }
    }

    function enviarF() {
        if (estadoDeCampos.userName && estadoDeCampos.emailUsuario && estadoDeCampos.passwordUsuario) {
            alertaE.style.display = 'block';
            alertaR.style.display = 'none';
            mobileRegister.reset();
            setTimeout(() => {
                alertaE.style.display = 'none';
            }, 3000);
        } else {
            alertaE.style.display = 'none';
            alertaR.style.display = 'block';
            setTimeout(() => {
                alertaR.style.display = 'none';
            }, 3000);
        }
    }
}); */
