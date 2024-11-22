import React, { useEffect, useState } from 'react';

const testimonialsData = [
    {
        name: 'Ana B.',
        stars: 5,
        text: 'Me encanta la filosofía detrás de Ecodono. Encontré ropa única y en excelentes condiciones, todo mientras apoyo una causa importante. ¡Sin duda, voy a seguir comprando en el sitio!'
    },
    {
        name: 'Pablo T.',
        stars: 5,
        text: 'Siempre busco maneras de consumir de forma más sostenible, y me encanta saber que estoy eligiendo moda responsable sin sacrificar estilo. Ecodono no solo me permite encontrar prendas únicas, cada compra contribuye a un futuro más verde.'
    },
    {
        name: 'Sofia L.',
        stars: 5,
        text: 'Ecodono me ha permitido renovar mi armario sin culpa. Cada prenda tiene su propia historia y me encanta saber que estoy contribuyendo a un consumo más consciente. ¡Además, conseguí buena calidad!'
    },
    {
        name: 'Carlos R.',
        stars: 5,
        text: 'Una experiencia de compra única. Los productos son de excelente calidad y el servicio al cliente es excepcional. Recomiendo totalmente Ecodono.'
    },
    {
        name: 'Ana P.',
        stars: 5,
        text: 'He encontrado piezas increíbles que no podría encontrar en ningún otro lugar. La calidad y el proceso de selección son excelentes.'
    },
    {
        name: 'Lucía G.',
        stars: 5,
        text: 'Ecodono ha cambiado mi forma de ver la moda. Ahora puedo vestirme con estilo sabiendo que estoy contribuyendo a un mundo más sostenible. ¡La variedad y calidad de las prendas es increíble!'
    },
    {
        name: 'Miguel A.',
        stars: 4,
        text: 'Excelente concepto y muy buena ejecución. He comprado varias veces y siempre quedo satisfecho. Solo sugeriría mejorar un poco los tiempos de envío.'
    },
    {
        name: 'Elena R.',
        stars: 5,
        text: 'Como amante de la moda vintage, Ecodono es un verdadero tesoro. He encontrado piezas únicas a precios increíbles. ¡Y lo mejor es que estoy ayudando al planeta!'
    },
    {
        name: 'Javier M.',
        stars: 5,
        text: 'La atención al cliente de Ecodono es excepcional. Tuve un pequeño problema con un pedido y lo resolvieron de inmediato. Eso, sumado a la calidad de los productos, me ha convertido en cliente fiel.'
    },
    {
        name: 'Isabel F.',
        stars: 5,
        text: 'Ecodono no solo me permite comprar ropa de segunda mano de calidad, sino que también me ha educado sobre la importancia de la moda sostenible. ¡Una plataforma que realmente marca la diferencia!'
    },
    {
        name: 'Diego S.',
        stars: 5,
        text: 'Comprar en Ecodono es como ir de caza de tesoros. Siempre encuentro algo único y especial. Me encanta saber que estoy dando una segunda vida a estas prendas.'
    }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = React.useRef(null);
  const sliderRef = React.useRef(null);

  useEffect(() => {
    const handleResize = () => updateSlider();
    window.addEventListener('resize', handleResize);
    updateSlider();
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  const updateSlider = () => {
    const track = trackRef.current;
    const slider = sliderRef.current;
    const sliderWidth = slider.offsetWidth;
    const cardWidth = track.children[0].offsetWidth;
    const visibleCards = Math.floor(sliderWidth / cardWidth);

    if (testimonialsData.length <= visibleCards) {
      track.style.transform = 'translateX(0)';
      track.style.justifyContent = 'center';
    } else {
      const moveAmount = cardWidth + parseInt(getComputedStyle(track.children[0]).marginRight);
      track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
      track.style.justifyContent = 'flex-start';
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    const slider = sliderRef.current;
    const cardWidth = trackRef.current.children[0].offsetWidth;
    const visibleCards = Math.floor(slider.offsetWidth / cardWidth);

    if (currentIndex < testimonialsData.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="testimonial-container">
      <div className="slider-container">
        <button className="slider-button prev" onClick={handlePrevClick}>&#8249;</button>
        <div className="testimonial-slider" ref={sliderRef}>
          <div className="testimonial-track" ref={trackRef}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">{'★'.repeat(testimonial.stars)}</div>
                <div className="name">{testimonial.name}</div>
                <div className="text">"{testimonial.text}"</div>
              </div>
            ))}
          </div>
        </div>
        <button className="slider-button next" onClick={handleNextClick}>&#8250;</button>
      </div>
    </div>
  );
};

export default Testimonials;
