$(document).ready(function(){
    
  $('.slider').slick({
    //setting-name: setting-value
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    cssEase: 'linear'  
  });
    
    
    $(document).foundation({
    "magellan-expedition": {
      active_class: 'active', // specify the class used for active sections
      threshold: -3000, // how many pixels until the magellan bar sticks, 0 = auto
      destination_threshold: 10, // pixels from the top of destination for it to be considered active
      throttle_delay: 0, // calculation throttling to increase framerate
      fixed_top: 0, // top distance in pixels assigend to the fixed element on scroll
      offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
    }
    });    

    $('a[href^="#"]').click(function() {
        var target = $(this.hash);

        if (target.length) {
            var myoffset = parseInt(target.offset().top - 60);
            $('html,body').animate({scrollTop: myoffset }, 1000);
            event.preventDefault();
        }

    });   

    $(window).resize(function() {
        $(document).foundation('reflow');
    });

    
});


