// Frontpage JS File

$(document).ready(function(){

  $('#fullpage').fullpage({

    //Navigation
    menu: '#menu',
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],

    //Scrolling
    css3: false,
    scrollingSpeed: 400,
    easing: 'easeOutBack',
    easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
    loopBottom: true,

    //Design
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke'],
    verticalCentered: false,

  });
});
