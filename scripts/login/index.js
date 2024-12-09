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

/* function login() {
    // Aquí puedes agregar la lógica para iniciar sesión
    alert('Iniciar Sesión');
}
 */
/* function register() {
    // Aquí puedes agregar la lógica para registrarse
    alert('Registrarse');
} */

// Nueva función para manejar el cambio de tamaño de la ventana
function handleResize() {
    var loginContainer = document.getElementById('login-container');
    var registerContainer = document.getElementById('register-container');
    
    // Verifica si la ventana es más ancha que 768px
    if (window.innerWidth >= 768) {
        // Oculta los contenedores móviles
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'none';
    } else {
        // Si está en modo móvil, asegúrate de que solo uno de los formularios esté visible
        if (loginContainer.style.display === 'none') {
            registerContainer.style.display = 'block';
        } else {
            loginContainer.style.display = 'block';
        }
    }
}

// Agrega el evento de escucha para el cambio de tamaño de la ventana
window.addEventListener('resize', handleResize);

// Llama a la función al cargar la página para establecer el estado correcto
handleResize();