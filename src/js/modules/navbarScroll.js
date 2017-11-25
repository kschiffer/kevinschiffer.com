import $ from 'jquery';

const navbarScroll = () => {
  var $navbar = $('header');
  var lastScroll = 0;
  var lastScrollDown = 0;
  $(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
      $navbar.addClass('stay');
      if (lastScroll > $(window).scrollTop()) {
        if (lastScrollDown > $(window).scrollTop() + 100) {
          $navbar.removeClass('scrolling-down');
          $navbar.addClass('scrolling-up animations-enabled');
        }
      } else {
        $navbar.removeClass('scrolling-up');
        $navbar.addClass('scrolling-down');
        lastScrollDown = $(window).scrollTop();
      }
    } else if ($(window).scrollTop() < 1) {
      $navbar.removeClass(
        'stay scrolling-up scrolling-down animations-enabled'
      );
    } else if ($navbar.hasClass('scrolling-down')) {
      $navbar.removeClass(
        'stay scrolling-up scrolling-down animations-enabled'
      );
    }
    lastScroll = $(window).scrollTop();
  });
};

export default navbarScroll;
