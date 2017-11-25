'use strict';

import $ from 'jquery';
import jquery from 'jquery';
import navbarScroll from './modules/navbarScroll.js';
import canvasContent from './modules/canvasContent.js';
import transitions from './modules/transitions.js';
import 'slick-carousel';
import './external/jquery.swipebox.js';

// Import main.scss once.
import '../css/index.scss';

var slickLoaded = false;
var windowLoaded = false;

$(window).on('load', function() {
  if (!$('.slider').length) {
    $('main').addClass('show');
    $('body').removeClass('loading');
  } else {
    if (slickLoaded) {
      $('main').addClass('show');
      $('body').removeClass('loading');
    } else windowLoaded = true;
  }
});

$('document').ready(() => {
  navbarScroll();

  var $slider = $('.slider');

  $slider.on('init', function() {
    if (windowLoaded) {
      $('main').addClass('show');
      $('body').removeClass('loading');
    } else slickLoaded = true;
  });

  $slider.slick({
    slidesToShow: 1,
    autoplay: true,
    speed: 750,
    autoplaySpeed: 8000,
    infinite: true,
    arrows: true,
    dots: true
  });

  $slider.after(
    $('<p class="info mobile-only">(Tap image for detail view)</p>')
  );

  $(document).swipebox({
    selector: 'body.swipebox-active .slider .slick-slide:not(.slick-cloned) li',
    loopAtEnd: true,
    removeBarsOnMobile: false
  });

  checkResponsiveImages();

  transitions();

  $(window).on('resize', checkResponsiveImages);

  if ($('main.home').length && navigator.userAgent.indexOf('Firefox') === -1)
    canvasContent.init();

  var $overlay = $('<div class="mobile-menu-overlay"></div>');
  $('.main-nav ul').clone().appendTo($overlay);
  $overlay.prependTo('body');

  $('.mobile-menu').on('click', () => {
    if (!$('.mobile-menu-overlay:visible').length) {
      $('body').addClass('mobile-menu-open');
      $overlay.show();
      $overlay.animate({ left: '0%' }, 200, () => {});
      $('.mobile-menu img').attr('src', 'img/close_icon.svg');
    } else {
      $('body').removeClass('mobile-menu-open');
      $('.mobile-menu img').attr('src', 'img/menu_icon.svg');
      $overlay.hide();
      $overlay.css('left', '');
    }
  });
});

function checkResponsiveImages() {
  if ($(window).width() < 650) {
    $('body').addClass('swipebox-active');
    $('img.mobile-available:not(.mobile-active)').each(function() {
      let src = $(this).attr('src');
      src = src.substring(0, src.length - 4) + '_mobile.jpg';
      $(this).attr('src', src).addClass('mobile-active');
    });
  } else {
    $('body.swipebox-active').removeClass('swipebox-active');
    $('img.mobile-available.mobile-active').each(function() {
      let src = $(this).attr('src');
      src = src.substring(0, src.length - 11) + '.jpg';
      $(this).attr('src', src).removeClass('mobile-active');
    });
  }
}
