$(document).ready(function() {

  let pixelDegree;
  let degreeRange = 360;
  let pythagorasMode = false;

  setPixelDegree();
  document.addEventListener('resize', setPixelDegree);

  function setPixelDegree(){
  	return pixelDegree = (pythagorasMode) ? degreeRange / Math.sqrt((document.body.clientHeight*document.body.clientHeight)+(document.body.clientWidth*document.body.clientWidth)) : degreeRange / (document.body.clientHeight + document.body.clientWidth);
  }

  function switchMode(){
  	pythagorasMode = !pythagorasMode;
  }

  function angleFromPixel(e){
  	return (pythagorasMode)
  		? Math.sqrt( (e.clientX*e.clientX)+(e.clientY*e.clientY) ) * pixelDegree
  		: (e.clientX + e.clientY) * pixelDegree;
  }


  document.addEventListener('mousedown', function(){
  	switchMode();
  })

  document.addEventListener( 'mousemove', function(e){
  	let colorAngle = (e.clientX + e.clientY) * pixelDegree;
  	document.body.style.backgroundColor = `hsla( ${angleFromPixel(e)}, 50%, 70%, 1 )`;
  } );


  //////////


  $(document).ready(function(e) {
      var menuTop1pos = $('#menutop1').offset().top;

      var stickToTop = function(){
          var winScrollTop = $(window).scrollTop();

          if (winScrollTop >= menuTop1pos) {
                  $('.title').addClass('stickTop1st');
          } else {
                  $('#menutop1').removeClass('stickTop1st');
          }
      };

      stickToTop();

      $(window).scroll(function() {
              stickToTop();
      });
  });

    //////////


  $(window).scroll(function(){
  var wintop = $(window).scrollTop(), docheight =

      $(document).height(), winheight = $(window).height();
   			var scrolled = (wintop/(docheight-winheight))*100;

    		$('.scroll-line').css('width', (scrolled + '%'));
  });



    ////////////


  $('.info').click(function() {
  $('.mation').toggle('showme');
  });



  $('.blue').click(function() {
 $('.blue').toggleClass('showme');
});

$('.blue').click(function() {
$('.left').toggleClass('click');
});

$('.blue').hover(function() {
$('.left').toggleClass('showme');
});

$('.pink').hover(function() {
$('.right').toggleClass('showme');
});

$('.pink').click(function() {
$('.pink').toggleClass('showme');
});

$('.pink').click(function() {
$('.right').toggleClass('click');
});

$('.hair').hover(function() {
$('.trace').toggleClass('showme');
});


$('.noir').click(function() {
$('.noir-pink').toggleClass('showme');
});


$('.noir-pink').click(function() {
$('.noir-blue').toggleClass('showme');
});

$


});
