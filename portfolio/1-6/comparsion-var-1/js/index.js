function resizeimg() {
  var width70 = $(window).width()*0.7;
  var height90 = $(window).height()*0.85;
  var leftwidth = 0;
  var leftimgh = 0;

  var rightimgw = 1000;
  $(".photo").css("width", rightimgw);
  var rightheight = $('.rightside').height();
  var logoheight = $('.logo').height();
  var photoheight = $('.photo').height();
  var descheight = $('.desc').height();
  var summblock = logoheight+photoheight+descheight;
  
  while (leftwidth < width70 && leftimgh < height90) { 
  	leftwidth++;
  	$(".leftside").css("width", leftwidth);
  	leftimgh = $(".leftside img").height();
};

  while (rightheight < summblock && rightimgw > 25) {
  	rightimgw--;
  	$(".photo").css("width", rightimgw);
  	logoheight = $('.logo').height();
	photoheight = $('.photo').height();
	descheight = $('.desc').height();
	summblock = logoheight+photoheight+descheight;
  };

}


$(window).resize(resizeimg);
$(document).ready(resizeimg);




