$(document).ready(function(){


  (function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));

$('.hide_thumbnails').clickToggle(function() {
  $('.hide_thumbnails').text('Show');
  $('.thumbnails').hide();
},
function() {
  $('.hide_thumbnails').text('Hide');
  $('.thumbnails').show();
});


  $('.thumb').hover(function() {
    $('.meme_background').removeClass('showme');
   $('.buzz').addClass('showme');
 });

 $('.thumb2').hover(function() {
   $('.meme_background').removeClass('showme');
  $('.girl').addClass('showme');
});

 $('.thumb3').hover(function() {
   $('.meme_background').removeClass('showme');
  $('.baby').addClass('showme');
});

$('.thumb4').hover(function() {
  $('.meme_background').removeClass('showme');
 $('.lemur').addClass('showme');
});

$('.thumb5').hover(function() {
  $('.meme_background').removeClass('showme');
 $('.kanga').addClass('showme');
});

$('.thumb6').hover(function() {
  $('.meme_background').removeClass('showme');
 $('.lab').addClass('showme');
});

$('.thumb7').hover(function() {
  $('.meme_background').removeClass('showme');
 $('.harold').addClass('showme');
});

$('.thumb8').hover(function() {
  $('.meme_background').removeClass('showme');
 $('.leo').addClass('showme');
});

$('.thumb9').hover(function() {
  $('.meme_background').removeClass('showme');
 $('.notsure').addClass('showme');
});

$('.thumb10').hover(function() {
  $('.meme_background').removeClass('showme');
 $('.simply').addClass('showme');
});

$('.thumb11').hover(function() {
  $('.meme_background').removeClass('showme');
 $('.trump').addClass('showme');
});

$('.thumb12').hover(function() {
  $('.meme_background').removeClass('showme');
 $('.trump2').addClass('showme');
});

$('.thumb13').hover(function() {
  $('.meme_background').removeClass('showme');
 $('.neeson').addClass('showme');
});

$('.thumb14').hover(function() {
  $('.meme_background').removeClass('showme');
 $('.arthur').addClass('showme');
});

$('.thumb15').hover(function() {
  $('.meme_background').removeClass('showme');
 $('.kermit').addClass('showme');
});

$('.thumb16').hover(function() {
  $('.meme_background').removeClass('showme');
 $('.rollsafe').addClass('showme');
});





});
