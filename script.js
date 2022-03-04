setTimeout(function(){
    $('.preloader').addClass("preloader-opacity");},2000);


const button = document.querySelector('.submit-button'),
    stateMsg = document.querySelector('.pre-state-msg');

const updateButtonMsg = function () {
    button.classList.add('state-1', 'animated');

    setTimeout(finalButtonMsg, 2000);
};

const finalButtonMsg = function () {
    button.classList.add('state-2');
};
button.addEventListener('click', updateButtonMsg);


$('input[name=checkbox]').change(function () {
    if ($(this).is(':checked')) {
        $("body").css("background-color","#131417");
        $("body").css('background-image','url("dark.png")');
        $("nav").removeClass( "navbar-light bg-light");
        $("nav").addClass( "navbar-dark bg-dark");
        $(".text").css("color","#f8f9fa");
        $(".text-pro").css("color","#f8f9fa");
        $("hr").css("background-color","white");
        $(".nav-log").attr("src", "logo1-white.png");
        $(".social-icon-git").attr("src","/icons/icons8-github-50-white.png");
        $(".social-icon-link").attr("src","/icons/icons8-linkedin-50-white.png");
        $(".social-icon-fb").attr("src","/icons/icons8-facebook-50-white.png");
        $(".social-icon-ins").attr("src","/icons/icons8-instagram-50-white.png");
        $(".slider-items").css("border","1px solid #fff");
    } else {
        $("body").css("background-color","#ffffff");
        $("body").css('background-image','url("white.jpg")');
        $("nav").removeClass( "navbar-dark bg-dark");
        $("nav").addClass( "navbar-light bg-light");
        $(".text").css("color","black");
        $(".text-pro").css("color","#FFCC00");
        $("hr").css("background-color","black");
        $(".nav-log").attr("src","logo1.png");
        $(".footer-div").css("background-color", "#6c757d");
        $(".social-icon-git").attr("src","/icons/icons8-github-50.png");
        $(".social-icon-link").attr("src","/icons/icons8-linkedin-50.png");
        $(".social-icon-fb").attr("src","/icons/icons8-facebook-50.png");
        $(".social-icon-ins").attr("src","/icons/icons8-instagram-50.png");
        $(".slider-items").css("border","1px solid #39404f");
    }
});


$('.swiper-wrapper').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        1024:{
          items:2,
      },
        1440:{
            items:3,
        },
        2560:{
            items:5,
            nav:true,
            loop:false
        }
    }
  });

