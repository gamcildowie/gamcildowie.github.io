$(document).ready(function(){

  var i = 1;

      $("#n").click(function() {
          $('body').css("background-image", "bg" + i +".png");
      i=i+1;
      if (i==13){i=1};
      });
      

});
