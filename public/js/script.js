$(document).ready(function(){$(".slider").slick({dots:!0,infinite:!0,speed:500,arrows:!0,cssEase:"linear"}),$(document).foundation({"magellan-expedition":{active_class:"active",threshold:-3e3,destination_threshold:10,throttle_delay:0,fixed_top:0,offset_by_height:!0}}),$('a[href^="#"]').click(function(){var target=$(this.hash);if(target.length){var myoffset=parseInt(target.offset().top-60);$("html,body").animate({scrollTop:myoffset},1e3),event.preventDefault()}}),$(window).resize(function(){$(document).foundation("reflow")})});