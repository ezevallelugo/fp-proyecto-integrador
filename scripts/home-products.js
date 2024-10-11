const productos = [
    { 
        nombre: "Remera Detalles de Cinta", 
        precio: 3500, 
        descuento: null, 
        calificacion: 4.5, 
        imagen: "assets/home/product-placeholder.png"
    },
    { 
        nombre: "Jean Ajustado", 
        precio: 7200, 
        precioViejo: 9000, 
        descuento: 20, 
        calificacion: 3.5, 
        imagen: "assets/home/product-placeholder.png"
    },
    { 
        nombre: "Camisa a Cuadros", 
        precio: 8000, 
        descuento: null, 
        calificacion: 4.5, 
        imagen: "assets/home/product-placeholder.png"
    },
    { 
        nombre: "Remera con Rayas", 
        precio: 2800, 
        precioViejo: 4000, 
        descuento: 30, 
        calificacion: 4.5, 
        imagen: "assets/home/product-placeholder.png"
    },
    { 
        nombre: "Camisa Rayas Verticales", 
        precio: 5600, 
        precioViejo: 7000, 
        descuento: 20, 
        calificacion: 5, 
        imagen: "assets/home/product-placeholder.png"
    },
    { 
        nombre: "Courage Remera Gráfica", 
        precio: 4500, 
        descuento: null, 
        calificacion: 4, 
        imagen: "assets/home/product-placeholder.png"
    },
    { 
        nombre: "Bermuda Suelta", 
        precio: 7000, 
        descuento: null, 
        calificacion: 3, 
        imagen: "assets/home/product-placeholder.png"
    },
    { 
        nombre: "Jean Ajustado Desgastado", 
        precio: 10000, 
        descuento: null, 
        calificacion: 4.5, 
        imagen: "assets/home/product-placeholder.png"
    }
];

// Seleccionamos el contenedor del grid
const productGrid = document.getElementById('product-grid-home');

// Función para generar estrellas de calificación
function generarEstrellas(calificacion) {
    let estrellas = '';
    for (let i = 0; i < 5; i++) {
        if (i < calificacion) {
            estrellas += '★';
        } else {
            estrellas += '☆';
        }
    }
    return estrellas;
}

productos.map(producto => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        ${producto.descuento ? `<span class="discount-home">-${producto.descuento}%</span>` : ''}
        <div class="product-name">${producto.nombre}</div>
        <div class="rating">
            <span class="stars">${generarEstrellas(producto.calificacion)}</span>
            <span>${producto.calificacion}/5</span>
        </div>
        <div class="price-container">
            <div class="price">$${producto.precio}</div>
            ${producto.precioViejo ? `<div class="old-price">$${producto.precioViejo}</div>` : ''}
        </div>
    `;

    productGrid.appendChild(productCard);
});