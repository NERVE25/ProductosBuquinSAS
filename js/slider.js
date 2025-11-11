document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los contenedores de sliders que hay en la página
    const sliders = document.querySelectorAll('.slider-container');

    sliders.forEach(slider => {
        const sliderWrapper = slider.querySelector('.slider-wrapper');
        const slides = slider.querySelectorAll('.slide');
        const prevButton = slider.querySelector('.prev');
        const nextButton = slider.querySelector('.next');
        
        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateSlider() {
            // Mueve el wrapper horizontalmente
            sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextButton.addEventListener('click', () => {
            // Si estamos en el último slide, vamos al primero. Si no, avanzamos.
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        });

        prevButton.addEventListener('click', () => {
            // Si estamos en el primer slide, vamos al último. Si no, retrocedemos.
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        });

        // Inicia el slider en la primera posición
        updateSlider();
    });
});
