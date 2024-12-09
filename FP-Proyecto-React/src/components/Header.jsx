import React, { useState, useEffect } from 'react';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const topBarButton = document.querySelector('.top-bar button');
    const topBar = document.querySelector('.top-bar');

    const handleClick = () => {
      topBar.style.display = 'none';
    };

    topBarButton.addEventListener('click', handleClick);

    const handleResize = () => {
      setShowMobileMenu(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      topBarButton.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
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

          <div className='flex w-full gap-5 items-center'>

            {/* Logo */}
            <div className="h-10 md:h-6">
              <img
                src="src/assets/navegation/ecodono-logo.png"
                alt="ECODONO Logo"
                className="h-full"
              />
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex lg:flex-row lg:gap-5 list-none m-0 p-0">
              <li><a href="index.html" className="no-underline text-black hover:text-[#F1702A] text-[15px] transition-colors whitespace-nowrap">Home</a></li>
              <li><a href="catalogo.html" className="no-underline text-black hover:text-[#F1702A] text-[15px] transition-colors whitespace-nowrap">Productos</a></li>
              <li><a href="#" className="no-underline text-black hover:text-[#F1702A] text-[15px] transition-colors whitespace-nowrap">Servicios</a></li>
              <li><a href="#" className="no-underline text-black hover:text-[#F1702A] text-[15px] transition-colors whitespace-nowrap">About us</a></li>
            </ul>

            {/* Search Bar */}
            <div className="hidden sm-450:flex mr-5 flex items-center bg-[#eafde6] rounded-full px-3 py-1 w-full max-w-[300px]">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="flex-grow border-none bg-transparent outline-none p-1 md:w-26"
              />
              <button className="bg-transparent border-none cursor-pointer p-0">
                <img src="src/assets/navegation/lupa.png" alt="Buscar" className="h-5" />
              </button>
            </div>

          </div>

          <div className='flex'>
            {/* Desktop Buttons */}
            <div className="hidden md:flex md:flex-nowrap md:justify-end md:gap-3 md:items-center">
              <button className="bg-[#fb923c] px-5 py-2 rounded-full text-white cursor-pointer text-sm border border-black">
                Registrarse
              </button>
              <button className="bg-[#047857] px-5 py-2 rounded-full text-white cursor-pointer text-sm whitespace-nowrap border border-black">
                Iniciar Sesión
              </button>
              <img
                src="src/assets/navegation/carrito.svg"
                alt="Carrito"
                className="h-9 cursor-pointer"
              />
            </div>

            {/* Mobile Menu Button */}
            <div
              className="text-3xl cursor-pointer pl-4 pt-1 lg:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}>
              ☰
            </div>
          </div>

        </div>

        {/* mobile Search Bar */}
        <div className="sm-450:hidden flex items-center bg-[#eafde6] rounded-full px-3 py-1 w-auto mx-3 mb-2">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="flex-grow border-none bg-transparent outline-none p-1 md:w-26"
          />
          <button className="bg-transparent border-none cursor-pointer p-0">
            <img src="src/assets/navegation/lupa.png" alt="Buscar" className="h-5" />
          </button>
        </div>

      </nav>

      {/* Mobile Menu */}
      <ul className={`list-none m-0 p-0 w-full ${showMobileMenu ? 'flex flex-col items-end' : 'hidden'}`}>
        <li className="my-2 pr-4"><a href="index.html" className="no-underline text-black hover:text-[#F1702A] text-base">Home</a></li>
        <li className="my-2 pr-4"><a href="catalogo.html" className="no-underline text-black hover:text-[#F1702A] text-base">Productos</a></li>
        <li className="my-2 pr-4"><a href="#" className="no-underline text-black hover:text-[#F1702A] text-base">Servicios</a></li>
        <li className="my-2 pr-4"><a href="#" className="no-underline text-black hover:text-[#F1702A] text-base">About us</a></li>
        <li className="md:hidden my-2 pr-4">
          <button className="w-full bg-[#fb923c] px-5 py-2 rounded-full text-white cursor-pointer text-sm">
            Registrarse
          </button>
        </li>
        <li className="md:hidden my-2 pr-4">
          <button className="w-full bg-[#047857] px-5 py-2 rounded-full text-white cursor-pointer text-sm">
            Iniciar Sesión
          </button>
        </li>
        <li className="md:hidden my-2 pr-[20px]">
          <img
            src="src/assets/navegation/carrito.svg"
            alt="Carrito"
            className="w-9"
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;

