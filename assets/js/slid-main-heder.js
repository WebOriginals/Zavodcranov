var swiper = new Swiper('.heder-slider', {
    direction: 'vertical',
    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.heder-slider_pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            direction: 'horizontal',
        },

        // when window width is >= 640px
        990: {
            direction: 'vertical',
        }
    }
});