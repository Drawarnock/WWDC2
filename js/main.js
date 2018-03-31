(function($) {

    $(document).ready(function() {
        var $nav = $('.navigation');
        //var navOffsetY = $nav.offset().top;
        var $innerAnchors = $('a[href^="#"]');
        var stickyNav = function() {
            var scrolled = $(document).scrollTop();
            if (scrolled > 0) $nav.addClass('navigation--sticky');
            else $nav.removeClass('navigation--sticky');
        }

        if ($innerAnchors.length > 0) {
            $innerAnchors.on('click', function(e) {
                e.preventDefault();
                $nav.removeClass('navigation--mobile');
                $('.navigation__toggle').removeClass('navigation__toggle--active');
                const href= $(this).attr('href');
                const $targetElement = $(href); 
                const targetToScroll = $targetElement.offset().top;
                $('html, body').animate({
                    scrollTop:targetToScroll
                    }, 1000);
                });
            }

            $('.navigation__toggle').on('click', function() {
                $(this).toggleClass('navigation__toggle--active');
                $nav.toggleClass('navigation--mobile');
            });

        stickyNav();
        $(window).scroll(function() { stickyNav() });
    });


 })(jQuery);