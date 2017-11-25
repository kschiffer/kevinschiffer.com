<!doctype html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

  <title>Kevin Schiffer – Design and Development</title>
  <meta name="description" content="Kevin Schiffer is an interface designer, web developer and general human–computer interaction enthusiast currently living in Berlin.">
  <meta name="theme-color" content="#000" />
  <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32">
  <link rel="stylesheet" type="text/css" href="css/style.css?d=171125">
  <script type="text/javascript" src="js/babylon.js"></script>
  <script type="text/javascript" src="js/bundle.js?d=171125"></script>

</head>
<body id="top" class="{{page}} loading">
<div id="spinner">
  <div class="asterisk"></div>
</div>
{% if canvas %}
<canvas id="canvas"></canvas>
{% endif %}
<header>
  <div>
    <div class="grid">
      <nav class="main-nav">
        <a href="/" class="logo" title="Kevin Schiffer">{% include "partials/_logo.tpl" %}</a>
        
        <a href="#" class="mobile-menu no-ani"><img src="img/menu_icon.svg" alt="" /></a>
        <ul>
          <li><a class="home-icon" title="Home" href="/"><img src="img/home_icon.svg" /></a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/work">Work</a></li>
          <li><a class="no-ani" href="mailto:mail@kevinschiffer.com">Reach Out</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>