$(function(){
  $(window).scroll(updateSectionAmounts);

  $('section').on('click', function() {
    console.log($(this).amountVisible());
  });
});

var updateSectionAmounts = function() {
  $('section').each(function() {
    var $this = $(this);
    $this.find('.amount').text($this.amountVisible());
  });
};
