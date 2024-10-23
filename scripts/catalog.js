/**********************Carga de productos******************************/
// Lista de productos (solo algunos tienen precio original para mostrar descuento)
const products = [
    { name: "Remera Vent Verde", price: 15000, originalPrice: 20000, img: "assets/catalog/remera-1.png", link: "producto.html", category: "remeras", materials: ["algodon"] },
    { name: "Bolso CICA Neumático negro", price: 35000, img: "assets/catalog/bolso.png", link: "producto.html", category: "accesorios", materials: ["camaras"] }, // Sin descuento
    { name: "Jerséi de lana reciclada", price: 25000, originalPrice: 32000, img: "assets/catalog/jersei.png", link: "producto.html", category: "remeras", materials: ["lana"] },
    { name: "Sneaker Spandau Navy Man", price: 30000, img: "assets/catalog/zapatillas-1.png", link: "producto.html", category: "calzado", materials: ["poliester"] }, // Sin descuento
    { name: "Pantalones Cargo Ethica Azules", price: 27000, originalPrice: 33000, img: "assets/catalog/pantalones.png", link: "producto.html", category: "pantalones", materials: ["algodon", "poliester"] },
    { name: "Remera azul", price: 15000, img: "assets/catalog/remera-azul.png", link: "producto.html", category: "remeras", materials: ["algodon"] }, // Sin descuento
    { name: "Camiseta Francisca blanca", price: 15000, originalPrice: 19000, img: "assets/catalog/musculosa.png", link: "producto.html", category: "remeras", materials: ["algodon"] },
    { name: "Sneaker Corsocomo Woman", price: 30000, originalPrice: 38000, img: "assets/catalog/zapatillas-2.png", link: "producto.html", category: "calzado", materials: ["poliester"] },
    { name: "Bandolera Frodo L", price: 30000, img: "assets/catalog/bandolera.png", link: "producto.html", category: "accesorios", materials: ["camaras"] }, // Sin descuento
    { name: "Pantalones cortos Beige", price: 20000, originalPrice: 25000, img: "assets/catalog/bermuda.png", link: "producto.html", category: "pantalones", materials: ["algodon", "lana"] },
];

const ITEMS_PER_PAGE = 9; // Número de productos por página
let currentPage = 1; // Página actual
let filteredProducts = products; // Productos después de aplicar filtros

// Selección del catálogo donde se mostrarán los productos
const catalog = document.querySelector('.product-list');

/**********************Renderizado de productos******************************/
function renderProducts() {
    catalog.innerHTML = ''; // Limpia el catálogo antes de renderizar
    const start = (currentPage - 1) * ITEMS_PER_PAGE; // Calcular el índice inicial
    const end = start + ITEMS_PER_PAGE; // Calcular el índice final

    const productsToShow = filteredProducts.slice(start, end); // Obtener los productos para mostrar

    if (productsToShow.length === 0) {
        catalog.innerHTML = '<p>No hay resultados</p>'; // Muestra el mensaje si no hay productos
        return;
    }

    productsToShow.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.setAttribute('data-category', product.category); // Agrega la categoría como atributo

        // Comprueba si el producto tiene un precio original para calcular el descuento
        let discountHTML = '';
        if (product.originalPrice) {
            const discount = ((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0); // Calcula el descuento
            discountHTML = `
                <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                <span class="discount">-${discount}%</span>
            `;
        }

        // Renderiza el producto con o sin descuento
        productDiv.innerHTML = `
            <a href="${product.link}">
                <img src="${product.img}" alt="${product.name}">
                <h2>${product.name}</h2>
            </a>
            <p>
                <span class="current-price">$${product.price.toFixed(2)}</span>
                ${discountHTML} <!-- Muestra el descuento solo si existe -->
            </p>
        `;
        catalog.appendChild(productDiv);
    });

    renderPagination(); // Renderizar la paginación
}

/******************Renderizado de la paginación*************************/
function renderPagination() {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = ''; // Limpia la paginación antes de renderizar
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE); // Calcular total de páginas

    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('div');
        pageNumber.classList.add('page-number');
        pageNumber.textContent = i;
        if (i === currentPage) {
            pageNumber.classList.add('selected'); // Marca la página actual
        }

        pageNumber.addEventListener('click', () => {
            currentPage = i; // Cambia la página actual
            renderProducts(); // Vuelve a renderizar productos
        });

        paginationContainer.appendChild(pageNumber);
    }
}

/******************Aplicación de Filtros******************************/
function applyFilters() {
    let initialProducts = products;

    // Filtrar por categoría si hay una seleccionada
    if (selectedCategory) {
        initialProducts = initialProducts.filter(product => product.category === selectedCategory);
    }

    // Filtrar por rango de precio si hay uno seleccionado
    if (selectedPrice) {
        initialProducts = initialProducts.filter(product => product.price <= selectedPrice);
    }

    // Filtrar por materiales si hay uno o más seleccionados
    if (selectedMaterials.length > 0) {
        initialProducts = initialProducts.filter(product =>
            selectedMaterials.every(material => product.materials.includes(material))
        );
    }

    filteredProducts = initialProducts; // Almacena los productos filtrados
    currentPage = 1; // Reiniciar a la primera página
    renderProducts(); // Renderiza los productos filtrados
}

/******************Filtro por categorías************************************/
// Obtiene los enlaces de las categorías
const categoryLinks = document.querySelectorAll('.filter-category a');

categoryLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevenir la acción predeterminada del enlace

        // Remueve la clase 'selected' de todos los enlaces
        categoryLinks.forEach(link => link.classList.remove('selected'));

        // Agrega la clase 'selected' al enlace clickeado
        this.classList.add('selected');

        // Obtiene la categoría seleccionada
        selectedCategory = link.textContent.trim().toLowerCase();

        // Reinicia el filtro de precio y material
        selectedPrice = null;
        selectedMaterials = [];
        priceRange.value = priceRange.max; // Restablecer el control de rango de precios
        priceValue.textContent = `$0 - $${priceRange.max}`; // Actualizar el texto del precio

        // Aplica el filtro solo por categoría
        applyFilters();
    });
});

/******************Filtro por precios***************************************/
// Rango de precios y botón de aplicar filtro
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
// Checkbox de materiales
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
renderProducts();
