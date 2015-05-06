$(document).ready(function(){

    var naviBGColor = "#121212";

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



    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 500) {
            //if it is the first time get scroll 500
            if( !$('.navi').hasClass('my-fade-in') ){

                $('.navi').removeClass('my-fade-out');
                $('.navi').addClass('my-fade-in');
                $('.navi').css( "background-color", naviBGColor );

            }
            
        } else {
            //if the screen is already scrolled down
            if( $('.navi').hasClass('my-fade-in') ){

                $('.navi').removeClass('my-fade-in');
                $('.navi').addClass('my-fade-out');
                $('.navi').css( "background-color", "transparent" );
            }
            

        }

    }).scroll();

});




