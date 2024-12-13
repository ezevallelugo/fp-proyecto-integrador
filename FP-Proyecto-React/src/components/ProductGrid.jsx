import React from 'react';

const productos = [
  { 
    nombre: "Remera Detalles de Cinta", 
    precio: 3500, 
    descuento: null, 
    calificacion: 4.5, 
    imagen: "/assets/home/product-placeholder-0.png"
  },
  { 
    nombre: "Jean Ajustado", 
    precio: 7200, 
    precioViejo: 9000, 
    descuento: 20, 
    calificacion: 3.5, 
    imagen: "/assets/home/product-placeholder-1.png"
  },
  { 
    nombre: "Camisa a Cuadros", 
    precio: 8000, 
    descuento: null, 
    calificacion: 4.5, 
    imagen: "/assets/home/product-placeholder-2.png"
  },
  { 
    nombre: "Remera con Rayas", 
    precio: 2800, 
    precioViejo: 4000, 
    descuento: 30, 
    calificacion: 4.5, 
    imagen: "/assets/home/product-placeholder-3.png"
  },
  { 
    nombre: "Camisa Rayas Verticales", 
    precio: 5600, 
    precioViejo: 7000, 
    descuento: 20, 
    calificacion: 5, 
    imagen: "/assets/home/product-placeholder-4.png"
  },
  { 
    nombre: "Courage Remera Gráfica", 
    precio: 4500, 
    descuento: null, 
    calificacion: 4, 
    imagen: "/assets/home/product-placeholder-5.png"
  },
  { 
    nombre: "Bermuda Suelta", 
    precio: 7000, 
    descuento: null, 
    calificacion: 3, 
    imagen: "/assets/home/product-placeholder-6.png"
  },
  { 
    nombre: "Jean Ajustado Desgastado", 
    precio: 10000, 
    descuento: null, 
    calificacion: 4.5, 
    imagen: "/assets/home/product-placeholder-7.png"
  }
];

function generarEstrellas(calificacion) {
  let estrellas = '';
  for (let i = 0; i < 5; i++) {
    estrellas += i < calificacion ? '★' : '☆';
  }
  return estrellas;
}

const ProductCard = ({ producto }) => (
  <div className="product-card">
    <img src={producto.imagen} alt={producto.nombre} />
    {producto.descuento && <span className="discount-home">-{producto.descuento}%</span>}
    <div className="product-name">{producto.nombre}</div>
    <div className="rating">
      <span className="stars">{generarEstrellas(producto.calificacion)}</span>
      <span>{producto.calificacion}/5</span>
    </div>
    <div className="price-container">
      <div className="price">${producto.precio}</div>
      {producto.precioViejo && <div className="old-price">${producto.precioViejo}</div>}
    </div>
  </div>
);

const ProductGrid = () => (
  <div id="product-grid-home" className='grid-home'>
    {productos.map((producto, index) => (
      <ProductCard key={index} producto={producto} />
    ))}
  </div>
);

export default ProductGrid;
