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
        topmostVisibleYIndex = $(window).scrollTop(),
        bottommostVisibleYIndex = topmostVisibleYIndex + viewportHeight,
        elTopYIndex = $this.offset().top,
        elHeight = $this.outerHeight(),
        elBottomYIndex = elTopYIndex + elHeight,
        elAmountHangingOffTop = Math.max(0, topmostVisibleYIndex - elTopYIndex),
        elAmountHangingOffBottom = Math.max(0, elBottomYIndex - bottommostVisibleYIndex);

    if (elTopYIndex >= topmostVisibleYIndex && elBottomYIndex <= bottommostVisibleYIndex) {
      // Fully within viewport
      return elHeight;
    } else {
      // Partially within viewport
      return elHeight - elAmountHangingOffTop - elAmountHangingOffBottom;
    }
  };
}(jQuery));
