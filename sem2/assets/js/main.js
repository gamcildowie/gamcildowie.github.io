$(document).ready(function() {

  $('.header').hover(function() {
    $('.menu').addClass('showme');
  });
  $('.header').click(function() {
    $('.menu').removeClass('showme');
  });

  $('.navigation').hover(function() {
    $('.header').addClass('showme');
  });
  $('.navigation').click(function() {
    $('.header').removeClass('showme');
  });




  setTimeout(function () {
       $('.redsquare, .low9,.low8, .high').addClass('addwhite');
     }, 1000);

     setTimeout(function () {
       $('.low9,.low8').addClass('spin');
     }, 3000);



















  });
