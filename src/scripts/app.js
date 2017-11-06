//=require _conditionizr.js

// Main JS File
$(document).ready(function() {
  $('#fullpage').fullpage({
              anchors: ['home', 'services', 'about', 'work', 'contact'],
              menu: '#menu',
              slidesNavigation: true,
              verticalCentered: true,
              continuousVertical: true
  });
});
