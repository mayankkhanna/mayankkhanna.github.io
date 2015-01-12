(function(){

	// Init global DOM elements, functions and arrays
    window.app 			                   = {el : {}, fn : {}};
    app.el['window']                   = $(window);
    app.el['document']                 = $(document);
    app.el['back-to-top']              = $('.back-to-top');
    app.el['html-body']                = $('html,body');	
    app.el['loader']                   = $('#loader');
    app.el['mask']                     = $('#mask');

	app.fn.screenSize = function() {
		var size, width = app.el['window'].width();
		if(width < 320) size = "Not supported";
		else if(width < 480) size = "Mobile portrait";
		else if(width < 768) size = "Mobile landscape";
		else if(width < 960) size = "Tablet";
		else size = "Desktop";
		if (width < 768){$('.animated').removeClass('animated').removeClass('hiding');}
		// $('#screen').html( size + ' - ' + width );
		// console.log( size, width );
	};	

	
	
	$(function() {	
    //Preloader
    app.el['loader'].delay(700).fadeOut();
    app.el['mask'].delay(1200).fadeOut("slow");    

	// Resized based on screen size
	app.el['window'].resize(function() {
		app.fn.screenSize();
	});		

    // fade in .back-to-top
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        app.el['back-to-top'].fadeIn();
      } else {
        app.el['back-to-top'].fadeOut();
      }
    });

    // scroll body to 0px on click
    app.el['back-to-top'].click(function () {
      app.el['html-body'].animate({
        scrollTop: 0
      }, 1500);
      return false;
    });

    $('#mobileheader').html($('#header').html());

    function heroInit() {
        var hero        = jQuery('#hero'),
            winHeight   = jQuery(window).height(),
            heroHeight  = winHeight;
          
            hero.css({height: heroHeight+"px"});
      };
      
    jQuery(window).on("resize", heroInit);
    jQuery(document).on("ready", heroInit);
    
    $('.navigation-bar').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        easing: 'swing'
    });
    
    $('.animated').appear(function(){
      var element = $(this);
      var animation = element.data('animation');
      var animationDelay = element.data('delay');
      if (animationDelay) {
        setTimeout(function(){
          element.addClass( animation + " visible" );
          element.removeClass('hiding');
          if (element.hasClass('counter')) {
            element.find('.value').countTo();
          }
        }, animationDelay);
      }else {
        element.addClass( animation + " visible" );
        element.removeClass('hiding');
        if (element.hasClass('counter')) {
          element.find('.value').countTo();
        }
      }    
    },{accY: -150});
    
    $('#header').waypoint('sticky', {
        wrapper: '<div class="sticky-wrapper" />',
        stuckClass: 'sticky'
    }); 

    $('.fancybox').fancybox();
    
	});
	

	
})();