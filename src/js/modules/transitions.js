import $ from 'jquery';

const transitions = function() {
  $('a:not(.no-ani)').click(function(e) {
    if ($(this).attr('href').substring(0, 4) === 'http') return;

    e.preventDefault();
    var href = $(this).attr('href');
    var delay = 0;
    if ($('body.home').length) delay = 420;

    $('body:not(.home) header')
      .addClass('scrolling-up animations-enabled stay')
      .removeClass('scrolling-down');
    $('main').removeClass('show');
    $('h1, h2, h3, h4, h5, p, span').css({ position: 'relative' });
    $('h1, h2, h3, h4, h5, p, span').animate(
      { opacity: 0, top: -20 },
      400,
      function() {
        setTimeout(function() {
          window.location.href = href;
        }, delay);
      }
    );
  });
};

export default transitions;
