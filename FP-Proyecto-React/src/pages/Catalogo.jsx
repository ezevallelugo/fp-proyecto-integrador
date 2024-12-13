import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Product data
const products = [
    { id: 1, name: "Remera Vent Verde", price: 15000, originalPrice: 20000, img: "/assets/catalog/remera-1.png", link: "producto.html", category: "remeras", materials: ["algodon"] },
    { id: 2, name: "Bolso CICA Neumático negro", price: 35000, img: "/assets/catalog/bolso.png", link: "producto.html", category: "accesorios", materials: ["camaras"] },
    { id: 3, name: "Jerséi de lana reciclada", price: 25000, originalPrice: 32000, img: "/assets/catalog/jersei.png", link: "producto.html", category: "remeras", materials: ["lana"] },
    { id: 4, name: "Sneaker Spandau Navy Man", price: 30000, img: "/assets/catalog/zapatillas-1.png", link: "producto.html", category: "calzado", materials: ["poliester"] },
    { id: 5, name: "Pantalones Cargo Ethica Azules", price: 27000, originalPrice: 33000, img: "/assets/catalog/pantalones.png", link: "producto.html", category: "pantalones", materials: ["algodon", "poliester"] },
    { id: 6, name: "Remera azul", price: 15000, img: "/assets/catalog/remera-azul.png", link: "producto.html", category: "remeras", materials: ["algodon"] },
    { id: 7, name: "Camiseta Francisca blanca", price: 15000, originalPrice: 19000, img: "/assets/catalog/musculosa.png", link: "producto.html", category: "remeras", materials: ["algodon"] },
    { id: 8, name: "Sneaker Corsocomo Woman", price: 30000, originalPrice: 38000, img: "/assets/catalog/zapatillas-2.png", link: "producto.html", category: "calzado", materials: ["poliester"] },
    { id: 9, name: "Bandolera Frodo L", price: 30000, img: "/assets/catalog/bandolera.png", link: "producto.html", category: "accesorios", materials: ["camaras"] },
    { id: 10, name: "Pantalones cortos Beige", price: 20000, originalPrice: 25000, img: "/assets/catalog/bermuda.png", link: "producto.html", category: "pantalones", materials: ["algodon", "lana"] },
];

const ITEMS_PER_PAGE = 9;

export default function Catalogo() {
    // State management
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedMaterials, setSelectedMaterials] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
    const [currentPage, setCurrentPage] = useState(1);

    // Categories for filtering
    const categories = [
        { name: "Todos", value: "todos" },
        { name: "Remeras", value: "remeras" },
        { name: "Pantalones", value: "pantalones" },
        { name: "Calzado", value: "calzado" },
        { name: "Accesorios", value: "accesorios" }
    ];

    // Materials for filtering
    const materials = [
        { id: "algodon", label: "Algodón reciclado" },
        { id: "lana", label: "Lana reciclada" },
        { id: "poliester", label: "Poliéster reciclado" },
        { id: "camaras", label: "Cámaras de neumático" }
    ];

    // Filtering logic
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            // Category filter
            const categoryMatch = !selectedCategory || product.category === selectedCategory || selectedCategory === "todos";

            // Price range filter
            const priceMatch = product.price >= priceRange.min && product.price <= priceRange.max;

            // Materials filter
            const materialMatch = selectedMaterials.length === 0 ||
                selectedMaterials.every(material => product.materials.includes(material));

            return categoryMatch && priceMatch && materialMatch;
        });
    }, [selectedCategory, selectedMaterials, priceRange]);

    // Pagination logic
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const paginatedProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredProducts, currentPage]);

    // Event Handlers
    const handleCategorySelect = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category);
        setCurrentPage(1);
    };

    const handleMaterialToggle = (material) => {
        setSelectedMaterials(prev =>
            prev.includes(material)
                ? prev.filter(m => m !== material)
                : [...prev, material]
        );
        setCurrentPage(1);
    };

    const handlePriceFilter = (min, max) => {
        setPriceRange({
            min: min || 0,
            max: max || Infinity
        });
        setCurrentPage(1);
    };

    return (
        <div className="justify-items-center md:flex bg-gray-100 p-5">
            {/* Sidebar Filters */}
            <aside className="mb-5 md:mb-0 w-[90%] md:w-1/4 bg-white p-5 rounded-lg shadow-md md:mr-5">
                <h3 className="text-xl font-bold mb-4">Filtros</h3>

                {/* Category Filters */}
                <div className="mb-6">
                    <h4 className="font-semibold mb-3">Categorías</h4>
                    <ul className="list-none">
                        {categories.map((cat) => (
                            <li className="mb-2" key={cat.value}>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="radio"  // Change from checkbox to radio
                                        name="category"  // Add name to group the radio buttons
                                        className="mr-2 h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                                        checked={selectedCategory === cat.value}
                                        onChange={() => handleCategorySelect(cat.value)}
                                    />
                                    <span className="text-gray-700">{cat.name}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Material Filters */}
                <div className="mb-6">
                    <h4 className="font-semibold mb-3">Material</h4>
                    <ul className="space-y-2 list-none">
                        {materials.map((material) => (
                            <li key={material.id}>
                                <button
                                    onClick={() => handleMaterialToggle(material.id)}
                                    className={`w-full text-left text-base p-2 rounded-full transition-colors duration-300 ${selectedMaterials.includes(material.id)
                                        ? 'bg-black text-white'
                                        : 'hover:bg-gray-200 text-gray-700'
                                        }`}
                                >
                                    {material.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Price Filter */}
                <div>
                    <h4 className="font-semibold mb-3">Precio</h4>
                    <div className="flex space-x-2 mb-3">
                        <input
                            type="number"
                            placeholder="Mínimo"
                            className="w-1/2 p-2 border rounded focus:ring-1 focus:ring-black focus:border-black"
                            onChange={(e) => handlePriceFilter(
                                Number(e.target.value),
                                priceRange.max === Infinity ? undefined : priceRange.max
                            )}
                        />
                        <input
                            type="number"
                            placeholder="Máximo"
                            className="w-1/2 p-2 border rounded focus:ring-1 focus:ring-black focus:border-black"
                            onChange={(e) => handlePriceFilter(
                                priceRange.min,
                                Number(e.target.value)
                            )}
                        />
                    </div>
                </div>
            </aside>

            {/* Product Grid */}
            <div className=" md:w-3/4">
                {/* Products */}
                <div className="grid sm-690:grid-cols-2 md:grid-cols-3 gap-5">
                    {paginatedProducts.length > 0 ? (
                        paginatedProducts.map((product, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all group"
                            >
                                <a href={`/products/${product.id}`} className="block">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-64 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform"
                                    />
                                    <h2 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h2>
                                </a>
                                <div className="flex items-center justify-between flex-wrap">
                                    <span className="font-bold text-lg text-gray-900">${product.price.toFixed(2)}</span>
                                    {product.originalPrice && (
                                        <div className="flex items-center flex-wrap">
                                            <span className="line-through text-red-500 mr-2">
                                                ${product.originalPrice.toFixed(2)}
                                            </span>
                                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                                                {((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0)}%
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-3 text-center text-gray-500">
                            No hay resultados
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-8 space-x-4">
                    <button
                        onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                        disabled={currentPage === 1}
                        className="bg-black text-white p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
                    >
                        <ChevronLeft style={{ position: 'relative', top: '4px' }} />
                    </button>

                    <div className="flex space-x-2">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`w-8 h-8 rounded transition-colors ${currentPage === i + 1
                                    ? 'bg-black text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                <span className="relative">{i + 1}</span>
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
                        disabled={currentPage === totalPages}
                        className="bg-black text-white p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
                    >
                        <ChevronRight style={{ position: 'relative', top: '4px' }} />
                    </button>
                </div>
            </div>
        </div>
    );
};
