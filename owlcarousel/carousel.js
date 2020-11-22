var owl = $('.owl-carousel');

owl.owlCarousel({
    items:3,
    loop:true,
    margin:5,
    merge:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    smartSpeed :2500,
    nav: true,
    navText: [$('.am-prev'),$('.am-next')]
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
