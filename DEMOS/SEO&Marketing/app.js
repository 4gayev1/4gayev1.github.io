$('.home-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false

});

$('.services-carousel').owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        870: {
            items: 2,
            nav: true
        },
        1310: {
            items: 3,
            nav: false
        },
        1700: {
            nav: true,
            loop: true
        }
    }
});



$('.projects-carousel').owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            loop: true,

            dots: true
        },
        1350: {
            items: 1,
            loop: true,

            dots: true
        },
        1498: {
            items: 2,
            loop: true,

            dots: true
        },
        1665: {
            items: 3,
            loop: true,

            dots: true
        },
        1850: {
            loop: true,
            dots: true

        }
    }
});