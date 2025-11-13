document.addEventListener("DOMContentLoaded", function() {

    // --- CÓDIGO CORREGIDO PARA EL MENÚ HAMBURGUESA ---
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav'); // ★★★ CAMBIO CLAVE: Buscamos '.nav' en lugar de '.nav-menu' ★★★

    // Se asegura de que el código solo se ejecute si encuentra los elementos
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            // Alterna la clase 'active' en el botón de hamburguesa
            hamburger.classList.toggle('active');
            // Alterna la clase 'active' en el contenedor de la navegación <nav>
            nav.classList.toggle('active'); // ★★★ CAMBIO CLAVE: Aplicamos la clase a '.nav' ★★★
        });
    }

    // --- CÓDIGO PARA LA ANIMACIÓN DE LA LÍNEA DE TIEMPO (Sin cambios) ---
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (timelineItems.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        timelineItems.forEach(item => {
            observer.observe(item);
        });
    }

});