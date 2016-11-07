$(window).scroll(function() {
  var offset = $(window).scrollTop();
  $('.navbar').toggleClass('trans', offset > 380);
});
