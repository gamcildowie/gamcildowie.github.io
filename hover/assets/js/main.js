$(document).ready(function(){

  $('.number').mouseenter(function() {
   $('.footnote').addClass('showme');
 });

 $('.number').mouseleave(function() {
   $('.footnote').removeClass('showme');
 });

 $('.link').mouseenter(function() {
  $('.backdrop').addClass('showme');
});

$('.link').mouseleave(function() {
  $('.backdrop').removeClass('showme');
});

$('.author').mouseenter(function() {
 $('.headshot').addClass('showme');
});

$('.author').mouseleave(function() {
 $('.headsot').removeClass('showme');
});


  $('.thumbnail').click(function() {
    $(this).toggleClass('enlarge');
  });

});
