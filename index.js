document.addEventListener('DOMContentLoaded', () => {
    
    const slides = document.getElementsByClassName('carrousel-slide');
    const buttonRight = document.getElementById('button-right');
    const buttonLeft = document.getElementById('button-left');

    buttonRight.addEventListener('click', () => {
        for (let i = 0; i < slides.length; i ++) {
            // if not on the last slide
            if (i < slides.length - 1) {
                // if slide has a 'visible' class, remove it and add it to the next slide
                if (slides[i].classList.contains('visible')) {
                    slides[i].classList.toggle('visible');
                    slides[i + 1].classList.toggle('visible');
                    break;
                }
            // if on the last slide, reset to slide 1
            } else {
                slides[slides.length - 1].classList.toggle('visible');
                slides[0].classList.toggle('visible');
            };
        };
    });

    buttonLeft.addEventListener('click', () => {
        for (let i = slides.length - 1; i >= 0; i --) {
            // if not on the first slide
            if (i > 0) {
                // if slide has a 'visible' class, remove it and add it to the previous slide
                if (slides[i].classList.contains('visible')) {
                    slides[i].classList.toggle('visible');
                    slides[i - 1].classList.toggle('visible');
                    break;
                }
            // if on the first slide, reset to last slide
            } else {
                slides[0].classList.toggle('visible');
                slides[slides.length - 1].classList.toggle('visible');
            };
        };
    });

});