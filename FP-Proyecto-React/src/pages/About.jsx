import React, { useState, useEffect, useRef } from 'react';
import "../styles/about.css";

export default function About() {
    // State for managing counter animations
    const [statsStarted, setStatsStarted] = useState(false);
    
    // Refs for tracking elements
    const statSectionRef = useRef(null);
    const fadeInElementsRef = useRef([]);

    // Animation functions
    const isInViewport = (element) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= windowHeight && rect.bottom >= 0;
    };

    const animateStats = (start, end, duration, isPercentage = false) => {
        const startTime = performance.now();
        const range = end - start;

        const updateCounter = (currentTime) => {
            const progress = currentTime - startTime;
            const increment = Math.min((progress / duration) * range, range);
            
            // Update the specific stat element
            const statElement = document.getElementById(`stat${end}`);
            if (statElement) {
                statElement.innerText = Math.floor(start + increment).toLocaleString() + 
                    (isPercentage ? '%' : '');
            }

            if (progress < duration) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    };

    // Scroll and viewport handling
    const handleScroll = () => {
        // Fade in elements
        if (fadeInElementsRef.current) {
            fadeInElementsRef.current.forEach(elem => {
                if (isInViewport(elem)) {
                    elem.classList.add('show');
                }
            });
        }

        // Start stats animation
        if (statSectionRef.current && !statsStarted && isInViewport(statSectionRef.current)) {
            animateStats(0, 150000, 2000, false);     // Neumáticos reciclados
            animateStats(0, 4500000000, 2000, false); // Litros de agua
            animateStats(0, 20000000, 2000, false);   // Residuos evitados
            animateStats(0, 70, 3000, true);          // CO2 reducido
            setStatsStarted(true);
        }
    };

    // Effect for adding scroll event listener
    useEffect(() => {
        // Collect fade-in elements
        fadeInElementsRef.current = document.querySelectorAll('.fade-in');

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="container-first">
                <div className="first-box fade-in">
                    <div className="logo-first">
                        <img src="/assets/about/logo-completo.png" alt="Logo Ecodono"/>
                    </div>
                    <h1>¿QUIÉNES SOMOS?</h1>
                    <p>Somos una plataforma dedicada a impulsar la economía circular, ofreciendo un espacio donde las personas pueden <strong>comprar, vender, reciclar</strong> y dar nueva vida a productos de segunda mano. Creemos en el poder de la <strong>reutilización</strong> y el <strong>upcycling</strong> para reducir el impacto ambiental y crear un cambio positivo.</p>
                    <a href="#history" className="btn-cta">Explora más</a>
                </div>
            </div>

            <section className="features">
                <div className="feature fade-in">
                    <img src="/assets/about/mundo.png" alt="Reciclaje"/>
                    <p>Promovemos el reciclaje y reutilización para reducir el impacto ambiental.</p>
                </div>
                <div className="feature fade-in">
                    <img src="/assets/about/simbolo.png" alt="Conectar personas"/>
                    <p>Conectando personas para un futuro sostenible.</p>
                </div>
                <div className="feature fade-in">
                    <img src="/assets/about/bote.png" alt="Soluciones sustentables"/>
                    <p>Inspirando soluciones sustentables para un mundo mejor.</p>
                </div>
            </section>

            <section className="history fade-in">
                <h2 id="history">NUESTRA HISTORIA</h2>
                <p>
                    Todo comenzó con una vieja cubierta de auto. Al principio, parecía un residuo más destinado al olvido, una pieza más en el rompecabezas de la contaminación. Pero nosotros vimos su potencial. De esa cubierta, surgió un par de zapatillas que no solo eran funcionales y cómodas, sino que también contaban una historia: la historia de lo que se puede lograr con imaginación y compromiso.
                    Nos dimos cuenta de que en cada objeto que otros consideraban basura, había una oportunidad esperando ser aprovechada. Así nació nuestra plataforma, con la idea de que cada residuo, sin importar cuán pequeño o grande, puede tener un nuevo propósito. No solo queríamos vender productos, sino crear una comunidad que compartiera esta visión. Desde ese primer par de zapatillas recicladas, nos propusimos demostrar que lo que consideramos "desechos" en realidad puede ser la base de un futuro más sostenible. Hoy, nuestra plataforma conecta a personas que desean hacer del mundo un lugar mejor, un intercambio a la vez.
                </p>
            </section>

            <section className="services fade-in">
                <h2>¿QUÉ OFRECEMOS?</h2>
                <div className="service">
                    <img src="/assets/about/economia.png" alt="Economía circular real"/>
                    <h3>Economía circular <br /> real</h3>
                    <p>Integramos reciclaje y upcycling, transformando productos en desuso en algo nuevo.</p>
                </div>
                <div className="service">
                    <img src="/assets/about/reduccion.png" alt="Reducción del desperdicio"/>
                    <h3>Reducción del desperdicio</h3>
                    <p>Reciclamos materiales como plástico, goma y textiles para crear productos útiles.</p>
                </div>
                <div className="service">
                    <img src="/assets/about/comunidad.png" alt="Comunidad comprometida"/>
                    <h3>Comunidad comprometida</h3>
                    <p>Fomentamos un espacio donde las personas pueden vender, donar o comprar productos.</p>
                </div>
            </section>

            <section className="team fade-in">
                <h2>EL EQUIPO DETRÁS DE ESTE PROYECTO</h2>
                <div className="team-members">
                    {['Ezequiel Vallejos', 'Aldana Rolon', 'Julieta Ojeda', 
                      'Axel Appella', 'Leandro Viscolungo', 'Tamara Vera'].map((name, index) => (
                        <div key={name} className="member feature fade-in">
                            <div className="circle">
                                <img 
                                    src={`/assets/about/${name.split(' ')[0].toLowerCase()}.jpg`} 
                                    alt={`Foto de ${name}`}
                                />
                            </div>
                            <p>{name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section ref={statSectionRef} className="statistics fade-in">
                <h2>DATOS Y ESTADÍSTICAS QUE DEMUESTRAN UN MUNDO MÁS VERDE</h2>
                <div className="stats-container">
                    <div className="stat-item">
                        <img src="/assets/about/rueda.png" alt="Reciclaje de neumáticos"/>
                        <h3 id="stat150000">0</h3>
                        <p><strong>Neumáticos reciclados por año</strong> <br /> a través de la reutilización de caucho.</p>
                    </div>
                    <div className="stat-item">
                        <img src="/assets/about/agua.png" alt="Ahorro de agua"/>
                        <h3 id="stat4500000000">0</h3>
                        <p><strong>Litros de agua ahorrados</strong> <br /> en la producción de nuevas prendas.</p>
                    </div>
                    <div className="stat-item">
                        <img src="/assets/about/vertedero.png" alt="Impacto ambiental"/>
                        <h3 id="stat20000000">0</h3>
                        <p><strong>Toneladas de residuos</strong> <br /> NO terminaron en vertederos.</p>
                    </div>
                    <div className="stat-item">
                        <img src="/assets/about/co2.png" alt="C02 reducido"/>
                        <h3 id="stat70">0</h3>
                        <p><strong>CO2 reducido</strong> <br /> en la producción de nuevas prendas.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}