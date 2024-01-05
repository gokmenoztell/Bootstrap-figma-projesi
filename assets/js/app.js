window.addEventListener('scroll', function () {
    var header = document.querySelector('nav');

    var scrollThreshold = window.innerWidth <= 992 ? 40 : 135;

    if (window.pageYOffset > scrollThreshold) {
        header.classList.add('fixed');

        if (header.classList.contains('fixed')) {
            header.style.position = 'fixed'; 

        } else {
            header.style.position = 'absolute'; 
        }

    } else {
        header.classList.remove('fixed');
        header.style.position = 'absolute'; 
    }
});


$('.owl-carousel').owlCarousel({
    margin: 10,
    nav: true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    loop:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});




