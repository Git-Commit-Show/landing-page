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
var charLimit = 122;

function truncate(el) {
  var clone = el.children().first(),
    originalContent = el.html(),
    text = clone.text();

  if (clone[0].innerHTML.trim().length > charLimit) {
    el.attr("data-originalContent", originalContent);
    el.addClass("hasHidden");
    clone.text(text.substring(0, charLimit) + "...");
    el.empty().append(clone);
    el.append(
      $("<div class='read-more'><a href='#' class='more'>Read More</a>")
    );
  }
}

$("body").on("click", "a.more", function (e) {
  e.preventDefault();
  var truncateElement = $(this).parent().parent();
  if (truncateElement.hasClass("hasHidden")) {
    $(truncateElement).html(truncateElement.attr("data-originalContent"));
    $(truncateElement).append(
      $("<div class='read-more'><a href='#' class='more'>Read Less</a>")
    );
    truncateElement.removeClass("hasHidden").slow;
  } else {
    $(".read-more", truncateElement).remove();
    truncate(truncateElement);
  }
});

$(".truncate").each(function () {
  truncate($(this));
});
function myCallback() {
  setTimeout(function () {
    $("truncate").removeClass("hasHidden");
  }, 3000);
}
