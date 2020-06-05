$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: "<img class='a-left control-c prev slick-prev' src='assets/img/left-arrow.png'>",
    	nextArrow:"<img class='a-right control-c next slick-next' src='assets/img/right-arrow.png'>",
		centerMode: true,
		centerPadding: '0',
		responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

  ]
	});
});
