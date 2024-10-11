const testimonials = [
    {
        name: 'Sarah M.',
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
        const moveAmount = sliderWidth / 3; // Move by 1/3 of slider width
        track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < testimonials.length - 3) {
            currentIndex++;
            updateSlider();
        }
    });

    // Initial update
    updateSlider();

    // Update on window resize
    window.addEventListener('resize', updateSlider);
});