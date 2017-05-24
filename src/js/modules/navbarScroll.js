import $ from 'jquery';

const navbarScroll = () => {
  var $navbar = $('header');
  var lastScroll = 0;
  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      $navbar.addClass('stay');
      if (lastScroll > $(window).scrollTop()) {
        $navbar.removeClass('scrolling-down');
        $navbar.addClass('scrolling-up animations-enabled');
      } else {
        $navbar.removeClass('scrolling-up');
        $navbar.addClass('scrolling-down');
      }
    } else if ($(window).scrollTop() < 1) {
      $navbar.removeClass('stay scrolling-up scrolling-down animations-enabled');
    }
    lastScroll = $(window).scrollTop();
  });
};

export default navbarScroll;
