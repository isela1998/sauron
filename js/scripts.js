/* SAURON, SSS.
   Creado: Agosto 2020
   Descripción: Archivo JS 
*/


(function ($) {
  /* ************* */
  /*** PRELOADER ***/
  /* ************* */
  $(window).on('load', function () {
    var preloaderTime = 800;
    function end() {
      var preloader = $('.spinner-wrapper');
      setTimeout(function () {
        preloader.fadeOut(preloaderTime);
      }, 800);
    }
    end();
  });

  /* *************** */
  /** TEXTO ROTATIVO */
  /* *************** */
  $("#textoRotativo").Morphext({
    animation: "fadeOn",
    separator: ",",
    speed: 3000,
  });

  /* ************************ */
  /** SLIDER ¿QUIÉNES SOMOS? **/
  /* ************************ */
  var cardSlider = new Swiper('.card-slider', {
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      }
    }
  });

  
  /* *************************** */
  /* POPUP IMAGENES - PUBLICIDAD */
  /* *************************** */ 
  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom',
  });

  /* **************** */
  /* EFECTOS - SCROLL */
  /* **************** */
  $(function () {
    $(document).on('click', 'a.page-scroll', function (event) {
      var $anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top,
          },
          2000,
          'easeInOutExpo'
        );
      event.preventDefault();
    });
  });


  /* ****************************** */
  /* SLIDER - IMAGENES - PUBLICIDAD */
  /* ****************************** */
  var imageSlider = new Swiper('.image-slider', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      // when window is <= 1200px
      1200: {
        slidesPerView: 3,
      },
      // when window is <= 768px
      768: {
        slidesPerView: 2,
      },
      // when window is <= 516px
      516: {
        slidesPerView: 1,
      }
    }
  });


  /* ********************* */
  /* BOTON VOLVER - INICIO */
  /* ********************* */
  $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
  var amountScrolled = 700;
  $(window).scroll(function() {
      if ($(window).scrollTop() > amountScrolled) {
          $('a.back-to-top').fadeIn('500');
      } else {
          $('a.back-to-top').fadeOut('500');
      }
  });




})(jQuery);
