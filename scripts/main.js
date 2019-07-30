var titleShow = $('.ani-title')

$(document).ready(function(){
  
  if ($('#fullpage').length > 0) {
  $('#fullpage').fullpage({
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
    scrollHorizontally: true,
    continuousVertical: true,
    resetSliders: true,
    scrollingSpeed: 700,
    verticalCentered: false,
    fitToSection: true,
    navigation: true,

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
      }, 15000);
    },

   afterLoad: function(origin, destination, direction) {
      if(origin){
        titleShow.fadeIn(400);
      }
    },

  });

  //Menu toggle X

  $('#nav-toggler-full').on('click', () => {

      if ($('#nav-toggler-full').attr('aria-expanded') === "false") {
  
        $('#toggle-menu-close').removeClass("fa-bars ").addClass("fa-times");
          } else {
        $('#toggle-menu-close').removeClass("fa-times").addClass("fa-bars ");
        }
      })

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

//if ($('.fotos').length > 0) {

//}

if (($('.fotos').length > 0) || ($('.grid').length > 0)) {

    //$('.navbar').removeClass('fixed-top');
  //$('#black-background').css("background-color","black");

  // When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar-secondary");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


  $('#nav-toggler-full').on('click', () => {
  
    if ($('#nav-toggler-full').attr('aria-expanded') === "false") {

      $('#nav-fullheight').addClass("fullheight");
      $('#toggle-menu-close').removeClass("fa-bars ").addClass("fa-times");
      $('body').addClass("fixedPosition");
        } else {
      $('#nav-fullheight').removeClass("fullheight");
      $('#toggle-menu-close').removeClass("fa-times").addClass("fa-bars ");
      $('body').removeClass("fixedPosition");
      }
    })


    $('#nav-toggler-angle').on('click', () => {
      
        if ($('#nav-toggler-angle').attr('aria-expanded') === "false") {
          $('#dynamic-collapse-btn').removeClass("fa-angle-down").addClass("fa-angle-up");
            } else {
              $('#dynamic-collapse-btn').removeClass("fa-angle-up").addClass("fa-angle-down");
          }
        })


  };

});