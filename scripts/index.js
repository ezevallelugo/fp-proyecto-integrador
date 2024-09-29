function showContent(tab) {
    // Remueve la clase 'active' de todos los botones
    document.querySelectorAll('.tabs .tab').forEach(button => {
        button.classList.remove('active');
    });

    // Remueve la clase 'active' de todas las secciones de contenido
    document.querySelectorAll('.tab-content .content').forEach(content => {
        content.classList.remove('active');
    });

    // Agrega la clase 'active' al botón y al contenido correspondientes
    document.querySelector(`.tabs .tab[onclick="showContent('${tab}')"]`).classList.add('active');
    document.getElementById(tab).classList.add('active');
}
