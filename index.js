document.addEventListener('DOMContentLoaded', () => {

    /***************************/
    /* NAVBAR */
    /***************************/

    // Change navbar display on scroll
    const header = document.getElementById('header-container');
    const logo = document.getElementById('logo');
    const topScroll = document.getElementById('top-scroll');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 80) {
            header.style.opacity = '0.9';
            header.style.height = '60px'
            logo.style['margin-bottom'] = '-70px';
            logo.style.height = '100px';
            topScroll.style.visibility = 'visible';
        } else {
            header.style.opacity = '1';
            header.style.height = '110px'
            logo.style['margin-bottom'] = '-100px';
            logo.style.height = '180px';
            topScroll.style.visibility = 'hidden';
        }
    });

    // Create smooth scroll on anchor link click
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', event => {
            event.preventDefault();

            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    /***************************/
    /* CARROUSEL */
    /***************************/

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

    /***************************/
    /* INSTAGRAM */
    /***************************/
    // const token = 'IGQVJWcFFJWWJsSGZAEazhsdXY2LU51ZA2JxV1MxQms3RkVPVklqMnFkZAmxCbjJUN1luWnE2TndiVy1fMkh0Q1hLVVdXa0lodDhWbEZAYZAnktUXF1dWdnMTFUVVFic2FMSFhOc2ZAmaE1R';
    // const app = document.getElementById('insta-feed');
    // let idArr = [];

    // // Get posts list
    // fetch(`https://graph.instagram.com/17841419281502081/media?access_token=${token}`)
    // .then(response => {
    //     return response.json();
    // })
    // .then(posts => {
    //     // For each piece of data, push the post ID into our ID array
    //     for (el of posts.data) {
    //         idArr.push(el.id);
    //     }

    //     // Use only 4 most recent posts
    //     let idRecent = idArr.slice(0, 4);

    //     // Fetch individual posts by ID
    //     for (id of idRecent) {
    //         fetch(`https://graph.instagram.com/${id}?fields=id,media_type,media_url,caption,permalink,timestamp&access_token=${token}`)
    //             .then(response => {
    //                 return response.json();
    //             })
    //             .then(fields => {
    //                 // Use fields to populate the page with cards
    //                 const card = document.createElement('div');
    //                 card.setAttribute('class', 'card');

    //                 const image = document.createElement('img');
    //                 image.src = fields.media_url;

    //                 const link = document.createElement('a');
    //                 link.href = fields.permalink;
    //                 link.appendChild(image);

    //                 const caption = document.createElement('p');
    //                 caption.setAttribute('id', 'caption');
    //                 let formatCaption = fields.caption.replace('\n', '<br><br>')
    //                 caption.innerHTML = formatCaption;

    //                 // Convert the date from ISO to readable format
    //                 const timestamp = document.createElement('p');
    //                 timestamp.setAttribute('id', 'date');
    //                 let postDate = new Date(fields.timestamp).toUTCString();
    //                 postDate = postDate.split(' ').slice(0, 4).join(' ');
    //                 timestamp.textContent = postDate;

    //                 app.appendChild(card);
                    
    //                 card.appendChild(timestamp);
    //                 card.appendChild(link);
    //                 card.appendChild(caption);
    //             });
    //     };
    // })
    // .catch(error => {
    //     console.log("There was an error", error)
    // });

    /***************************/
    /* CONTACT */
    /***************************/

    const phone = document.getElementById('phone')
    const submit = document.getElementById('submit')

    phone.addEventListener('keydown', event => {
        const { currentTarget } = event;

        // Prevent alpha characters
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            event.preventDefault();
        }

        // Apply formatting to digits only
        const input = currentTarget.value.replace(/\D/g, '').substring(0,10);

        // Format phone numbers (___) ___ - _____
        if (input.length > 6) {
            currentTarget.value = `(${input.substring(0,3)}) ${input.substring(3,6)} - ${input.substring(6,10)}`;
        } else if (input.length > 3) {
            currentTarget.value = `(${input.substring(0,3)}) ${input.substring(3,6)}`
        } else if (input.length > 0) {
            currentTarget.value = `(${input.substring(0,3)}`
        }
    })

    submit.addEventListener('submit', () => {
        console.log('Submitted')
    });


});