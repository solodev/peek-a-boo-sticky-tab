# Peek-a-Boo Sticky Tab
Using [Solodev's](https://www.solodev.com/) "Peek-a-Boo" sticky tab gives you another call-to-action method to increase website conversions. Unobtrusive but persistently displayed, this sticky tab gives your viewer the ability to purchase products or submit contact information with ease no matter where they are on your website. 

## Tutorial

For detailed instructions, view Solodev's [Creating a Peek-a-Boo CTA Tab for your Website](https://www.solodev.com/blog/web-design/creating-a-peek-a-boo-cta-tab-for-your-website.stml) article.

## Demo

Check out a working example on [JSFiddle](https://jsfiddle.net/solodev/6wgfrymo/).

## HTML

The sticky tab can be created using the following HTML markup:
```
<div class="side-widget open">
	<div class="inner">
		<a href="#contact-us" class="btn btn-blue">Contact Us</a>
	</div><button class="widget-close">X</button>
</div>
```

## CSS

All CSS is included in peek-a-boo.css.

## JavaScript

All necessary JavaScript is included in peek-a-boo.js. There are two principle components. First, the JavaScript to control the sticky tab and closing functions:
```
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
```

Second, if you want smooth scrolling to an anchor link on the page, use the following code:
```
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
```

## External Includes

The following third-party resources are needed:
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
```