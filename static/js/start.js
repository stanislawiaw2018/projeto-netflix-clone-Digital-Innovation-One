$('.carousel').slick({
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    speed: 600,
    

    responsive: [
        {
          breakpoint: 600, // aqui define até que largura será as configs abaixo
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          
          }
        },
        {
            breakpoint: 410, // aqui define até que largura será as configs abaixo
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },
    ]
  });
  