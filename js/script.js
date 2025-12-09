document.addEventListener("DOMContentLoaded", function() {

    // --- CÓDIGO PARA EL MENÚ HAMBURGUESA ---
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // --- CÓDIGO PARA LA ANIMACIÓN DE LA LÍNEA DE TIEMPO ---
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (timelineItems.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        timelineItems.forEach(item => { observer.observe(item); });
    }

    // --- CÓDIGO MEJORADO PARA EL SLIDER DE PRODUCTOS (COMPATIBLE CON MÓVILES) ---
    const sliders = document.querySelectorAll('.slider-container');

    sliders.forEach(slider => {
        const sliderWrapper = slider.querySelector('.slider-wrapper');
        if (!sliderWrapper) return; 

        const slides = slider.querySelectorAll('.slide');
        const prevButton = slider.querySelector('.prev');
        const nextButton = slider.querySelector('.next');
        
        if (!prevButton || !nextButton || slides.length === 0) return;

        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateSlider() {
            sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // ★★★ INICIA LA MEJORA PARA MÓVILES ★★★

        // 1. Creamos funciones separadas para las acciones
        function goToNext() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        }

        function goToPrev() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        // 2. Añadimos el listener para el evento 'click' (para computadoras)
        nextButton.addEventListener('click', goToNext);
        prevButton.addEventListener('click', goToPrev);

        // 3. Añadimos el listener para el evento 'touchend' (para móviles)
        nextButton.addEventListener('touchend', function(event) {
            // Prevenimos que el navegador simule un 'click' después, para evitar un doble avance.
            event.preventDefault();
            goToNext();
        });

        prevButton.addEventListener('touchend', function(event) {
            event.preventDefault();
            goToPrev();
        });

        // ★★★ TERMINA LA MEJORA PARA MÓVILES ★★★

        updateSlider();
    });
});