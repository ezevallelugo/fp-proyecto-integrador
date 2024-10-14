// Obtener elementos del DOM
const rangeInput = document.getElementById('.price-range');
const minPriceLabel = document.getElementById('min-price');
const maxPriceLabel = document.getElementById('max-price');
const applyFilterButton = document.querySelector('.apply-filter');
const productos = document.querySelectorAll('.producto');
// Actualizar el valor del precio máximo visualmente cuando se mueva el control deslizante
rangeInput.addEventListener('input', function() {
    maxPriceLabel.textContent = `$${Number(rangeInput.value).toLocaleString()}`;
});
// Función para aplicar el filtro de precios
function aplicarFiltro() {
    const maxPrecio = parseInt(rangeInput.value);
    console.log("Entro e hizo click");
    productos.forEach(producto => {
        const precioProducto = parseInt(producto.getAttribute('data-precio'));
        // Mostrar u ocultar productos según el filtro
        if (precioProducto <= maxPrecio) {
            producto.style.display = 'block';  // Mostrar productos dentro del rango
            console.log("Muestra");
        } else {
            producto.style.display = 'none';  // Ocultar productos fuera del rango
            console.log("No muestra");
        }
    });
}
// Agregar el evento al botón "Aplicar filtro"
applyFilterButton.addEventListener('click', aplicarFiltro);
