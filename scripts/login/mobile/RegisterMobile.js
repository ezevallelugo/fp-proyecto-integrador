document.addEventListener("DOMContentLoaded", () => {
    const mobileRegister = document.querySelector(".register-mobile");
    const inputUser    = document.querySelector("#register-name");
    const inputEmail = document.querySelector("#register-email");
    const inputPass = document.querySelector("#register-password");
    const aR = document.querySelector(".register-mobile .alertaR");
    const aE = document.querySelector(".register-mobile .alertaE");

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
            validarCamposRegistro(); // Llama a la función de validación renombrada
            enviarFor(); // Luego llama a enviarFor
        });
    }

    // Validación en el evento input para mostrar errores en tiempo real
    if (inputUser ) {
        inputUser .addEventListener("input", () => {
            validarC(userNameRegex, inputUser , "El nombre de usuario es inválido.", "usName");
        });
    }

    if (inputEmail) {
        inputEmail.addEventListener("input", () => {
            validarC(emailRx, inputEmail, "El correo es inválido.", "emUsuario");
        });
    }

    if (inputPass) {
        inputPass.addEventListener("input", () => {
            validarC(passwordRx, inputPass, "La contraseña es inválida.", "passUsuario");
        });
    }

    function validarCamposRegistro() {
        // Validar cada campo y actualizar el estado
        validarC(userNameRegex, inputUser , "El nombre de usuario es inválido.", "usName");
        validarC(emailRx, inputEmail, "El correo es inválido.", "emUsuario");
        validarC(passwordRx, inputPass, "La contraseña es inválida.", "passUsuario");
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

        // Ocultar alertas de inputs antes de la validación
        eliminarA(inputUser .parentElement);
        eliminarA(inputEmail.parentElement);
        eliminarA(inputPass.parentElement);

        // Ocultar alertas generales antes de la validación
        aE.style.display = 'none';
        aR.style.display = 'none';

        if (estadoDeCampos.usName && estadoDeCampos.emUsuario && estadoDeCampos.passUsuario) {
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
});
/* document.addEventListener("DOMContentLoaded", () => {
    const mobileRegister = document.querySelector(".register-mobile");
    const inputUser   = document.querySelector("#register-name");
    const inputEmail = document.querySelector("#register-email");
    const inputPass = document.querySelector("#register-password");
    const aR = document.querySelector(".register-mobile .alertaR");
    const aE = document.querySelector(".register-mobile .alertaE");

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
            validarCamposRegistro(); // Llama a la función de validación renombrada
            enviarFor(); // Luego llama a enviarFor
        });
    }

    function validarCamposRegistro() {
        // Validar cada campo y actualizar el estado
        validarC(userNameRegex, inputUser  , "El nombre de usuario es inválido.", "usName");
        validarC(emailRx, inputEmail, "El correo es inválido.", "emUsuario");
        validarC(passwordRx, inputPass, "La contraseña es inválida.", "passUsuario");
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
        aE.style.display = 'none';
        aR.style.display = 'none';

        if (estadoDeCampos.usName && estadoDeCampos.emUsuario && estadoDeCampos.passUsuario) {
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

