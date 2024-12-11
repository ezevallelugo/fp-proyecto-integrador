function expandirTexto() {
    var texto = document.getElementById("moreText");
    var puntos = document.getElementById("puntos-suspensivos")
    var boton = document.getElementById("readMoreBtn");
        if (texto.style.display === "none") {
            texto.style.display = "inline";
            puntos.style.display = "none";
            boton.style.display = "none"; 
    }
}

/* --- codigo detectar scroll y contador */

/* --- comienza detectar scroll */



// Función para verificar si un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight && rect.bottom >= 0; // Elemento está visible
}


// Función para agregar la clase "show" a los elementos en viewport
function handleScroll() {
    const fadeElems = document.querySelectorAll('.fade-in');
    fadeElems.forEach(elem => {
        if (isInViewport(elem)) {
            elem.classList.add('show');
        }
    });
}

// Ejecuta la función cuando el usuario hace scroll
window.addEventListener('scroll', handleScroll);

// Para asegurarnos de que también funcione si el usuario ya está en la posición al cargar la página
window.addEventListener('load', startCounters);

/* history */

// Función para activar la animación al cargar la página
function activateAnimationsOnLoad() {
    handleScroll(); // Llama a la función de scroll para activar las animaciones
}

// Ejecuta la función cuando el usuario hace scroll
window.addEventListener('scroll', handleScroll);

// Ejecuta la función cuando el usuario hace scroll
window.addEventListener('scroll', handleScroll);

// Función para animar los contadores
function animateStats(id, start, end, duration, isPercentage = false) {
    let element = document.getElementById(id);
    let range = end - start;
    let startTime = null;

    function updateCounter(currentTime) {
        if (!startTime) startTime = currentTime;
        let progress = currentTime - startTime;
        let increment = Math.min((progress / duration) * range, range);
        // Actualiza el número, añade comas y el símbolo de porcentaje si es necesario
        element.innerText = Math.floor(start + increment).toLocaleString() + (isPercentage ? '%' : '');

        if (progress < duration) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

// Bandera para evitar que se ejecute varias veces
let statsStarted = false;

// Función que se ejecuta cuando las estadísticas son visibles
function startCounters() {
    const statSection = document.querySelector('.statistics');
    if (!statsStarted && isInViewport(statSection)) {
        // Animar cada contador con su valor final
        animateStats('stat1', 0, 150000, 2000); // Usuarios
        animateStats('stat2', 0, 4500000000, 2000); // Visitas
        animateStats('stat3', 0, 20000000, 2000); // Proyectos
        animateStats('stat4', 0, 70, 3000, true); // Tasa de éxito (con porcentaje)

        statsStarted = true;  // Marcar que ya se inició la animación
    }
}

// Ejecutar la función cuando se haga scroll
window.addEventListener('scroll', startCounters);

// Para asegurarnos de que también funcione si el usuario ya está en la posición al cargar la página
window.addEventListener('load', startCounters);


/* --- historia animacion */

// Función para activar la animación al cargar la página
function activateAnimationsOnLoad() {
    handleScroll(); // Llama a la función de scroll para activar las animaciones
}

// Ejecuta la función cuando el usuario hace scroll
window.addEventListener('scroll', handleScroll);

// Ejecutar la función al cargar la página
window.addEventListener('load', activateAnimationsOnLoad);

// También asegurarse de que funcione al cargar la página
document.addEventListener('DOMContentLoaded', activateAnimationsOnLoad);
