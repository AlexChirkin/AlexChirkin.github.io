$( document ).ready(function() {
$('.card-cat-enable').on('click', function(){
    $(this).toggleClass("cce");
    
});

$('.disabled').on('click', function(){
    $(this).toggleClass("ccd");
    $('.disabled').mouseout();
});

var wh = $(window).height();
var bh = $('.main-content').height();
var padding = 0;
if (wh>bh) {
  padding=(wh-bh)/2;
  $(".main-content").css("padding-top", padding);
}


window.addEventListener('resize', function () {
var wh = $(window).height();
var bh = $('.main-content').height();
var padding = 0;
if (wh>bh) {
  padding=(wh-bh)/2;
  $(".main-content").css("padding-top", padding);
}  
})
});
