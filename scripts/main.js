var titleShow = $('.ani-title')

$(document).ready(function(){
  $('#fullpage').fullpage({
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
    scrollHorizontally: true,
    continuousVertical: true,
    navigation: true,
    resetSliders: true,
    scrollingSpeed: 700,
    v2compatible: false,
    responsiveWidth: 600,

   onLeave: function(origin, destination, direction) {
      titleShow.hide(0);
     },

   onSlideLeave: function(section, origin, destination, direction) {
      titleShow.hide(0);
    },

    afterSlideLoad: function(section, origin, destination, direction) {
      titleShow.fadeIn(400);
    },
    
   afterRender: function (){
      titleShow.fadeIn(400);
      setInterval(function(){
        $.fn.fullpage.moveSectionDown();
      }, 13000);
    },

   afterLoad: function(origin, destination, direction) {
      if(origin){
        titleShow.fadeIn(400);
      }
    },

  });
});