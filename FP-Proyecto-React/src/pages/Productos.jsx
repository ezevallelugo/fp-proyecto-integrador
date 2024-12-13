import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// Import your images (adjust paths as needed)
import remera2 from '/assets/product/remera-2.png';
import remera3 from '/assets/product/remera-3.png';
import remera4 from '/assets/product/remera-4.png';
import remera1 from '/assets/product/remera-1.png';
import remeraVerde from '/assets/product/remera-verde.png';
import maletin from '/assets/product/maletin.png';
import remeraAzul from '/assets/product/remera-azul.png';
import zapatillas from '/assets/product/zapatillas.png';

// Mock product database (replace with actual API or database)
const PRODUCT_DATABASE = {
    '1': {
        id: 'remera-vent-verde',
        name: 'Remera Vent Verde',
        description: 'La camiseta Vent es un básico de manga corta fabricado con una mezcla de algodón orgánico y reciclado.',
        currentPrice: 60000,
        originalPrice: 80000,
        discount: '-20%',
        colors: ['brown', 'green', 'blue'],
        sizes: ['S', 'M', 'L', 'XL'],
        images: [remera1, remera2, remera3, remera4],
        thumbnails: [remera2, remera3, remera4],
        details: [
            'Tejido principal: 50% Algodón reciclado / 50% Algodón orgánico',
            'Fit regular',
            'Cuello redondo',
            'Manga corta',
            'Logo ECOALF en la manga',
            'Vegano'
        ]
    }
    // Add more products here
};

export default function Productos() {
    // Extract product ID from URL
    const params = useParams();
    const id = params.id || '';

    // State for product data
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    // Related products (could also be fetched dynamically)
    const relatedProducts = [
        { 
            image: remeraVerde, 
            name: 'Remera Vent Wash', 
            currentPrice: '$40.000', 
            originalPrice: '$52.000', 
            discount: '-20%' 
        },
        { 
            image: maletin, 
            name: 'Maletín camión', 
            currentPrice: '$80.000' 
        },
        { 
            image: remeraAzul, 
            name: 'Remera Melti Azul Marino', 
            currentPrice: '$50.000' 
        },
        { 
            image: zapatillas, 
            name: 'Sneaker Black Woman', 
            currentPrice: '$70.000', 
            originalPrice: '$100.000', 
            discount: '-30%' 
        }
    ];

    // Fetch product data when component mounts or ID changes
    useEffect(() => {
        // Default to first product if no ID is provided
        const productId = id || 'remera-vent-verde';
        
        // Simulate API call (replace with actual API fetch)
        const fetchedProduct = PRODUCT_DATABASE[productId];

        if (fetchedProduct) {
            setProduct(fetchedProduct);
            setMainImage(fetchedProduct.images[0]);
            setSelectedColor(fetchedProduct.colors[0]);
            setSelectedSize(fetchedProduct.sizes[0]);
        } else {
            // Handle product not found
            console.error('Product not found');
            setProduct(null);
        }
    }, [id]);

    // If no product is found, show a loading or error state
    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    const handleImageChange = (newImage) => {
        setMainImage(newImage);
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        if (quantity < 5) {
            setQuantity(quantity + 1);
        }
    };

    return (
        <div className="font-montserrat text-gray-700 p-0 m-0">
            {/* Product Detail Section */}
            <section className="block w-[90%] sm-658:flex mx-auto gap-[2rem] mb-5">
                {/* Product Images */}
                <div className="flex sm-658:w-1/2">
                    <div className="flex flex-col mr-2 w-[7rem]">
                        {product.thumbnails.map((img, index) => (
                            <img 
                                key={index} 
                                src={img} 
                                alt={`Thumbnail ${index + 1}`} 
                                className="h-auto mb-2.5 cursor-pointer"
                                onClick={() => handleImageChange(img)}
                            />
                        ))}
                    </div>
                    <div className="w-full">
                        <img 
                            src={mainImage} 
                            alt="Main Product" 
                            className="h-auto w-full object-contain"
                        />
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col sm-658:w-1/2">
                    <h1 className="text-3xl mb-2.5">{product.name}</h1>
                    
                    <div className="flex items-center gap-2.5 mb-3.5">
                        <span className="text-2xl font-bold text-gray-800">
                            ${product.currentPrice.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                            <>
                                <span className="text-base line-through text-gray-500">
                                    ${product.originalPrice.toLocaleString()}
                                </span>
                                {product.discount && (
                                    <span className="text-base text-red-500 bg-red-100 rounded-full px-2">
                                        {product.discount}
                                    </span>
                                )}
                            </>
                        )}
                    </div>

                    <p className="mb-5">{product.description}</p>

                    <div className="flex flex-col gap-5">
                        <div>
                            <span>Color</span>
                            <div className="flex gap-2.5 mt-2">
                                {product.colors.map((color) => (
                                    <div 
                                        key={color}
                                        className={`w-10 h-10 rounded-full cursor-pointer 
                                            ${color === 'brown' ? 'bg-[#6F4E37]' : 
                                               color === 'green' ? 'bg-[#2E4D4B]' : 
                                               'bg-[#3A4C67]'}
                                            ${selectedColor === color ? 'border-2 border-black' : ''}`}
                                        onClick={() => handleColorSelect(color)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <span>Talle</span>
                            <div className="flex gap-2.5 mt-2">
                                {product.sizes.map((size) => (
                                    <div 
                                        key={size}
                                        className={`px-5 py-2.5 rounded-full cursor-pointer 
                                            ${selectedSize === size ? 'bg-black text-white' : 'bg-gray-100'}`}
                                        onClick={() => handleSizeSelect(size)}
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-2.5">
                            <button 
                                className="bg-gray-100 p-2.5 rounded-full"
                                onClick={decrementQuantity}
                            >
                                -
                            </button>
                            <div className="text-lg mx-2.5">{quantity}</div>
                            <button 
                                className="bg-gray-100 p-2.5 rounded-full"
                                onClick={incrementQuantity}
                            >
                                +
                            </button>
                            <Link to="/cart" className="bg-black text-white px-10 py-3.5 rounded-full ml-2.5">
                                    Añadir al carrito
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Section */}
            <section className="flex flex-col items-center justify-center text-center">
                <div className="flex justify-center mb-5 flex-wrap gap-[1rem] sm-658:gap-0">
                    {['description', 'details', 'shipping'].map((tab) => (
                        <button 
                            key={tab}
                            className={`px-5 py-2.5 mx-2.5 rounded-md 
                                ${activeTab === tab ? 'bg-green-800 text-white font-bold' : 'bg-gray-100'}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab === 'description' ? 'Descripción' : 
                             tab === 'details' ? 'Detalles' : 
                             'Envíos'}
                        </button>
                    ))}
                </div>

                <div className="max-w-2xl w-full px-5">
                    {activeTab === 'description' && (
                        <p className="text-left">{product.description}</p>
                    )}
                    {activeTab === 'details' && (
                        <ul className="text-left list-disc pl-5">
                            {product.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    )}
                    {activeTab === 'shipping' && (
                        <p className="text-left">
                            Método de envío: Envío gratuito en compras superiores a $50.00. El tiempo estimado de entrega es de 5 a 7 días hábiles.
                        </p>
                    )}
                </div>
            </section>

            {/* Reviews Section */}
            <section className="my-8">
                <h2 className="text-3xl font-bold text-center mb-5">Opiniones</h2>
                <div className="w-4/5 mx-auto">
                    <textarea 
                        placeholder="Deja acá tu opinión..." 
                        className="w-full h-24 p-2.5 border rounded-md mb-2.5 resize-none"
                    />
                    <button className="bg-black text-white px-5 py-2.5 rounded-md">
                        Comentar
                    </button>
                </div>

                <div className="w-4/5 mx-auto mt-5 p-2.5 border rounded-md">
                    <p className="text-yellow-500">★★★★★</p>
                    <p className="font-bold">Pablo T.</p>
                    <p>"Siempre busco maneras de consumir de forma más sostenible, y me encanta saber que estoy eligiendo moda responsable sin sacrificar estilo. Ecodono no solo me permite encontrar prendas únicas, cada compra contribuye a un futuro más verde."</p>
                </div>
            </section>

            {/* Related Products Section */}
            <h2 className="text-3xl font-bold text-center mb-5">También te podría interesar</h2>
            <section className="flex flex-wrap justify-center gap-5 p-5">
                {relatedProducts.map((product, index) => (
                    <div 
                        key={index} 
                        className="w-48 p-2.5 border rounded-md text-center shadow-md"
                    >
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-auto rounded-md"
                        />
                        <p className="mt-2.5">{product.name}</p>
                        <div className="flex justify-center gap-2.5 mt-2.5">
                            <span className="font-bold">{product.currentPrice}</span>
                            {product.originalPrice && (
                                <span className="line-through text-gray-500">
                                    {product.originalPrice}
                                </span>
                            )}
                            {product.discount && (
                                <span className="text-red-500 bg-red-100 rounded-full px-2">
                                    {product.discount}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}