$(document).ready(function(){
    $('.slider-img').slick({
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 1500,
      arrow: true,
      infinite: true
      });

      var splide = new Splide( '#splide', {
        type    : 'loop',
        perPage : 1,
        autoplay: true,
      } );

      splide.mount();
});