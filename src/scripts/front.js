// Frontpage JS File

$(document).ready(function(){

  $('#fullpage').fullpage({

    //Navigation
    menu: '#menu',
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],

    //Scrolling
    css3: false,
    scrollingSpeed: 400,
    easing: 'swing',
    easingcss3: 'ease',
    loopBottom: true,

    //Design
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke'],

  });
});
