/**********************Carga de productos******************************/
// Lista de productos
const products = [
    { name: "Remera Vent Verde", price: 15, img: "assets/catalog/remera-1.png", link: "producto.html", category: "remeras" },
    { name: "Bolso CICA Neumático negro", price: 35, img: "assets/catalog/bolso.png", link: "producto.html", category: "accesorios" },
    { name: "Jerséi de lana reciclada", price: 25, img: "assets/catalog/jersei.png", link: "producto.html", category: "remeras" },
    { name: "Sneaker Spandau Navy Man", price: 30, img: "assets/catalog/zapatillas-1.png", link: "producto.html", category: "calzado" },
    { name: "Pantalones Cargo Ethica Azules", price: 27, img: "assets/catalog/pantalones.png", link: "producto.html", category: "pantalones" },
    { name: "Remera azul", price: 15, img: "assets/catalog/remera-azul.png", link: "producto.html", category: "remeras" },
    { name: "Camiseta Francisca blanca", price: 15, img: "assets/catalog/musculosa.png", link: "producto.html", category: "remeras" },
    { name: "Sneaker Corsocomo Woman", price: 30, img: "assets/catalog/zapatillas-2.png", link: "producto.html", category: "calzado" },
    { name: "Bandolera Frodo L", price: 30, img: "assets/catalog/bandolera.png", link: "producto.html", category: "accesorios" },
    { name: "Pantalones cortos Beige", price: 20, img: "assets/catalog/bermuda.png", link: "producto.html", category: "pantalones" },
];

// Selección del catálogo donde se mostrarán los productos
const catalog = document.querySelector('.product-list');

let selectedCategory = null;
let selectedPrice = null;

// Función para renderizar productos en el catálogo
function renderProducts(filteredProducts) {
    catalog.innerHTML = ''; // Limpiar catálogo antes de renderizar
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.setAttribute('data-category', product.category); // Agregar categoría como atributo
        productDiv.innerHTML = `
            <a href="${product.link}">
                <img src="${product.img}" alt="${product.name}">
                <h2>${product.name}</h2>
            </a>
            <p>$${product.price.toFixed(2)}</p>
        `;
        catalog.appendChild(productDiv);
    });
}

// Función para aplicar el filtro de categoría y precio combinados
function applyFilters() {
    let filteredProducts = products;

    // Si se seleccionó una categoría, filtrar por categoría
    if (selectedCategory) {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    // Si se seleccionó un rango de precios, filtrar por precio
    if (selectedPrice) {
        filteredProducts = filteredProducts.filter(product => product.price <= selectedPrice);
    }

    // Renderiza los productos filtrados
    renderProducts(filteredProducts);
}

/******************Filtro por categorías************************************/
// Obtiene los enlaces de las categorías
const categoryLinks = document.querySelectorAll('.filter-category a');

categoryLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevenir la acción predeterminada del enlace

        // Obtiene la categoría seleccionada
        selectedCategory = link.textContent.trim().toLowerCase();

        // Aplica filtros (si se ha seleccionado un precio, se mantendrá el filtro de precio)
        applyFilters();
    });
});

/******************Filtro por precios***************************************/
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const applyFilterBtn = document.getElementById('applyFilter');

// Actualiza el texto del rango de precio seleccionado
priceValue.textContent = `$0 - $${priceRange.value}`;

priceRange.addEventListener('input', () => {
    priceValue.textContent = `$0 - $${priceRange.value}`;
});

// Aplica el filtro de precio cuando se hace click en el botón
applyFilterBtn.addEventListener('click', () => {
    selectedPrice = parseInt(priceRange.value); // Almacenar el rango de precio seleccionado

    // Aplica filtros (si se ha seleccionado una categoría, se mantendrá el filtro de categoría)
    applyFilters();
});

/******************Renderizado inicial de productos*************************/
// Renderiza todos los productos al cargar la página
renderProducts(products);
