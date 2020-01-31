document.addEventListener('DOMContentLoaded', () => {
    
    const slides = document.getElementsByClassName('carrousel-slide');
    const dots = document.getElementsByClassName('dot');
    const buttonRight = document.getElementById('button-right');
    const buttonLeft = document.getElementById('button-left');

    function nextSlide() { 
        for (let i = 0; i < slides.length; i ++) {
            // if not on the last slide
            if (i < slides.length - 1) {
                // if slide has a 'visible' class, remove it and add it to the next slide
                if (slides[i].classList.contains('visible')) {
                    slides[i].classList.toggle('visible');
                    slides[i + 1].classList.toggle('visible');
                    // change the active dot
                    dots[i].classList.toggle('active');
                    dots[i + 1].classList.toggle('active');
                    break;
                }
            // if on the last slide, reset to slide 1, and reset dot
            } else {
                slides[slides.length - 1].classList.toggle('visible');
                slides[0].classList.toggle('visible');
                dots[dots.length - 1].classList.toggle('active');
                dots[0].classList.toggle('active');
            };
        };
    };

    function prevSlide() {
        for (let i = slides.length - 1; i >= 0; i --) {
            // if not on the first slide
            if (i > 0) {
                // if slide has a 'visible' class, remove it and add it to the previous slide
                if (slides[i].classList.contains('visible')) {
                    slides[i].classList.toggle('visible');
                    slides[i - 1].classList.toggle('visible');
                    // change the active dot
                    dots[i].classList.toggle('active');
                    dots[i - 1].classList.toggle('active');
                    break;
                }
            // if on the first slide, reset to last slide, and reset dot
            } else {
                slides[0].classList.toggle('visible');
                slides[slides.length - 1].classList.toggle('visible');
                dots[0].classList.toggle('active');
                dots[slides.length - 1].classList.toggle('active');
            };
        };
    };

    buttonRight.addEventListener('click', () => {
        nextSlide();
    });

    buttonLeft.addEventListener('click', () => {
        prevSlide();
    });

    // Allow slide selection by dot click
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', () => {
            for (let k = 0; k < dots.length; k++) {
                dots[k].classList.remove('active');
            };
            for (let j = 0; j < slides.length; j ++) {
                if (slides[j].classList.contains('visible')) {
                    slides[j].classList.toggle('visible')
                    slides[i].classList.toggle('visible')
                }
            };
            dots[i].classList.toggle('active')
        });
    }

    // Clicking on slide moves to next slide
    for (let i = 0; i < slides.length; i ++) {
        slides[i].addEventListener('click', () => {
            nextSlide();
        });
    };
});