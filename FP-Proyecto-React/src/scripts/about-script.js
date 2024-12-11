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

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight && rect.bottom >= 0; 
}

function handleScroll() {
    const fadeElems = document.querySelectorAll('.fade-in');
    fadeElems.forEach(elem => {
        if (isInViewport(elem)) {
            elem.classList.add('show');
        }
    });
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('load', startCounters);


function activateAnimationsOnLoad() {
    handleScroll(); 
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('scroll', handleScroll);

function animateStats(id, start, end, duration, isPercentage = false) {
    let element = document.getElementById(id);
    let range = end - start;
    let startTime = null;

    function updateCounter(currentTime) {
        if (!startTime) startTime = currentTime;
        let progress = currentTime - startTime;
        let increment = Math.min((progress / duration) * range, range);

        element.innerText = Math.floor(start + increment).toLocaleString() + (isPercentage ? '%' : '');

        if (progress < duration) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

let statsStarted = false;

function startCounters() {
    const statSection = document.querySelector('.statistics');
    if (!statsStarted && isInViewport(statSection)) {

        animateStats('stat1', 0, 150000, 2000); 
        animateStats('stat2', 0, 4500000000, 2000); 
        animateStats('stat3', 0, 20000000, 2000); 
        animateStats('stat4', 0, 70, 3000, true); 

        statsStarted = true;  
    }
}

window.addEventListener('scroll', startCounters);

window.addEventListener('load', startCounters);


function activateAnimationsOnLoad() {
    handleScroll(); 
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('load', activateAnimationsOnLoad);

document.addEventListener('DOMContentLoaded', activateAnimationsOnLoad);