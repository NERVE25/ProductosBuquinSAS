document.addEventListener("DOMContentLoaded", function() {

    // --- CÓDIGO PARA EL MENÚ HAMBURGUESA ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Se asegura de que el código solo se ejecute si encuentra los elementos
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // Alterna la clase 'active' en el botón de hamburguesa
            hamburger.classList.toggle('active');
            // Alterna la clase 'active' en el menú de navegación
            navMenu.classList.toggle('active');
        });
    }

    // --- CÓDIGO PARA LA ANIMACIÓN DE LA LÍNEA DE TIEMPO ---
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Se asegura de que el código solo se ejecute si hay elementos en la línea de tiempo
    if (timelineItems.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // El elemento aparece cuando un 10% es visible
        });

        timelineItems.forEach(item => {
            observer.observe(item);
        });
    }

});