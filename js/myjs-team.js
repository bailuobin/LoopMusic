$(document).ready(function(){

    $('.navi ul li a').on('click', function() {
        console.log(scrollAnchor);

        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 100;

        $('body,html').animate(
            {
                scrollTop: scrollPoint
            }, 
            800, 
            'easeInOutExpo'
        );

        return false;
    });

});




