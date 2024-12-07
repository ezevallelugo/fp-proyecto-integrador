(function () {
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRegex = /^.{4,10}$/; // Cambia el rango según tus necesidades

    const estadoValidacionLogin = {
        userEmail: false,
        userPassword: false,
    };

    const estadoValidacionRegistro = {
        userName: false,
        userEmail: false,
        userPassword: false,
    };

    document.addEventListener("DOMContentLoaded", () => {
        // Validación de inicio de sesión
        document.getElementById('login-email').addEventListener("input", () => {
            validarCampo(emailRegex, document.getElementById('login-email'), "El correo solo puede contener letras, números, puntos, guiones y guión bajo.", estadoValidacionLogin, 'userEmail');
        });

        document.getElementById('login-password').addEventListener("input", () => {
            validarCampo(passwordRegex, document.getElementById('login-password'), "La contraseña debe tener entre 4 a 10 dígitos.", estadoValidacionLogin, 'userPassword');
        });

        // Validación de registro
        document.getElementById('register-name').addEventListener("input", () => {
            validarCampo(/^[a-zA-Z\s]{4,30}$/, document.getElementById('register-name'), "El nombre debe contener entre 4 y 30 caracteres alfabéticos.", estadoValidacionRegistro, 'userName');
        });

        document.getElementById('register-email').addEventListener("input", () => {
            validarCampo(emailRegex, document.getElementById('register-email'), "El correo solo puede contener letras, números, puntos, guiones y guión bajo.", estadoValidacionRegistro, 'userEmail');
        });

        document.getElementById('register-password').addEventListener("input", () => {
            validarCampo(passwordRegex, document.getElementById('register-password'), "La contraseña debe tener entre 4 a 10 dígitos.", estadoValidacionRegistro, 'userPassword');
        });
    });

    function validarCampo(regularExpresion, campo, mensaje, estadoValidacion, campoNombre) {
        const esValido = regularExpresion.test(campo.value);
        if (esValido) {
            estadoValidacion[campoNombre] = true;
            campo.classList.remove("error");
        } else {
            estadoValidacion[campoNombre] = false;
            campo.classList.add("error");
            mostrarAlerta(campo.parentElement, mensaje);
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

    window.login = function () {
        if (estadoValidacionLogin.userEmail && estadoValidacionLogin.userPassword) {
            // Aquí puedes agregar la lógica para enviar el formulario de inicio de sesión
            alert("Inicio de sesión exitoso");
            // Resetear el formulario si es necesario
            loginContainer.reset();
        } else {
            alert("Por favor, completa todos los campos correctamente.");
        }
    };

    window.register = function () {
        if (estadoValidacionRegistro.userName && estadoValidacionRegistro.userEmail && estadoValidacionRegistro.userPassword) {
            // Aquí puedes agregar la lógica para enviar el formulario de registro
            alert("Registro exitoso");
            // Resetear el formulario si es necesario
            registerContainer.reset();
        } else {
            alert("Por favor, completa todos los campos correctamente.");
        }
    };

    window.toggleForm = function () {
        // Alternar la visibilidad de los formularios de inicio de sesión y registro
        if (loginContainer.style.display === "none") {
            loginContainer.style.display = "block";
            registerContainer.style.display = "none";
        } else {
            loginContainer.style.display = "none";
            registerContainer.style.display = "block";
        }
    };
})();