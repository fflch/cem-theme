(function(window, document, $) {
  "use strict";
  if ($(".accordion").length) {
    $(".accordion .title").on("click", this, function() {
      console.log(this);

      $(this)
        .parent(".accordion")
        .toggleClass("open");
    });
  }
})(window, document, jQuery);

(function(window, document, $) {
  "use strict";
  if ($(".agenda-slider").length) {
    $(".agenda-slider>.inner div.views-element-container > div").slick({
      dots: false,
      infinite: true,
      speed: 400,
      //cssEase: 'linear',
      slidesToShow: 6,
      //lazyLoad: 'ondemand'
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
})(window, document, jQuery);

(function(window, document, $) {
    'use strict';
    if ($('.evento-fotos-slider-item').length) {
        //$('.home-publications div.home-publications-box>div.inner').slick({
        // $('.home-pesquisadores div.home-pesquisadores-box>div.row').slick({
        $('.evento-slider-foto-container div.evento-fotos-slider-box>div.row>div.views-element-container>div').slick({
            autoplay: true,
            autoplaySpeed: 6000,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: false
        });
    }
})(window, document, jQuery);
(function (window, document, $) {
  'use strict';

  var $headerNavBar = $('.header-menu');
  var $headerNavBarHeight = $headerNavBar.height();
  var $headerNavBarDistanceToTop = $headerNavBar.offset().top;

  $(window).on('scroll resize', function () {
    if ($(this).scrollTop() > $headerNavBarHeight + $headerNavBarDistanceToTop) {
      $headerNavBar.addClass('fixed');
      return;
    }
    $headerNavBar.removeClass('fixed');

  });

})(window, document, jQuery);
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
(function(window, document, $) {
    'use strict';
    if ($('.home-apoio').length) {
        $('.home-apoio div.logos>div.row').slick({
            autoplay: true,
            autoplaySpeed: 6000,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
            dots: true,
            responsive: [
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
              {
                breakpoint: 680,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
        });
    }
})(window, document, jQuery);
(function(window, document, $) {
    'use strict';
    if ($('.home-pesquisadores').length) {
        //$('.home-publications div.home-publications-box>div.inner').slick({
        // $('.home-pesquisadores div.home-pesquisadores-box>div.row').slick({
        $('.home-pesquisadores div.home-pesquisadores-box>div.row>div.views-element-container>div').slick({
            autoplay: true,
            autoplaySpeed: 6000,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: false,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4
                }
              },
              {
                breakpoint: 990,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 380,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
        });
    }
})(window, document, jQuery);
(function(window, document, $) {
    'use strict';
    if ($('.home-publications').length) {
        //$('.home-publications div.home-publications-box>div.inner').slick({
        // $('.home-publications div.home-publications-box>div.row').slick({
        $('.home-publications div.home-publications-box>div.row>div.views-element-container>div').slick({
            autoplay: true,
            autoplaySpeed: 6000,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            responsive: [
              {
                breakpoint: 990,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 450,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
        });
    }
})(window, document, jQuery);
(function(window, document, $) {
    'use strict';
    if ($('.home-slider').length) {
        $('.home-slider .wrapper>div.views-element-container>div').slick({
            autoplay: true,
            autoplaySpeed: 6000,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            responsive: [
              {
                breakpoint: 990,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
        });
    }
})(window, document, jQuery);
(function(window, document, $) {
    'use strict';
    if ($('.home-video').length) {
        // $('.home-video div.home-video-box div.inner').slick({
        // $('.home-video div.home-video-box div.inner>div.row>div.views-element-container>div').slick({
        $('.home-video div.home-video-box div.inner>div.views-element-container>div').slick({
            autoplay: true,
            autoplaySpeed: 6000,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true
        });
    }
})(window, document, jQuery);
(function (window, document, $) {
    'use strict';
    if($('.side-bar-box.inscricoes').length){
        var inscricaoValorBase = $('.inscricao-valor-total .recebe-valor').html();
        inscricaoValorBase = inscricaoValorBase.replace(',','.');
        inscricaoValorBase = +inscricaoValorBase;
        var inscricaoValorRecebe = $('.inscricao-valor-total .recebe-valor');

        var inscricaoValorTotal;

        var conviteField  = $('.convites-number');
        var conviteQtd  = $('.convites-number').attr('value');
        var conviteQtd  = +conviteQtd;
        var $btnPlus = $('.incricao-convites .number .plus');
        var $btnLow = $('.incricao-convites .number .low');

        
        $btnPlus.on('click',function(){
            conviteField.attr('value', ++conviteQtd);
        });
        $btnLow.on('click',function(){
            if(conviteQtd == 0){
                return false;
            }
            conviteField.attr('value', --conviteQtd);
        });
    }
})(window, document, jQuery);
(function (window, document, $) {
    'use strict';
    if ($('.que-somos-menu-col').length) {
        // home news
        $('.que-somos-menu-col').addClass('col-sm-4');
        $('.quem-somos-conteudo-col').addClass('col-sm-8');
        

    }
})(window, document, jQuery);
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
(function (window, document, $) {
    'use strict';


    if ($('.quem-somos-menu').length) {
        console.log($('.quem-somos-menu li.active').parent().parent().is('li'));
        
        if ( $('.quem-somos-menu li.active').parent().parent().is('li') ){
            $('.quem-somos-menu li.active').parent().parent().addClass('active')
        }
        else{
            console.log('errou');
            
        }
    }
})(window, document, jQuery);
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
(function(window, document, $) {
  "use strict";
  $(".quem-somos-conteudo-col .field_pos_doutorandos").on("click", function() {
    $(this).toggleClass("open");
  });
  $(".quem-somos-conteudo-col .field_bolsistas_e_pesquisadores").on(
    "click",
    function() {
      $(this).toggleClass("open");
    }
  );
  $(".quem-somos-conteudo-col .field_pesquisadores_associados").on(
    "click",
    function() {
      $(this).toggleClass("open");
    }
  );
  $(".quem-somos-conteudo-col .field_pesquisadores_visitantes").on(
    "click",
    function() {
      $(this).toggleClass("open");
    }
  );
})(window, document, jQuery);

(function(window, document, $) {
    'use strict';
    if ($('.resolution-slider').length) {
        $('.resolution-slider div.views-element-container>div').slick({
            autoplay: true,
            autoplaySpeed: 6000,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });
    }
})(window, document, jQuery);
/*(function (window, document, $) {
    'use strict';
})(window, document, jQuery);*/
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