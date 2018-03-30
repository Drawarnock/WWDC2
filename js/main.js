(function($) {

    $(document).ready(function() {
        var $nav = $('.navigation');
        var navOffsetY = $nav.offset().top;
        var $innerAnchors = $('a[href^="#"]');
        var stickyNav = function() {
            var scrolled = $(document).scrollTop();
            if (scrolled > navOffsetY) $nav.addClass('navigation--sticky');
            else $nav.removeClass('navigation--sticky');
        }

        if ($innerAnchors.length > 0) {
            $innerAnchors.on('click', function(e) {
                e.preventDefault();
                const href= $(this).attr('href');
                const $targetElement = $(href); 
                const targetToScroll = $targetElement.offset().top - $nav.height();
                $('html, body').animate({
                    scrollTop:targetToScroll
                    }, 1000);
                });
            }

            $('.navigation__toggle').on('click', function() {
                $(this).toggleClass('navigation__toggle--active');
            });

        stickyNav();
        $(window).scroll(function() { stickyNav() });
    });


 })(jQuery);