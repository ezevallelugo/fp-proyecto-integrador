import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const topBarButton = document.querySelector('.top-bar button');
    const topBar = document.querySelector('.top-bar');

    const handleClick = () => {
      topBar.style.display = 'none';
    };

    if (topBarButton) {
      topBarButton.addEventListener('click', handleClick);
    }

    const handleResize = () => {
      setShowMobileMenu(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (topBarButton) {
        topBarButton.removeEventListener('click', handleClick);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (location.pathname === '/get-started') {
    return null; // Don't render the footer at all on the /get-started page
  }

  return (

    <header className={location.pathname === '/about' ? 'bg-[#e3f2fd] p-5' : ''}>
      {/* Top Bar */}
      <div className="top-bar flex justify-between items-center bg-[#006C2E] text-white px-4 h-[55px]">
        <div className="w-full text-center">
          <p className="text-sm inline">Cuidemos nuestro único hogar y a nuestras personas</p>
        </div>
        <button className="text-xl bg-transparent border-none cursor-pointer p-0">&times;</button>
      </div>

      {/* Main Navigation */}
      <nav>
        <div className="flex justify-between items-center p-4 bg-white">
          <div className="flex w-full gap-5 items-center">
            {/* Logo */}
            <div className="h-10 md:h-6">
              <img
                src="/assets/navegation/ecodono-logo.png"
                alt="ECODONO Logo"
                className="h-full"
              />
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex lg:flex-row lg:gap-5 list-none m-0 p-0">
              <li><Link to="/home" className="no-underline text-black hover:text-[#F1702A] text-[15px] transition-colors whitespace-nowrap">Home</Link></li>
              <li><Link to="/catalog" className="no-underline text-black hover:text-[#F1702A] text-[15px] transition-colors whitespace-nowrap">Productos</Link></li>
              <li><a href="#" className="no-underline text-black hover:text-[#F1702A] text-[15px] transition-colors whitespace-nowrap">Servicios</a></li>
              <li><Link to="/about" className="no-underline text-black hover:text-[#F1702A] text-[15px] transition-colors whitespace-nowrap">About us</Link></li>
            </ul>

            {/* Search Bar */}
            <div className="hidden sm-450:flex mr-5 flex items-center bg-[#eafde6] rounded-full px-3 py-1 w-full max-w-[300px]">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="flex-grow border-none bg-transparent outline-none p-1 md:w-26"
              />
              <button className="bg-transparent border-none cursor-pointer p-0">
                <img src="/assets/navegation/lupa.png" alt="Buscar" className="h-5" />
              </button>
            </div>

          </div>

          <div className="flex">
            {/* Desktop Buttons */}
            <div className="hidden md:flex md:flex-nowrap md:justify-end md:gap-3 md:items-center">
              <Link
                to="/get-started"
                className="bg-[#ff6f3d] px-5 py-2 rounded-full text-white cursor-pointer text-sm border border-black whitespace-nowrap"
                style={{ border: '1px solid black' }}
              >
                Iniciar Sesión
              </Link>
              <Link to="/cart">
                <img
                  src="/assets/navegation/carrito.svg"
                  alt="Carrito"
                  className="w-9"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div
              className="text-3xl cursor-pointer pl-4 pt-1 lg:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              ☰
            </div>
          </div>

        </div>

        {/* mobile Search Bar */}
        <div className={`sm-450:hidden flex items-center bg-[#eafde6] rounded-full px-3 py-1 w-auto mx-3 mb-3 ${location.pathname === '/about' ? 'mt-5' : ''}`}>
          <input
            type="text"
            placeholder="Buscar productos..."
            className="flex-grow border-none bg-transparent outline-none p-1 md:w-26"
          />
          <button className="bg-transparent border-none cursor-pointer p-0">
            <img src="/assets/navegation/lupa.png" alt="Buscar" className="h-5" />
          </button>
        </div>

      </nav>

      {/* Mobile Menu */}
      <ul className={`list-none m-0 p-0 w-full ${showMobileMenu ? 'flex flex-col items-end' : 'hidden'}`}>
        <li className="my-2 pr-4"><Link to="/home" className="no-underline text-black hover:text-[#F1702A] text-base">Home</Link></li>
        <li className="my-2 pr-4"><Link to="/catalogo" className="no-underline text-black hover:text-[#F1702A] text-base">Productos</Link></li>
        <li className="my-2 pr-4"><a href="#" className="no-underline text-black hover:text-[#F1702A] text-base">Servicios</a></li>
        <li className="my-2 pr-4"><Link to="/about" className="no-underline text-black hover:text-[#F1702A] text-base">About us</Link></li>
        <li className="md:hidden my-2 pr-4">
          <Link
            to="/get-started"
            className="bg-[#ff6f3d] px-5 py-2 rounded-full text-white cursor-pointer text-sm border border-black whitespace-nowrap"
            style={{ border: '1px solid black' }}
          >
            Iniciar Sesión
          </Link>
        </li>
        <li className="md:hidden my-2 pr-[20px]">
          <Link to="/cart">
            <img
              src="/assets/navegation/carrito.svg"
              alt="Carrito"
              className="w-9"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

