// Lista de productos
const products = [
    { name: "Remera Vent Verde", price: 15, img: "assets/catalog/remera-1.png", link: "producto.html" },
    { name: "Bolso CICA Neumático negro", price: 35, img: "assets/catalog/bolso.png", link: "producto.html" },
    { name: "Jerséi de lana reciclada", price: 25, img: "assets/catalog/jersei.png", link: "producto.html" },
    { name: "Sneaker Spandau Navy Man", price: 30, img: "assets/catalog/zapatillas-1.png", link: "producto.html" },
    { name: "Pantalones Cargo Ethica Azules", price: 27, img: "assets/catalog/pantalones.png", link: "producto.html" },
    { name: "Remera azul", price: 15, img: "assets/catalog/remera-azul.png", link: "producto.html" },
    { name: "Camiseta Francisca blanca", price: 15, img: "assets/catalog/musculosa.png", link: "producto.html" },
    { name: "Sneaker Corsocomo Woman", price: 30, img: "assets/catalog/zapatillas-2.png", link: "producto.html" },
    { name: "Bandolera Frodo L", price: 30, img: "assets/catalog/bandolera.png", link: "producto.html" },
    { name: "Pantalones cortos Beige", price: 20, img: "assets/catalog/bermuda.png", link: "producto.html" },
    // Añade más productos aquí
];

// Seleccionar el catálogo donde se mostrarán los productos
const catalog = document.querySelector('.product-list');

// Función para generar el catálogo de productos
function renderProducts(products) {
    catalog.innerHTML = '';  // Limpiar el catálogo
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <a href="${product.link}">
                <img src="${product.img}" alt="${product.name}">
                <h2>${product.name}</h2>
            </a>
            <p>$${product.price.toFixed(3)}</p>
        `;
        catalog.appendChild(productDiv);
    });
}

// Renderizar los productos al cargar la página
renderProducts(products);

// Funcionalidad de filtro de precios
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const applyFilterBtn = document.getElementById('applyFilter');

// Actualizar el texto del rango de precio seleccionado
priceValue.textContent = `$0 - $${priceRange.value}`;

priceRange.addEventListener('input', () => {
    priceValue.textContent = `$0 - $${priceRange.value}`;
});

// Aplicar el filtro cuando se hace clic en el botón
applyFilterBtn.addEventListener('click', () => {
    const maxPrice = parseInt(priceRange.value);

    // Filtrar productos por precio y renderizar
    const filteredProducts = products.filter(product => product.price <= maxPrice);
    renderProducts(filteredProducts);
});

