
/**
 * Agg v1.0.0 (http://pixelomatic.com/)
 * Copyright 2015-2016 Pixelomatic
 * Licensed under the private license
 */
$(document).ready(function() {

  // Returns height of browser viewport
  $(window).on('resize.windowscreen', function() {
    $('.windowscreen').height($(this).height());
  });

  $(window).trigger('resize.windowscreen');

});
