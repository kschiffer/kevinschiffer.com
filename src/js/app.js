'use strict';

import $ from 'jquery';
import navbarScroll from './modules/navbarScroll.js';

// Import main.scss once.
import '../css/index.scss';

$('document').ready(() => {
  navbarScroll();

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
