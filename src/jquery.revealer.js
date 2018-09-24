(function ($) {

    var _elements,
        _options;

    var methods = {
        init: function (elements, options) {
            _elements = elements;
            _options = options;

            methods.bind();
        },
        bind: function () {
            $(window).scroll(function () {
                methods.animate(_elements, _options);
            });
            $(window).trigger('scroll');
        },
        animate: function (elements, options) {

            var viewHeight = $(window).height(),
                viewTopOffset = $(window).scrollTop(),
                viewBottomOffset = (viewTopOffset + viewHeight);

            $.each(elements, function () {
                var $this = $(this),
                    elementAnimation = $this.data('animate'),
                    elementOffset = $this.data('offset'),
                    elementDelay = $this.data('delay'),
                    elementDuration = $this.data('duration'),
                    elementIteration = $this.data('iteration'),
                    elementHeight = $this.outerHeight(),
                    elementTopOffset = $this.offset().top,
                    elementBottomOffset = (elementTopOffset + elementHeight);

                if (elementOffset) {
                    elementTopOffset += elementOffset;
                    elementBottomOffset -= elementOffset;
                }

                $this.css({
                    'animation-duration': elementDuration,
                    '-webkit-animation-duration': elementDuration
                });
                $this.css({
                    'animation-delay': elementDelay,
                    '-webkit-animation-delay': elementDelay
                });
                $this.css({
                    'animation-iteration-count': elementIteration,
                    '-webkit-animation-iteration-count': elementIteration
                });

                if ((elementBottomOffset >= viewTopOffset) && (elementTopOffset <= viewBottomOffset)) {
                    $this.css('visibility', 'visible');
                    $this.addClass(elementAnimation);
                    $this.addClass('animated');
                }
            });
        }
    };

    jQuery.fn.revealer = function (options) {
        options = $.extend({
            mobile: false
        }, options);

        if (
            options.mobile === false
            && /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        ) {
            return false;
        }

        methods.init(this, options);

    };
})(jQuery);
