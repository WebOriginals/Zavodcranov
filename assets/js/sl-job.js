var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: false,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    effect: 'flip',
    spaceBetween: 10,
    loop:true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
        nextEl: '.n',
        prevEl: '.p',
    },
    // autoplay: {
    //     delay: 10000,
    // },
    thumbs: {
        swiper: galleryThumbs,
    },
});
