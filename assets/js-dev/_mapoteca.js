(function (window, document, $) {
    'use strict';

    if ($('.download-item.with-map').length) {
        var $mapItem = $('.download-item.with-map');

        $mapItem.each(function(){
            $(this).children('.texto').clone().addClass('textoHide').addClass('hide').removeClass('texto').insertBefore($(this).children('.texto'));

            if( $(this).children('.texto').text().length >= 250 ){
                var $text = $(this).children('.texto').text().substring(0,250)+'...';
                $(this).children('.texto').text($text);
                console.log($text);
            }


            $(this).children('.btn-show-more').on('click',function(){
                $(this).toggleClass('show');
                $(this).parent('div').children('.texto').toggleClass('hide');
                $(this).parent('div').children('.textoHide').toggleClass('hide');
                $(this).parent('div').toggleClass('show-content');
            });
        });
    }

})(window, document, jQuery);