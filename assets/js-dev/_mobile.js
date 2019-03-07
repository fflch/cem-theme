(function(window, document, $) {
    'use strict';
    var $body = $('body');
    var $headerMenu = $('.header-menu');
    var $mobileHeaderMenuContainer = document.createElement('div');
    var $mobileHeaderMenuTrigger = document.createElement('div');
    var $mobileHeaderMenuTriggerInnerEl = document.createElement('span');
    var $mobileHeaderMenuClose = document.createElement('div');
    var $mobileHeaderMenuCloseInnerEl = document.createElement('span');

    var $headerMenuItems = $('.header-menu .inner>ul>li');

    $($mobileHeaderMenuTrigger).addClass('header-menu-mobile-trigger');
    $($mobileHeaderMenuContainer).addClass('header-menu-mobile');

    $($mobileHeaderMenuTrigger).append($mobileHeaderMenuTriggerInnerEl);
    $($mobileHeaderMenuContainer).append($mobileHeaderMenuTrigger);

    $('header.header .header-top').append($mobileHeaderMenuContainer);

    $($mobileHeaderMenuClose).append($mobileHeaderMenuCloseInnerEl);
    $($mobileHeaderMenuClose).addClass('mobile-close')
    $('.header-menu').append($mobileHeaderMenuClose);


    $($mobileHeaderMenuTrigger).on('click', function() {
        $($body).toggleClass('show-mobile-menu');
        $headerMenu.removeClass('fade-out');
        $headerMenu.addClass('fade-in');

    })
    $($mobileHeaderMenuClose).on('click', function() {
        clearShowDropDown();
        $headerMenu.removeClass('fade-in');
        $headerMenu.addClass('fade-out');
        setTimeout(function(){
            $($body).toggleClass('show-mobile-menu');
        }, 200)
    })

    function clearShowDropDown() {
        $($headerMenuItems).each(function() {
            $(this).removeClass('show-drop-down-mobile')
        });
    };


    // get menu items
    $($headerMenuItems).each(function(index) {
        console.log(this, index);
        var $menuPlus = document.createElement('div');
        var $menuPlusInner = document.createElement('span');
        $($menuPlus).addClass('menu-mobile-open-drop');
        $($menuPlus).append($menuPlusInner);
        $(this).children('a').append($menuPlus);
        $($menuPlus).on('click', function(e) {
            e.preventDefault();
            if ($(this).parent('a').parent('li').hasClass('show-drop-down-mobile')) {
                $(this).parent('a').parent('li').removeClass('show-drop-down-mobile');
                return;
            }
            clearShowDropDown();
            $(this).parent('a').parent('li').toggleClass('show-drop-down-mobile');
        });
        // console.log( $(this) );
    });

})(window, document, jQuery);