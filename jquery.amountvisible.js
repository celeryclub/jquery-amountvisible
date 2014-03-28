/*
jQuery AmountVisible - v0.5
Copyright (c) 2011-2014 Stephen Davis
https://github.com/stephendavis89/jquery-amountvisible

Licensed under the MIT license
http://stephendavis89.mit-license.org
*/

(function($) {
  var calculateAmountVisible = function($el) {
    var topmostVisibleYIndex = $(window).scrollTop(),
        bottommostVisibleYIndex = topmostVisibleYIndex + $(window).height(),
        elTopYIndex = $el.offset().top,
        elHeight = $el.outerHeight(),
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

  $.fn.amountVisible = function() {
    return calculateAmountVisible(this.first());
  };
}(jQuery));
