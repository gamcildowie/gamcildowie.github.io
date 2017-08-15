$(document).ready(function() {



  $('.navigation, .menu.showme').hover(function() {
    $('.menu').addClass('showme');
    $('.menu').mouseleave(function() {
      $('.menu').removeClass('showme');
    });
  });


  $('.box4').hover(function() {
    $('.box4,.content,.info,.apostraphy').addClass('showme');
  });

  $('.box4').click(function() {
    $('.box4,.content,.info,.apostraphy').removeClass('showme');
  });




  setTimeout(function () {
       $('.low9,.low8').addClass('addwhite');
     }, 1000);

     setTimeout(function () {
       $('.low9,.low8').addClass('spin');
     }, 3000);




     var audioCar = document.createElement('audio');
            audioCar.setAttribute('src', 'https://www.soundjay.com/transportation/sounds/car-ignition-2.mp3');
            $.get();
            audioCar.addEventListener("load", function() {
              audioCar.play();
            }, true);


            var audioKey = document.createElement('audio');
                   audioKey.setAttribute('src', 'https://www.soundjay.com/transportation/sounds/key-ignition-insert-1.mp3');
                   $.get();
                   audioKey.addEventListener("load", function() {
                     audioKey.play();
                   }, true);

                   var audioHonk = document.createElement('audio');
                          audioHonk.setAttribute('src', 'https://www.soundjay.com/transportation/sounds/car-locked-honk-1.mp3');
                          $.get();
                          audioHonk.addEventListener("load", function() {
                            audioHonk.play();
                          }, true);




       $('.blackbox').hover(function() {
               audioKey.play();
             });


            $('.blackbox').click(function() {
                    audioCar.play();
                  });

                  $('.blackbox').click(function() {
                    $('.blackbox').toggleClass('showme');
                    $('.showme').mouseleave(function() {
                    $('.blackbox').removeClass('showme');
                  });
                        });



                      $('.fiat').click(function() {
                              audioHonk.play();
                            });









  });
