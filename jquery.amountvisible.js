/*
jQuery AmountVisible - v0.5
Copyright (c) 2011-2014 Stephen Davis
Licensed under the MIT license
http://stephendavis89.mit-license.org
*/

(function($) {
  $.fn.amountVisible = function() {
    var $this = this.first(),
        topmostVisibleYIndex = $(window).scrollTop(),
        bottommostVisibleYIndex = topmostVisibleYIndex + $(window).height(),
        elTopYIndex = $this.offset().top,
        elHeight = $this.outerHeight(),
        elBottomYIndex = elTopYIndex + elHeight;

    if (elTopYIndex >= topmostVisibleYIndex && elBottomYIndex <= bottommostVisibleYIndex) {
      /*
      Element is fully within viewport
      Returns element height
      */

      return elHeight;
    } else {
      /*
      Element is partially within viewport
      Returns the greater of 0 or the following:

      element height -
      amount above top of viewport -
      amount below bottom of viewport
      */

      return Math.max(0,
        elHeight -
        Math.max(0, topmostVisibleYIndex - elTopYIndex) -
        Math.max(0, elBottomYIndex - bottommostVisibleYIndex)
      );
    }
  };
}(jQuery));
