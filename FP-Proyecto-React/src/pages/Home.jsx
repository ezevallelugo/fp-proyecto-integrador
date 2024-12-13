import ProductGrid from "../components/ProductGrid";
import Testimonials from "../components/Testimonials";

export default function Home() {
    return (
        <>
            <div className="home">
                <div className="hero-section">
                    <div className="hero-content">
                        <h1>Vístete consciente, vive con propósito</h1>
                        <p>Únete al cambio hacia una moda más responsable. Descubre prendas únicas que no solo reflejan tu estilo,
                            sino también tu compromiso con los demás y el medio ambiente.</p>
                        <button className="cta-button">Encuentra tu prenda</button>
                        <div className="stats">
                            <div className="stat">
                                <span>200+</span>
                                <p>Usuarios</p>
                            </div>
                            <div className="stat">
                                <span>500+</span>
                                <p>Productos de alta calidad</p>
                            </div>
                            <div className="stat">
                                <span className="h-[36px] relative">
                                <img src="/assets/home/infinity-svgrepo-com.svg" alt="" className="relative sm-631:absolute size-[60px] top-[-3%] sm-631:left-[34%]" />
                                </span>
                                <p>Vidas cambiadas</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="partners">
                    <img src="/assets/home/logo pescar.png" alt="Fundación Pescar" />
                    <img src="/assets/home/logo karuna.png" alt="Karuna Charitable Foundation" />
                    <img src="/assets/home/logo valtech.png" alt="Valtech" />
                </section>
                <h2 className="title top-border">
                    Moda Sustentable a tu Alcance
                </h2>

                <div className="max-w-[70rem] mx-auto text-center">
                    <ProductGrid />
                    <button>Ver todos</button>
                </div>

                <script src="/scripts/home-products.js"></script>

                <h2 className="title">
                    Características que hacen la diferencia
                </h2>

                <p className="secondtitle-description">Somos una plataforma dedicada a impulsar la economía circular, ofreciendo un
                    espacio donde
                    las personas pueden comprar, vender, reciclar y dar nueva vida a productos de segunda mano. Creemos en el poder
                    de la reutilización y el upcycling para reducir el impacto ambiental y crear un cambio positivo. Nos enfocamos
                    en construir una comunidad consciente, comprometida con el consumo responsable y la sostenibilidad.</p>

                <div className="boxes">
                    <div className="container-box">
                        <div className="item">
                            <img src="/assets/home/box icon.png" alt="" />
                            <h3>Compra y venta de productos reciclados</h3>
                            <p>Contribuye al medio ambiente mientras obtienes productos únicos.</p>
                        </div>
                        <div className="item">
                            <img src="/assets/home/box icon.png" alt="" />
                            <h3>Facilitamos donaciones para causas sostenibles</h3>
                            <p>Tu generosidad puede marcar una gran diferencia.</p>
                        </div>
                        <div className="item">
                            <img src="/assets/home/box icon.png" alt="" />
                            <h3>Servicios de recolección a tu disposición</h3>
                            <p>Hacemos que el reciclaje sea fácil y accesible.</p>
                        </div>
                    </div>

                    <button>Descubre más sobre nosotros</button>
                </div>

                <h2 className="title">
                    Preguntas Frecuentes
                </h2>

                <section className="faq">
                    <div className="faq-container">
                        <article>
                            <h3>¿Cómo puedo donar?</h3>
                            <p>Puedes donar productos en nuestras ubicaciones designadas o programar una recolección a domicilio.
                                Aceptamos una variedad de artículos, desde ropa hasta electrodomésticos. Tu donación puede hacer una
                                gran diferencia.</p>
                        </article>

                        <article>
                            <h3>¿Qué productos se venden?</h3>
                            <p>Vendemos productos reciclados y de segunda mano en excelentes condiciones. Nuestro inventario incluye
                                ropa, muebles y artículos electrónicos. Todos los productos son revisados antes de ser puestos a la
                                venta.</p>
                        </article>

                        <article>
                            <h3>¿Cómo funciona la recolección?</h3>
                            <p>La recolección se puede programar a través de nuestro sitio web o por teléfono. Un equipo se
                                encargará de recoger tus donaciones en la fecha acordada. Es una forma fácil de contribuir al
                                reciclaje.</p>
                        </article>

                        <article>
                            <h3>¿Por qué reciclar productos?</h3>
                            <p>Comprar vestimenta de segunda mano es una opción económica y solidaria que contribuye
                                significativamente a la sostenibilidad ambiental. Optar por ropa usada te permite encontrar piezas
                                únicas a precios accesibles beneficiando tanto a la comunidad como al medio ambiente.</p>
                        </article>
                    </div>
                </section>

                <h2 className="title">Historias de Nuestra Comunidad</h2>

                <Testimonials />

            </div>
        </>
    );
}



