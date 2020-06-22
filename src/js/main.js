$(function () {


   $('input[type="file"],input[type="checkbox"],input[type="radio"],select').styler();

   $(document).ready(function () {
      var clock;
      clock = $('.clock').FlipClock({
         clockFace: 'DailyCounter',
         autoStart: false,
         callbacks: {
            stop: function () {
               $('.message').html('The clock has stopped!')
            }
         }
      });
      clock.setTime(220880); //Устанавливаем нужное время в секундах
      clock.setCountdown(true); //Устанавливаем отсчет времени назад
      clock.start(); //Запускаем отсчет
   });

});