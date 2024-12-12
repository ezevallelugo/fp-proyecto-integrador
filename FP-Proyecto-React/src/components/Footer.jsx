import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  
  if (location.pathname === '/get-started') {
    return null; // Don't render the footer at all on the /get-started page
  }

  return (
    <footer>
      <div className="footer">
        <div className="newsletter">
          <h2>MANTENTE INFORMADO POR NUESTRO NEWSLETTER</h2>
          <div className="newsletter-form">
            <input type="email" placeholder="Ingrese su correo" />
            <button>Suscribirte al newsletter</button>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/src/assets/footer/ecodono-logo.png" alt="ECODONO Logo" />
            <p>Reutilizamos productos para darles un nuevo uso y ofrecemos servicios para aportar un cuidado especial a nuestro planeta.</p>
            <div className="social-icons">
              <a href="#"><img src="/src/assets/footer/twitter-svgrepo-com.svg" alt="Twitter" /></a>
              <a href="#"><img src="/src/assets/footer/facebook-svgrepo-com.svg" alt="Facebook" /></a>
              <a href="#"><img src="/src/assets/footer/instagram-svgrepo-com.svg" alt="Instagram" /></a>
              <a href="#"><img src="/src/assets/footer/github-outline-svgrepo-com.svg" alt="GitHub" /></a>
            </div>
          </div>
          <div className="footer-links">
            <div className="compania">
              <h3>COMPANIA</h3>
              <ul>
                <li><a href="#">Acerca de nosotros</a></li>
                <li><a href="#">Trabajos</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Donaciones</a></li>
              </ul>
            </div>
            <div className="ayuda">
              <h3>AYUDA</h3>
              <ul>
                <li><a href="#">Atención al cliente</a></li>
                <li><a href="#">Detalles del envío</a></li>
                <li><a href="#">Términos y condiciones</a></li>
                <li><a href="#">Política de privacidad</a></li>
              </ul>
            </div>
            <div className="questions">
              <h3>FAQ</h3>
              <ul>
                <li><a href="#">Cuenta</a></li>
                <li><a href="#">Manejo de envíos</a></li>
                <li><a href="#">Órdenes</a></li>
                <li><a href="#">Pago</a></li>
              </ul>
            </div>
          </div>
          <div className="payment-methods-small">
            <img src="/src/assets/footer/visa-svgrepo-com.svg" alt="Visa" />
            <img src="/src/assets/footer/mastercard-full-svgrepo-com.svg" alt="MasterCard" />
            <img src="/src/assets/footer/paypal-svgrepo-com.svg" alt="PayPal" />
            <img src="/src/assets/footer/apple-pay-svgrepo-com.svg" alt="Apple Pay" />
            <img src="/src/assets/footer/google-pay-svgrepo-com.svg" alt="Google Pay" />
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 ECODONO, Todos los derechos reservados</p>
          <div className="payment-methods">
            <img src="/src/assets/footer/visa-svgrepo-com.svg" alt="Visa" />
            <img src="/src/assets/footer/mastercard-full-svgrepo-com.svg" alt="MasterCard" />
            <img src="/src/assets/footer/paypal-svgrepo-com.svg" alt="PayPal" />
            <img src="/src/assets/footer/apple-pay-svgrepo-com.svg" alt="Apple Pay" />
            <img src="/src/assets/footer/google-pay-svgrepo-com.svg" alt="Google Pay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;