document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.menu-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        const isClickInsideNavbar = event.target.closest('.navbar');
        if (!isClickInsideNavbar && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});