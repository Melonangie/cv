// Main JS File
$(document).ready(function() {
  $('#fullpage').fullpage({
    // Navigation
    menu: '#menu',
    anchors:['firstPage', 'secondPage', 'thirdPage', 'forthPage','fifthPage'],
    slidesNavigation: true,
    // Sections
    // verticalCentered: false,
    loopTop: true,
    loopBottom: true
  });
});
