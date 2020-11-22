var owl = $('.owl-carousel');

owl.owlCarousel({
    items:4,
    loop:true,
    margin:5,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    smartSpeed :10000,
    nav: true
    // navText: ["<i class='fas fa-angle-double-left'></i>", "<i class='fas fa-angle-double-right'></i>"]
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})