// Setting the height to match container of banner
var pContainerHeight = $('.banner-image').height();

// Setting the scroll to detect how far it has gone
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });
  }

});
