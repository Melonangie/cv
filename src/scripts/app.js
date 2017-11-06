//=require _conditionizr.js

// Main JS File
$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    anchors: ['home', 'services', 'about', 'work', 'contact'],
    menu: '#menu',
    slidesNavigation: true,
    verticalCentered: true,
    continuousVertical: true,

    //Scrolling
    easing: 'fade',

    //Custom selectors
    lazyLoading: true,
  });
});
