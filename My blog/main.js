$(document).ready(function ($) {

    $('.navbar-toggler').on("click", function () {
        $('.navbar-toggler span').toggleClass('active');
    });
    $(window).scroll(function () {
        var position = $('.aboutme').offset().top;
        var screenTop = $(document).scrollTop();
        if (screenTop >= position) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
        if (screenTop >= $('header').offset().top) {
            $('.navbar-nav li').removeClass('active');
            $('.navbar-nav li:nth-child(1)').addClass('active');
        }
        if (screenTop >= $('.aboutme').offset().top) {
            $('.navbar-nav li').removeClass('active');
            $('.navbar-nav li:nth-child(2)').addClass('active');
        }
        if (screenTop >= $('.project').offset().top) {
            $('.navbar-nav li').removeClass('active');
            $('.navbar-nav li:nth-child(3)').addClass('active');
        }
        if (screenTop >= $('.contact').offset().top) {
            $('.navbar-nav li').removeClass('active');
            $('.navbar-nav li:nth-child(5)').addClass('active');
        }
    });

    $('.navbar-nav li').on("click", function () {
        var index = $(this).index();
        switch (index) {
            case 0:
                var target = $('header').offset().top;
                $('body').animate({
                    scrollTop: target
                }, '500');
                break;
            case 1:
                var target = $('.aboutme').offset().top;
                $('body').animate({
                    scrollTop: target
                }, '500');
                break;
            case 2:
                var target = $('.project').offset().top;
                $('body').animate({
                    scrollTop: target
                }, '500');
                break;;
            case 4:
                var target = $('.contact').offset().top;
                $('body').animate({
                    scrollTop: target
                }, '500');
                break;
        }
    });
    
    var time = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.querySelector('.date span:nth-child(1)').textContent = monthNames[time.getMonth()];
    document.querySelector('.date span:nth-child(2)').textContent = time.getDate();
    document.querySelector('.date span:nth-child(3)').textContent = time.getFullYear();
    

    $('header, section, footer').css('display', 'none');
    
    
    //TimelineMax   
    hieuungload = new TimelineMax({onComplete: noidungvaodi});
    hieuungload.from($('.loading'), 0.7, {opacity: 0})
    .to($('header, section, footer'), 0.1, {opacity: 0})
    .from($('.khoiload'), 1, {scale: 2, opacity: 0})
    .to($('.khoiload'), 1, {scale: 0.3, ease: Bounce.easeOut})
    .to($('.khoiload'), 1, {scale: 1, ease: Elastic.easeOut.config(1, 0.3)})
    .to($('.khoiload'), 1, {scale: 0.3, ease: Bounce.easeOut})
    .to($('.khoiload'), 1, {scale: 1, ease: Elastic.easeOut.config(1, 0.3)})
    .to($('.khoiload'), 1, {scale: 10, opacity: 0, ease:Power1.easeOut})
    .to($('.loading'), 1, {x: -2200, ease:Power4.easeOut})

    
    hieuungnoidung = new TimelineMax({paused: true});
    hieuungnoidung.to($('header, section, footer'), 0.1, {opacity: 1})
    .from($('.navbar-brand'), 1.5, {scale: 2.5, ease: Elastic.easeOut.config(1, 0.3)})
    .staggerFrom($('.nav-item'), 1.5, {y: -200, ease: Elastic.easeOut.config(1, 0.3)}, 0.4)
    .from($('.goTW'), 2, {x: -2000, ease: Bounce.easeOut}, "-=3")
    .from($('.center-it'), 1.3, {y: 500, ease:Power1.easeOut}, "-=3")
    
    
    function noidungvaodi() {
        hieuungnoidung.play();      
        $('header, section, footer').css('display', 'block');
    }
    
    new WOW().init();
    

});
