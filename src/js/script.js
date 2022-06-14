
$(document).ready(function(){
    $('.slider__inner-1').slick({
        autoplay: true,
        speed: 4250,
        autoplaySpeed: 0,
        cssEase: 'linear',
        vertical: true,
        slidesToShow: 2,
        infinite: true,
        arrows: false,
        centerMode: true,
        pauseOnHover: false,
        draggable: false, 
    });

    $('.slider__inner-2').slick({
        autoplay: true,
        speed: 4500,
        autoplaySpeed: 0,
        cssEase: 'linear',
        vertical: true,
        slidesToShow: 2,
        infinite: true,
        arrows: false,
        centerMode: true,
        pauseOnHover: false, 
        draggable: false, 
    });
  });