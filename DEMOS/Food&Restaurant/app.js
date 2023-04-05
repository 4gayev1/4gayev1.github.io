$('.home').owlCarousel({
    loop: true,
    items: 1,
    dots:false,
    animateOut: 'fadeOut',
    autoplay:true,
autoplayTimeout:3000
});


$('.tes').owlCarousel({
    loop: true,
    items: 1,
    animateOut: 'fadeOut'
});


AOS.init();

var count = 0;

$(window).scroll(function(){
    $('nav').removeClass('mt-3',$(this).scrollTop()>50);
    $('nav').toggleClass('bg-dark',$(this).scrollTop()>50);
    $('.nav-main-div').toggleClass( "bg-dark",$(this).scrollTop()>50 );
})

$('.navbar-toggler').click(function(){
    count+=1;
    if($('nav').hasClass("bg-dark")){
        if(count%2==0){
            $('nav').removeClass('bg-dark');
        }
    }
    else{
        $('nav').toggleClass('bg-dark');
    }
});

