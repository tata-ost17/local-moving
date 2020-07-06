$(function () {


   $('input[type="file"],input[type="checkbox"],input[type="radio"],select').styler();

   $('.questions__box-icon').on('click', function () {
      $(this).toggleClass('active')
   });

   $('.feedback__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true,
      centerMode: false,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/icons/arrow-left.png" alt="">',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/icons/arrow-right.png" alt=""></img>',
      responsive: [
         {
            breakpoint: 1050,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 780,
            settings: {
               slidesToShow: 1,
               dots: false,
            }
         },

      ]
   });

   $('.header__btn').on('click', function () {
      $('.header__link').slideToggle();
   });

   $(document).ready(function () {
      var clock;

      clock = $('.clock').FlipClock({
         clockFace: 'DailyCounter',
         autoStart: false,
         callbacks: {
            stop: function () {
               $('.message').html('The clock has stopped!');
            }
         }
      });

      clock.setTime(2826299);
      clock.setCountdown(true);
      clock.start();

   });

   new WOW().init();

});