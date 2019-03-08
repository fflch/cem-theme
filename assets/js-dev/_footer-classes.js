(function (window, document, $) {
    'use strict';
    if ($('.footer-newsletter').length) {
 
            
        // footer newsletter
        $('.footer-newsletter .inner .container-fluid .row .col-md-7').addClass('col-sm-7 col-xs-12');
        $('.footer-newsletter .inner .container-fluid .row .col-md-5').addClass('col-sm-5 col-xs-12');

    }

    if ($('.footer-navigation').length) {
 
            
        // footer newsletter
        $('.footer-navigation .inner .container-fluid .row .col-md-8').addClass('col-sm-8 col-xs-12');
        $('.footer-navigation .inner .container-fluid .row .col-md-4').addClass('col-sm-4 col-xs-12');
        $('.footer-nav-infos .col-md-5').addClass('col-sm-12 col-xs-12');
        $('.footer-nav-infos .col-md-3').addClass('col-sm-6 col-xs-6');

    }
})(window, document, jQuery);