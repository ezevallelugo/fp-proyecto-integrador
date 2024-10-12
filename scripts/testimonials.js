const testimonials = [
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

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.testimonial-track');
    const slider = document.querySelector('.testimonial-slider');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    // Create testimonial cards
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        
        const starsHtml = '<div class="stars">' + '★'.repeat(testimonial.stars) + '</div>';
        
        card.innerHTML = `
            ${starsHtml}
            <div class="name">${testimonial.name}</div>
            <div class="text">"${testimonial.text}"</div>
        `;
        
        track.appendChild(card);
    });

    function updateSlider() {
        const sliderWidth = slider.offsetWidth;
        const cardWidth = track.children[0].offsetWidth;
        const visibleCards = Math.floor(sliderWidth / cardWidth);
        
        // Si hay menos testimoniales que el número de tarjetas visibles, centramos el contenido
        if (testimonials.length <= visibleCards) {
            track.style.transform = 'translateX(0)';
            track.style.justifyContent = 'center';
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        } else {
            const moveAmount = cardWidth + parseInt(getComputedStyle(track.children[0]).marginRight);
            track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
            track.style.justifyContent = 'flex-start';
            prevButton.style.display = '';
            nextButton.style.display = '';
        }
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextButton.addEventListener('click', () => {
        const sliderWidth = slider.offsetWidth;
        const cardWidth = track.children[0].offsetWidth;
        const visibleCards = Math.floor(sliderWidth / cardWidth);
        
        if (currentIndex < testimonials.length - visibleCards) {
            currentIndex++;
            updateSlider();
        }
    });

    // Initial update
    updateSlider();

    // Update on window resize
    window.addEventListener('resize', updateSlider);
});