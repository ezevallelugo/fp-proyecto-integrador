import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const topBarButton = document.querySelector('.top-bar button');
    const topBar = document.querySelector('.top-bar');

    const handleClick = () => {
      topBar.style.display = 'none';
    };

    topBarButton.addEventListener('click', handleClick);

    return () => {
      topBarButton.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <header>
      <div className="top-bar">
        <div className="top-bar-text">
          <p>Cuidemos nuestro único hogar y a nuestras personas</p>
        </div>
        <button>&times;</button>
      </div>
      <nav className="navbar">
        <div className="logo">
          <img src="src/assets/navegation/ecodono-logo.png" alt="ECODONO Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="catalogo.html">Productos</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">About us</a></li>
        </ul>
        <div className="search-container">
          <input type="text" placeholder="Buscar productos..." />
          <button><img src="src/assets/navegation/lupa.png" alt="Buscar" /></button>
        </div>
        <div className="buttons">
          <button className="register">Registrarse</button>
          <button className="login">Iniciar Sesión</button>
          <img src="src/assets/navegation/carrito.svg" alt="Carrito" />
        </div>
        <div className="menu-icon">☰</div>
      </nav>
      <ul className="menu-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="catalogo.html">Productos</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">About us</a></li>
        <li><button className="register">Registrarse</button></li>
        <li><button className="login">Iniciar Sesión</button></li>
        <li><img src="src/assets/navegation/carrito.svg" alt="Carrito" className="cart-icon" /></li>
      </ul>
    </header>
  );
};

export default Header;

