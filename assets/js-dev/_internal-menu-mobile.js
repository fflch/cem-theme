(function (window, document, $) {
    'use strict';
    // if ($('.que-somos-menu-col').length) {
    if ($('.quem-somos-content').length) {
        

        var $body = $('body');
        var $menuMobileSideBarContainer = document.createElement('div');
        var $menuMobileSideBarTrigger = document.createElement('div');
        var $menuMobileSideBarTriggerInner = document.createElement('span');
        var $menuMobileSideBarTriggerIcon = document.createElement('span');

        $($menuMobileSideBarContainer).addClass('menu-side-bar-mobile');
        $($menuMobileSideBarTrigger).addClass('menu-side-bar-mobile-trigger');
        $($menuMobileSideBarTriggerInner).text('Menu');
        $($menuMobileSideBarTriggerIcon).addClass('icon');

        $($menuMobileSideBarTriggerInner).append($menuMobileSideBarTriggerIcon);
        $($menuMobileSideBarTrigger).append($menuMobileSideBarTriggerInner);
        $($menuMobileSideBarContainer).append($menuMobileSideBarTrigger);
        // $('.que-somos-menu-col').append($menuMobileSideBarContainer);
        $('.quem-somos-content').first().prepend($menuMobileSideBarContainer);

        $($menuMobileSideBarTrigger).on('click',function(){
            // alert('test');
            $($body).toggleClass('show-mobile-menu-side-bar');
            // $('.quem-somos-menu').removeClass('fade-out');
            // $('.quem-somos-menu').addClass('fade-in');
            $('.que-somos-menu-col').removeClass('fade-out');
            $('.que-somos-menu-col').addClass('fade-in');
        });
        

    }
})(window, document, jQuery);