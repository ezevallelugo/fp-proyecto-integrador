// index.js
function toggleForm() {
    var loginContainer = document.getElementById('login-container');
    var registerContainer = document.getElementById('register-container');
    if (loginContainer.style.display === 'none') {
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    }
}

function handleResize() {
    var loginContainer = document.getElementById('login-container');
    var registerContainer = document.getElementById('register-container');
    
    if (window.innerWidth >= 768) {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'none';
    } else {
        if (loginContainer.style.display === 'none') {
            registerContainer.style.display = 'block';
        } else {
            loginContainer.style.display = 'block';
        }
    }
}

window.addEventListener('resize', handleResize);

handleResize();


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

const main = document.getElementById('main');

signUpButton.addEventListener('click', () => {
    main.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
    main.classList.remove("right-panel-active");
});


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


(function () {
    const form = document.querySelector('.register');
    const inputUser  = document.querySelector(".register input[type='text']");
    const inputEmail = document.querySelector(".register input[type='email']");
    const inputPass = document.querySelector(".register input[type='password']");
    const alertaError = document.querySelector(".alerta-error");
    const alertaExito = document.querySelector(".alerta-exito");

    const userNameRegex = /^[a-zA-Z0-9\_\-]{4,16}$/;
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRegex = /^.{4,12}$/;

    const estadoValidacionCampos = {
        userName: false,
        userEmail: false,
        userPassword: false,
    };

    document.addEventListener("DOMContentLoaded", () => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            enviarFormulario();
        });

        inputUser .addEventListener("input", () => {
            validarCampo(userNameRegex, inputUser , "El usuario debe contener de 4 a 16 dígitos alfanuméricos.");
        });

        inputEmail.addEventListener("input", () => {
            validarCampo(emailRegex, inputEmail, "El correo solo puede contener letras, números, puntos, guiones y guión bajo.");
        });

        inputPass.addEventListener("input", () => {
            validarCampo(passwordRegex, inputPass, "La contraseña debe tener entre 4 a 12 dígitos.");
        });
    });

    function validarCampo(regularExpresion, campo, mensaje) {
        const esValido = regularExpresion.test(campo.value);
        estadoValidacionCampos[campo.name] = esValido; // Actualiza el estado
        if (esValido) {
            eliminarAlerta(campo.parentElement.parentElement);
            campo.parentElement.classList.remove("error");
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
        if (alerta) {
            alerta.remove();
        }
    }

    function enviarFormulario() {
        alertaExito.classList.remove("alertaExito");
        alertaError.classList.remove("alertaError");

        if (estadoValidacionCampos.userName && estadoValidacionCampos.userEmail && estadoValidacionCampos.userPassword) {
            alertaExito.classList.add("alertaExito");
            form.reset();
            setTimeout(() => {
                alertaExito.classList.remove("alertaExito");
            }, 3000);
        } else {
            alertaError.classList.add("alertaError");
            setTimeout(() => {
                alertaError.classList.remove("alertaError");
            }, 3000);
        }
    }
})();

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
