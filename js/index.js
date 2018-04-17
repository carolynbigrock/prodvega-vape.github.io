$(document).ready(function() {
    $('.product-listing-wrap .product-item').each(function(index){
        if(index >=3){
            $(this).addClass('show-pdt-desktop');
        }
    });
    $('#where-to-find-section .where-to-find-location-block').each(function(index){
        if(index >=4){
            $(this).addClass('show-pdt-desktop');
        }
    });
    $('#header, #footer').find('.transition-link').each(function(){
        $(this).on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                var top_distance = $(hash).offset().top - 91;
                $('html, body').animate({
                    scrollTop: top_distance
                }, 800, function(){           
                });
            } 
        });
    });
    var stickyOffset = $('#header').height();
    $(window).scroll( function(){
        var sticky = $('#header'),
            scroll = $(window).scrollTop();
        if (scroll >= stickyOffset) sticky.addClass('sticky');
        else sticky.removeClass('sticky');
        $('.page-section').each( function(i){
            var bottom_of_object = ($(this).offset().top + $(this).outerHeight())/2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){           
                $(this).addClass('in-view');
            }
            else{
                $(this).removeClass('in-view');
            }
        });
    }); 
}); 