$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    navText: ['<i class="fa-solid fa-angle-left fa-2x"></i>', '<i class="fa-solid fa-angle-right fa-2x"></i>'],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            slideBy:3,
            // nav: true,
            smartSpeed: 100
        }
    }
})