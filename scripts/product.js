function showContent(tab) {
    // Remueve la clase 'active' de todos los botones
    document.querySelectorAll('.tabs .tab').forEach(button => {
        button.classList.remove('active');
    });

    // Remueve la clase 'active' de todas las secciones de contenido
    document.querySelectorAll('.tab-content .content').forEach(content => {
        content.classList.remove('active');
    });

    // Agrega la clase 'active' al botón y al contenido correspondientes
    document.querySelector(`.tabs .tab[onclick="showContent('${tab}')"]`).classList.add('active');
    document.getElementById(tab).classList.add('active');
}
// Función para manejar la selección de colores
document.querySelectorAll('.color-button').forEach(button => {
    button.addEventListener('click', function() {
        // Remover la clase 'selected' de todos los botones de color
        document.querySelectorAll('.color-button').forEach(btn => {
            btn.classList.remove('selected');
        });

        // Agregar la clase 'selected' solo al botón que se ha clickeado
        this.classList.add('selected');
    });
});

// Función para manejar la selección de talles
document.querySelectorAll('.size-button').forEach(button => {
    button.addEventListener('click', function() {
        // Remover la clase 'selected' de todos los botones de talle
        document.querySelectorAll('.size-button').forEach(btn => {
            btn.classList.remove('selected');
        });

        // Agregar la clase 'selected' solo al botón que se ha clickeado
        this.classList.add('selected');
    });
});

// Función para actualizar la cantidad con los botones + y -
const decrementButton = document.querySelector('.decrement');
const incrementButton = document.querySelector('.increment');
const quantityDisplay = document.querySelector('.quantity-display');

let quantity = 1; // Valor inicial
const minQuantity = 1;
const maxQuantity = 5;

// Función para actualizar la visualización del valor de cantidad
function updateDisplay() {
    quantityDisplay.textContent = quantity;
}

// Evento de decremento (-)
decrementButton.addEventListener('click', () => {
    if (quantity > minQuantity) {
        quantity--;
        updateDisplay();
    }
});

// Evento de incremento (+)
incrementButton.addEventListener('click', () => {
    if (quantity < maxQuantity) {
        quantity++;
        updateDisplay();
    }
});

// Inicializa la visualización del valor de cantidad
updateDisplay();
