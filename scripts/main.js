var titleShow = $('.ani-title')

$(document).ready(function(){
  if ($('#fullpage').length > 0) {
  $('#fullpage').fullpage({
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
    scrollHorizontally: true,
    continuousVertical: true,
    navigation: true,
    resetSliders: true,
    scrollingSpeed: 700,
    v2compatible: false,
    responsiveWidth: 600,
    verticalCentered: false,

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

}

if ($('.grid').length > 0) {
  // init Masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
  });

// layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });

  $('.heading').on('mouseover', event => {
    $(event.currentTarget).find('.btn-to-shop').slideDown('fast');
  });

  $('.heading').on('mouseleave', event => {
    $(event.currentTarget).find('.btn-to-shop').slideUp('fast');
  });

}

});