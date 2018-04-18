$(document).ready(function(){
    $("#sticker").sticky({
    	topSpacing:25,
    	getWidthFrom:'inerhit'
    });


$("a[href='#embodiment']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 1000);
  return false;
});


  });




window.addEventListener('resize', function(event){
  $('#sticker').sticky('update');
});



  


