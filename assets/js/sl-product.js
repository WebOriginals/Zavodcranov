var galleryThumbs = new Swiper('.little-img-sl', {
    spaceBetween: 10,
    slidesPerView: 4,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 640px
        767: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    },
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.sl-img-big', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-product-n',
        prevEl: '.swiper-button-product-p',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});