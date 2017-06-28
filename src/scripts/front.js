// Frontpage JS File

$(document).ready(function(){

  $('#fullpage').fullpage({

    // Navigation
    menu: '#menu',
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    slidesNavigation: true,

    // Scrolling
    easingcss3: 'cubic-bezier(0.495, 1.415, 0.320, 1.275)',
    scrollingSpeed: 600,
    fitToSectionDelay: 500,
    continuousVertical: true,
    continuousHorizontal: true,

    // Design
    // controlArrows: false,
    //sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke'],
    //verticalCentered: false,

    // afterLoad: function(anchorLink, index){
    //   var loadedSectionId = $(this)[0].id;

    //   //using anchorLink
    //   if(anchorLink == 'secondPage'){
    //     // var canvas = $('<canvas/>',{ id: 'canvas'})
    //     //     .prop({
    //     //       width: $(window).innerWidth,
    //     //       height: $(window).height()
    //     //     });
    //     var canvas = $('<canvas/>',{ id: 'canvas'});
    //     $('#' + loadedSectionId + ' .fp-tableCell').apend(canvas);
    //   }
    // },

    // onLeave: function(index, nextIndex, direction){
    //   var leavingSection = $(this);

    //   //it won't scroll if the destination is the 3rd section
    //   if(index == 2){
    //     $('#canvas').remove();
    //   }
    // }

  });
});

