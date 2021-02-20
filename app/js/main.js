$(function () {

    $('.clients__items').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: true,
        responsive: [
            {
              breakpoint: 1070,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
      });

      $('.header__burger').on('click', function(){
          $('.header__nav').slideToggle();
      })

});

var mixer = mixitup('.services__photos');


