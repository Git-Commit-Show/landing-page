$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		autoplay: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: "<div class='slick-prev'><i class='fa fa-arrow-circle-right'></i></div>",
		prevArrow: "<div class='slick-next'><i class='fa fa-arrow-circle-left'></i></div>",
		centerMode: true,
		centerPadding: '0',
	});
});
