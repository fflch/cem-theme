(function (window, document, $) {
    'use strict';
    
    if ($('.quem-somos-menu').length) {
        var urlAtual = window.location.href;
        console.log(urlAtual);
        
        $('.quem-somos-menu >ul> li').each(function(){
            // console.log($(this).children('a').attr('href'));
            if ( urlAtual.indexOf( $(this).children('a').attr('href') ) > -1 ){
                // alert($(this).children('a').attr('href') +' ecxiste!' )
                $(this).addClass('active');
            }
            // console.log($(this));
            
        });
    }
})(window, document, jQuery);