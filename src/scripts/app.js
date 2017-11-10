//=require _conditionizr.js

// Main JS File
$(document).ready(function() {
  var stopWidth = 768;
  var stopHeight = 320;

  // fullpage.js
  $('#fullpage').fullpage({
    //Navigation
    anchors: ['home', 'about', 'skills', 'work', 'contact'],
    menu: '#menu',
    slidesNavigation: true,
    // verticalCentered: false,
    loopBottom: true,

    //Scrolling
    css3:false,
    scrollingSpeed: 1000,
    touchSensitivity: 15,

    //Design
    responsiveWidth: stopWidth,
    responsiveHeight: stopHeight,
    fixedElements: '#header',

    afterLoad: function(anchorLink, index){
      //section 2
      if(index == 2){
        //moving the image
        $('#section1').find('h1').delay(500).animate({
          left: '0%'
        }, 1500, 'easeOutExpo');

        $('#section1').find('p').first().fadeIn(1800, function(){
          $('#section1').find('p').last().fadeIn(1800);
        });;

      }

      //section 3
      if(anchorLink == '3rdPage'){
        //moving the image
        $('#section2').find('h1').delay(500).animate({
          left: '0%'
        }, 1500, 'easeOutExpo');
      }
    }

    // Going to sections, startig from 1
  /*   onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);
      var destinationSection = $('.section').eq(nextIndex-1);

      if (nextIndex === 2) {
        leavingSection.hide( 'fade', {effect: 'easeInCubic'}, 1000 );
        destinationSection.delay(600).show( 'fade', {effect: 'easeInCubic'}, 1000 );
      }

      var viewportWidth = $(window).width();
      var viewportHeight = $(window).height();

     if (viewportWidth > stopWidth && viewportHeight > stopHeight) {
        // leavingSection.hide('slow', 'easeOutCubic');
        // destinationSection.delay(600).show(600, 'easeInCubic');
      }

      switch (nextIndex) {
        case 1:
          if (direction == 'up') {
            $(document.body).removeClass('contact').addClass('home');
          }
          // leavingSection.removeClass('contact');
          // destinationSection.addClass('home');
          break;
        case 2:
          $(document.body).removeClass('home').addClass('services');
          // leavingSection.removeClass('home');
          // destinationSection.addClass('services');
          break;
        case 3:
          $(document.body).removeClass('services').addClass('about');
          // leavingSection.removeClass('services');
          // destinationSection.addClass('about');
          break;
        case 4:
          $(document.body).removeClass('about').addClass('work');
          // leavingSection.removeClass('about');
          // destinationSection.addClass('work');
          break;
        case 5:
          $(document.body).removeClass('work').addClass('contact');
          // leavingSection.removeClass('work');
          // destinationSection.addClass('contact');
          break;
      }
    }*/

  });

  // Pinch to zoom.
  // var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
  // if(isTouchDevice){
  //   var scale = 0.7; // initial-scale
  //   var r = 0.10;
  //   $(document).bind('gesturechange',function(event){
  //     if(event.originalEvent.scale > 1) scale = scale < 1.2 ?  scale+r : 1.2 ;
  //     else scale = scale > 0.7 ? scale-r : 0.7 ;
  //     $('meta[name=viewport]').attr('content', 'width=device-width, minimum-scale='+ scale.toFixed(2) +', maximum-scale='+ scale.toFixed(2) +', user-scalable=yes');
  //   });
  // }

  // if(isResponsive){}

});
