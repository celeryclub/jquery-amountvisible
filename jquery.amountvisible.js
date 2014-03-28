/*
jQuery AmountVisible - v0.5
Copyright (c) 2011-2014 Stephen Davis
Licensed under the MIT license
http://stephendavis89.mit-license.org
*/

(function($) {
  $.fn.amountVisible = function() {
    var $this = this.first(),
        viewportHeight = $(window).height(),
        highestVisibleYIndex = $(window).scrollTop(),
        lowestVisibleYIndex = highestVisibleYIndex + viewportHeight,
        elTopYIndex = $this.offset().top,
        elHeight = $this.outerHeight(),
        elBottomYIndex = elTopYIndex + elHeight;

    if (elTopYIndex >= highestVisibleYIndex && elBottomYIndex <= lowestVisibleYIndex) {
      // Fully within viewport
      return elHeight;
    } else if (elTopYIndex < highestVisibleYIndex) {
      // Hanging off top of viewport
      return elBottomYIndex - highestVisibleYIndex;
    } else if (elBottomYIndex > lowestVisibleYIndex) {
      // Hanging off bottom of viewport
      return lowestVisibleYIndex - elTopYIndex;
    } else {
      // Not within viewport
      return 0;
    }
  };
}(jQuery));
