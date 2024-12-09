
document.addEventListener("DOMContentLoaded", () => {
    const mobileSesion = document.querySelector('.inicio-mobile');
    const inputUser = document.querySelector('.register-user')
    const inputEmail = document.querySelector("#login-email");
    const inputPass = document.querySelector("#login-password");
    const alertaR = document.querySelector(".alertaR");
    const alertaE = document.querySelector(".alertaE");

    const emailRx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRx = /^.{4,12}$/;

    const estadoDeCampos = {
        emailUsuario: false,
        passwordUsuario: false,
    };

    if (mobileSesion) {
        mobileSesion.addEventListener("submit", (e) => {
            e.preventDefault();
            enviarF();
        });
    }

    if (inputEmail) {
        inputEmail.addEventListener("input", () => {
            validarCampo(emailRx, inputEmail, "El correo es inválido.", "emailUsuario");
        });
    }

    if (inputPass) {
        inputPass.addEventListener("input", () => {
            validarCampo(passwordRx, inputPass, "La contraseña es inválida.", "passwordUsuario");
        });
    }

    function validarCampo(regularExpresion, campo, mensaje, campoNombre) {
        const validarCampos = regularExpresion.test(campo.value);
        estadoDeCampos[campoNombre] = validarCampos;

        if (validarCampos) {
            eliminarAlertas(campo.parentElement);
            campo.classList.remove("error");
        } else {
            mostrarAlertas(campo.parentElement, mensaje);
            campo.classList.add("error");
        }
    }

    function mostrarAlertas(referencia, mensaje) {
        eliminarAlertas(referencia);
        const alertaDiv = document.createElement("div");
        alertaDiv.classList.add("alerta");
        alertaDiv.textContent = mensaje;
        referencia.appendChild(alertaDiv);
    }

    function eliminarAlertas(referencia) {
        const alerta = referencia.querySelector(".alerta");
        if (alerta) {
            alerta.remove();
        }
    }

    function enviarF() {
        if (estadoDeCampos.emailUsuario && estadoDeCampos.passwordUsuario) {
            alertaE.style.display = 'block';
            alertaR.style.display = 'none';
            mobileSesion.reset();
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
});
