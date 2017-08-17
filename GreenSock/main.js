$(document).ready(function($){
//    TweenMax.to($('.test1'), 1, {y: 300, opacity: 1, backgroundColor: 'red'});
//    TweenMax.from($('.test1'), 1, {y: 300, opacity: 1, backgroundColor: 'red'});
//        TweenMax.fromTo($('.test1'), 2, {x:-400}, {x:400})
//    TweenMax.staggerTo($('.btn'), 2, {x: 300}, 0.4);
//    TweenMax.staggerFrom($('.btn'), 2, {y: 100, ease: Bounce.easeOut}, 0.3);
    cd = new TimelineMax();
    cd.to($('.test1'), 1, {x: -300})
        .to($('.test1'), 1, {y: 300}, "+=1")
});
