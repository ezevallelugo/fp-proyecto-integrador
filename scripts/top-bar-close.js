document.addEventListener('DOMContentLoaded', function() {
    const topBarButton = document.querySelector('.top-bar button');
    const topBar = document.querySelector('.top-bar');

    topBarButton.addEventListener('click', function() {
        topBar.style.display = 'none';
    });
});
