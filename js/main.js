$(document).ready(function(){
    $.validate({
        validateOnBlur : false,
        showHelpOnFocus : false
    });
    $(".otziv-carousel").owlCarousel({
        center: true,
        items:1,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        margin:10,
        animateOut: 'fadeOut',
        animateIn: 'flipInY'
    });
    $('#sec1').mousemove(function(e){
        var amountMovedX = (e.pageX * -1 / 12);
        var amountMovedY = (e.pageY * -1 / 12);
        
        $('#front-img').css('right', amountMovedX + 'px ').css('bottom', amountMovedY + 'px ');
        //$(this).css('background-position', amountMovedX*+1 + 'px ' + amountMovedY*+1 + 'px');
    });
    $(".bg").interactive_bg({
        strength: 25,
        scale: 1.05,
        animationSpeed: "100ms",
        contain: true,
        wrapContent: true
    });
    $('#down').hover(
        function() {
            $(this).removeClass('animated infinite bounce');
        },
        function() {
            $(this).addClass('animated infinite bounce');
        }
    );
    var video = $('#video');
    //Play/Pause control clicked
    $('#play').on('click', function() {
          video[0].play();
       return false;
    });
    $('#pause').on('click', function() {
        video[0].pause();
        return false;
    });
});
/* =================================
===  WOW ANIMATION             ====
=================================== */
wow = new WOW(
  {
    mobile: false
  });
wow.init();

// change background size on window resize
$(window).resize(function() {
    $(".bg > .ibg-bg").css({
        width: $(window).outerWidth(),
        height: $(window).outerHeight()
    });
});