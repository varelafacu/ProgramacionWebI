$(document).ready(function(){

    $('.formasPago').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]

    });
});
$('.cursos-similares').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        }
      }
    ]
});