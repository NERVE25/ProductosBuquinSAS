document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', function() {
        // Alterna la clase 'active' en el menú de navegación
        nav.classList.toggle('active');
    });
});