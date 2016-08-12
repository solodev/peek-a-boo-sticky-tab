window.onload=function(){

// Sticky Tab JavaScript
$('.side-widget .widget-close').on('click', function() {
    $(this).parent().removeClass('open');
  });
  $('.side-widget .inner').on('click', function(e) {
    var $parent = $(this).parent();
    if (!$parent.is(".open")) {
      e.preventDefault();
    }
    $parent.addClass('open');
  });

// Anchor Link Scrolling JavaScript  
$(function() {
  $('a.btn[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

}