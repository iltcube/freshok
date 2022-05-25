$(function () {

    $('.top-slider__inner').slick({
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/icon/arrow-left.svg" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/icon/arrow-right.svg" alt="prev"></button>',
        fade: true,
        // autoplay: true,
        // autoplaySpeed: 4000,
    });

});

$(function () {
    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
});