$(document).ready(function () {
    $('.roww').slick({
        infinite: true,
        speed: 300,
        arrows: false,
        centerMode: false,
        centerPadding: '0',
        autoplay: false,
        slidesToShow: 10,
        responsive: [
        {
            breakpoint: 1100,
            settings: {
                infinite: true,
                speed:1000,
                slidesToShow: 8,
                 cssEase:'linear',
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
                centerPadding: '0',
                autoplay: true,
                autoplaySpeed: 0,
            }
        },
        {
            breakpoint: 970,
            settings: {
                infinite: true,
                speed:1000,
                slidesToShow: 6,
                 cssEase:'linear',
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
                centerPadding: '0',
                autoplay: true,
                autoplaySpeed: 0,
            }
        },
        {
            breakpoint: 770,
            settings: {
                infinite: true,
                speed:1000,
                slidesToShow: 5,
                 cssEase:'linear',
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
                centerPadding: '0',
                autoplay: true,
                autoplaySpeed: 0,
            }
        },
        {
            breakpoint: 670,
            settings: {
                infinite: true,
                speed:1000,
                slidesToShow: 4,
                 cssEase:'linear',
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
                centerPadding: '0',
                autoplay: true,
                autoplaySpeed: 0,
            }
        },
        {
            breakpoint: 570,
            settings: {
                infinite: true,
                speed:1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                cssEase:'linear',
                arrows: false,
                centerMode: false,
                centerPadding: '0',
                autoplay: true,
                autoplaySpeed: 0,
            }
        },
        {
            breakpoint: 360,
            settings: {
                infinite: true,
                speed:1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                cssEase:'linear',
                arrows: false,
                centerMode: false,
                centerPadding: '0',
                autoplay: true,
                autoplaySpeed: 0,
            }
        }

  ]
    });
});
