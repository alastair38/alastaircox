/*
Main website JavaScript
*/
(function() {

'use strict';

// unsupported browser
if (!window.addEventListener || !window.history || !window.requestAnimationFrame || !document.getElementsByClassName) return;


// enable service worker
if ('serviceWorker' in navigator) {

  // register service worker
  //navigator.serviceWorker.register('/service-worker.js');

  // load script to populate offline page list
  if (document.getElementById('cachedpagelist') && 'caches' in window) {
    var scr = document.createElement('script');
    scr.src = '/assets/js/offlinepage.js';
    scr.async = 1;
    document.head.appendChild(scr);
  }

}

var headerHeight = $("header").height();


        $(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - headerHeight
        }, 1200, 'swing', function () {
            window.location.hash = target ;
        });
    });
});

})();
