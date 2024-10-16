/**********************Carga de productos******************************/
// Lista de productos (agregué los materiales como un array en cada producto)
const products = [
    { name: "Remera Vent Verde", price: 15, img: "assets/catalog/remera-1.png", link: "producto.html", category: "remeras", materials: ["algodon"] },
    { name: "Bolso CICA Neumático negro", price: 35, img: "assets/catalog/bolso.png", link: "producto.html", category: "accesorios", materials: ["camaras"] },
    { name: "Jerséi de lana reciclada", price: 25, img: "assets/catalog/jersei.png", link: "producto.html", category: "remeras", materials: ["lana"] },
    { name: "Sneaker Spandau Navy Man", price: 30, img: "assets/catalog/zapatillas-1.png", link: "producto.html", category: "calzado", materials: ["poliester"] },
    { name: "Pantalones Cargo Ethica Azules", price: 27, img: "assets/catalog/pantalones.png", link: "producto.html", category: "pantalones", materials: ["algodon", "poliester"] },
    { name: "Remera azul", price: 15, img: "assets/catalog/remera-azul.png", link: "producto.html", category: "remeras", materials: ["algodon"] },
    { name: "Camiseta Francisca blanca", price: 15, img: "assets/catalog/musculosa.png", link: "producto.html", category: "remeras", materials: ["algodon"] },
    { name: "Sneaker Corsocomo Woman", price: 30, img: "assets/catalog/zapatillas-2.png", link: "producto.html", category: "calzado", materials: ["poliester"] },
    { name: "Bandolera Frodo L", price: 30, img: "assets/catalog/bandolera.png", link: "producto.html", category: "accesorios", materials: ["camaras"] },
    { name: "Pantalones cortos Beige", price: 20, img: "assets/catalog/bermuda.png", link: "producto.html", category: "pantalones", materials: ["algodon", "lana"] },
];

// Selección del catálogo donde se mostrarán los productos
const catalog = document.querySelector('.product-list');

let selectedCategory = null;
let selectedPrice = null;
let selectedMaterials = [];

/**********************Renderizado de productos******************************/
function renderProducts(filteredProducts) {
    catalog.innerHTML = ''; // Limpiar catálogo antes de renderizar
    if (filteredProducts.length === 0) {
        catalog.innerHTML = '<p>No hay resultados</p>'; // Mostrar mensaje si no hay productos
        return;
    }
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

/******************Aplicación de Filtros******************************/
function applyFilters() {
    let filteredProducts = products;

    // Filtrar por categoría si hay una seleccionada
    if (selectedCategory) {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    // Filtrar por rango de precio si hay uno seleccionado
    if (selectedPrice) {
        filteredProducts = filteredProducts.filter(product => product.price <= selectedPrice);
    }

    // Filtrar por materiales si hay uno o más seleccionados
    if (selectedMaterials.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            selectedMaterials.every(material => product.materials.includes(material))
        );
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

        // Reiniciar el filtro de precio y material
        selectedPrice = null;
        selectedMaterials = [];
        priceRange.value = priceRange.max; // Restablecer el control de rango de precios
        priceValue.textContent = `$0 - $${priceRange.max}`; // Actualizar el texto del precio

        // Aplica el filtro solo por categoría
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

// Aplica el filtro de precio cuando se hace clic en el botón
applyFilterBtn.addEventListener('click', () => {
    selectedPrice = parseInt(priceRange.value); // Almacenar el rango de precio seleccionado
    applyFilters(); // Aplicar filtros combinados
});

/******************Filtro por materiales************************************/
const materialCheckboxes = document.querySelectorAll('.filter-material input');

materialCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const material = checkbox.id; // Identificar material por el id del checkbox

        if (checkbox.checked) {
            // Agregar material si fue seleccionado
            selectedMaterials.push(material);
        } else {
            // Remover material si fue deseleccionado
            selectedMaterials = selectedMaterials.filter(m => m !== material);
        }

        applyFilters(); // Aplicar los filtros después de cambiar los materiales seleccionados
    });
});

/******************Renderizado inicial de productos*************************/
// Renderiza todos los productos al cargar la página
renderProducts(products);
