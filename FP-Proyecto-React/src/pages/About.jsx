import "../styles/about.css";

export default function About() {
    return (
        <div>


                <div className="container-first">
                    <div className="first-box fade-in">
                        <div className="logo-first">
                            <img src="src/assets/about/logo-completo.png" alt="Logo Ecodono"/>
                        </div>
                        <h1>¿QUIÉNES SOMOS?</h1>
                        <p>Somos una plataforma dedicada a impulsar la economía circular, ofreciendo un espacio donde las personas pueden <strong>comprar, vender, reciclar</strong> y dar nueva vida a productos de segunda mano. Creemos en el poder de la <strong>reutilización</strong> y el <strong>upcycling</strong> para reducir el impacto ambiental y crear un cambio positivo.</p>
                        <a href="#history" className="btn-cta">Explora más</a>
                    </div>
                </div>

                <section className="features">
                    <div className="feature fade-in">
                        <img src="src/assets/about/mundo.png" alt="Reciclaje"/>
                            <p>Promovemos el reciclaje y reutilización para reducir el impacto ambiental.</p>
                    </div>
                    <div className="feature fade-in">
                        <img src="src/assets/about/simbolo.png" alt="Conectar personas"/>
                            <p>Conectando personas para un futuro sostenible.</p>
                    </div>
                    <div className="feature fade-in">
                        <img src="src/assets/about/bote.png" alt="Soluciones sustentables"/>
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
                        <img src="src/assets/about/economia.png" alt="Economía circular real"/>
                            <h3>Economía circular <br /> real</h3>
                            <p>Integramos reciclaje y upcycling, transformando productos en desuso en algo nuevo.</p>
                    </div>
                    <div className="service">
                        <img src="src/assets/about/reduccion.png" alt="Reducción del desperdicio"/>
                            <h3>Reducción del desperdicio</h3>
                            <p>Reciclamos materiales como plástico, goma y textiles para crear productos útiles.</p>
                    </div>
                    <div className="service"><img src="src/assets/about/comunidad.png" alt="Comunidad comprometida"/>
                        <h3>Comunidad comprometida</h3>
                        <p>Fomentamos un espacio donde las personas pueden vender, donar o comprar productos.</p>
                    </div>
                </section>

                <section className="team fade-in">
                    <h2>EL EQUIPO DETRÁS DE ESTE PROYECTO</h2>
                    <div className="team-members">
                        <div className="member feature fade-in">
                            <div className="circle">
                                <img src="src/assets/about/ezequiel.jpg" alt="Foto de Ezequiel"/>
                            </div>
                            <p>Ezequiel Vallejos</p>
                        </div>
                        <div className="member feature fade-in">
                            <div className="circle">
                                <img src="src/assets/about/aldana.jpg" alt="Foto de Aldana"/>
                            </div>
                            <p>Aldana Rolon</p>
                        </div>
                        <div className="member feature fade-in">
                            <div className="circle">
                                <img src="src/assets/about/julieta.jpg" alt="Foto de Julieta"/>
                            </div>
                            <p>Julieta Ojeda</p>
                        </div>
                        <div className="member feature fade-in">
                            <div className="circle">
                                <img src="src/assets/about/axel.jpg" alt="Foto de Axel"/>
                            </div>
                            <p>Axel Appella</p>
                        </div>
                        <div className="member feature fade-in">
                            <div className="circle">
                                <img src="src/assets/about/leandro.jpg" alt="Foto de Leandro"/>
                            </div>
                            <p>Leandro Viscolungo</p>
                        </div>
                        <div className="member feature fade-in">
                            <div className="circle">
                                <img src="src/assets/about/tamara.jpg" alt="Foto de Tamara"/>
                            </div>
                            <p>Tamara Vera</p>
                        </div>
                    </div>
                </section>

                <section className="statistics fade-in">
                    <h2>DATOS Y ESTADÍSTICAS QUE DEMUESTRAN UN MUNDO MÁS VERDE</h2>
                    <div className="stats-container">
                        <div className="stat-item">
                            <img src="src/assets/about/rueda.png" alt="Reciclaje de neumáticos"/>
                                <h3 id="stat1">150000</h3>
                                <p><strong>Neumáticos reciclados por año</strong> <br /> a través de la reutilización de caucho.</p>
                        </div>
                        <div className="stat-item">
                            <img src="src/assets/about/agua.png" alt="Ahorro de agua"/>
                                <h3 id="stat2">4.5 mil millones</h3>
                                <p><strong>Litros de agua ahorrados</strong> <br /> en la producción de nuevas prendas.</p>
                        </div>
                        <div className="stat-item">
                            <img src="src/assets/about/vertedero.png" alt="Impacto ambiental"/>
                                <h3 id="stat3">20 millones</h3>
                                <p><strong>Toneladas de residuos</strong> <br /> NO terminaron en vertederos.</p>
                        </div>
                        <div className="stat-item">
                            <img src="src/assets/about/co2.png" alt="C02 reducido"/>
                                <h3 id="stat4">70</h3>
                                <p><strong>CO2 reducido</strong> <br /> en la producción de nuevas prendas.</p>
                        </div>
                    </div>
                </section>

                <script src="scripts/about-script.js"></script>

        </div>
    );
}
