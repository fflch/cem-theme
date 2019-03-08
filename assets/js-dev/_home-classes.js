(function (window, document, $) {
    'use strict';
    if ($('.home-news-and-agenda').length) {
        // home news
        $('.home-news-and-agenda .home-news').parent('div').addClass('col-sm-8 col-xs-12');
        // $('.home-news-and-agenda .home-news > .row >.col-md-4').each(function(){
        //     $(this).addClass('col-sm-4 col-xs-6');
        // });
        $('.home-news-and-agenda .home-news .home-news-item').each(function(){
            $(this).parent('div').addClass('col-sm-4 col-xs-6 home-news-item-box');
        });
        
        // home agenda
        $('.home-news-and-agenda .home-agenda').parent('div').addClass('col-sm-4 col-xs-12');
        
        // home videos
        $('.home-videos-and-publications .home-video').parent('div').addClass('col-sm-4 col-xs-6 home-video-wrapper');
        
        // home publicacoes
        $('.home-videos-and-publications .home-publications').parent('div').addClass('col-sm-8 col-xs-6 home-publications-wrapper');
        
        // home apoio
        
        // $('.home-apoio .logos > .row >.col-md-3').each(function(){
            //     $(this).addClass('col-sm-6 col-xs-6');
            // });
            

    }
})(window, document, jQuery);