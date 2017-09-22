$(document).ready(function() {



    $('.info').click(function() {
    $('.mation').toggle('showme');
    });


  // nav 1 - NATURAL

  $('.nav_nat').click(function(event) {
    $('.item').removeClass('show');
    $('.item').addClass('hide');

    $('.item.nat').removeClass('hide');
    $('.item.nat').addClass('show');
  });

  $('.nav_land').click(function(event) {
    $('.item').removeClass('show');
    $('.item').addClass('hide');

    $('.item.land').removeClass('hide');
    $('.item.land').addClass('show');
  });

  $('.nav_light').click(function(event) {
    $('.item').removeClass('show');
    $('.item').addClass('hide');

    $('.item.light').removeClass('hide');
    $('.item.light').addClass('show');
  });

  $('.nav_wind').click(function(event) {
    $('.item').removeClass('show');
    $('.item').addClass('hide');

    $('.item.wind').removeClass('hide');
    $('.item.wind').addClass('show');
  });

  $('.nav_water').click(function(event) {
    $('.item').removeClass('show');
    $('.item').addClass('hide');

    $('.item.water').removeClass('hide');
    $('.item.water').addClass('show');
  });


      // nav 2 - SYNTHETIC

      $('.nav_synth').click(function(event) {
        $('.item').removeClass('show');
        $('.item').addClass('hide');

        $('.item.synth').removeClass('hide');
        $('.item.synth').addClass('show');
      });

      $('.nav_textile').click(function(event) {
        $('.item').removeClass('show');
        $('.item').addClass('hide');

        $('.item.textile').removeClass('hide');
        $('.item.textile').addClass('show');
      });

      $('.nav_metal').click(function(event) {
        $('.item').removeClass('show');
        $('.item').addClass('hide');

        $('.item.metal').removeClass('hide');
        $('.item.metal').addClass('show');
      });

      $('.nav_plastic').click(function(event) {
        $('.item').removeClass('show');
        $('.item').addClass('hide');

        $('.item.plastic').removeClass('hide');
        $('.item.plastic').addClass('show');
      });

      $('.nav_edible').click(function(event) {
        $('.item').removeClass('show');
        $('.item').addClass('hide');

        $('.item.edible').removeClass('hide');
        $('.item.edible').addClass('show');
      });



              // NAV 3 - FORM

              $('.nav_ball').click(function(event) {
                $('.item').removeClass('show');
                $('.item').addClass('hide');

                $('.item.ball').removeClass('hide');
                $('.item.ball').addClass('show');
              });

              $('.nav_disc').click(function(event) {
                $('.item').removeClass('show');
                $('.item').addClass('hide');

                $('.item.disc').removeClass('hide');
                $('.item.disc').addClass('show');
              });

              $('.nav_cone').click(function(event) {
                $('.item').removeClass('show');
                $('.item').addClass('hide');

                $('.item.cone').removeClass('hide');
                $('.item.cone').addClass('show');
              });

              $('.nav_cylinder').click(function(event) {
                $('.item').removeClass('show');
                $('.item').addClass('hide');

                $('.item.cylinder').removeClass('hide');
                $('.item.cylinder').addClass('show');
              });




  // REMOVE TAGS

  $('.nav_all').click(function(event) {
    $('.item').removeClass('hide');
    $('.item').addClass('show');
  });



        // FOOTER

        $('.nav_thumbnail').click(function(event) {
      $('.item').addClass('thumbnail');
    });

    $('.nav_full').click(function(event) {
  $('.item').removeClass('thumbnail');
});




        $('.back2top').click(function(){
             $('html, body').animate({scrollTop : 0},800);
             return false;
         });











 //  END OF JS (DONT DELETE)
 });
