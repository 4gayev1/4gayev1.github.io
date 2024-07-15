setTimeout(function(){
    $('.preloader').addClass("preloader-opacity");},2000);


const button = document.querySelector('.submit-button'),
    stateMsg = document.querySelector('.pre-state-msg');

const projectsDiv = document.getElementsByClassName("swiper-wrapper")[0];
var projectsHTML = "";

const projects= [{
    "project-title": "La Collection",
    "used-technologies": "React,Redux,Hooks,API,Bootstrap",
    "projectUrl": "https://la-collection.netlify.app/",
    "githubUrl": "https://github.com/4gayev1/La-Collection-ReactJS",
    "imgSrc": "DemosPreview/La_Collection.png"
},
{
    "project-title": "Spotify Clone",
    "used-technologies": "React,Hooks,TailwindCSS",
    "projectUrl": "https://react-spotify-clone41.netlify.app/",
    "githubUrl": "https://github.com/4gayev1/Spotify-Clone-React",
    "imgSrc": "DemosPreview/Spotify-Clone_React.png"
},
{
    "project-title": "Movie DB",
    "used-technologies": "React,Hooks,API,CSS",
    "projectUrl": "https://react-movietmdb-app.netlify.app/",
    "githubUrl": "https://github.com/4gayev1/React-moviedb-app",
    "imgSrc": "DemosPreview/React-movietmdb-app.png"
},
{
    "project-title": "Crypto Currency App",
    "used-technologies": "React,Axios,API,CSS",
    "projectUrl": "https://react-currency.netlify.app/",
    "githubUrl": "https://github.com/4gayev1/Crypto-Currency-app",
    "imgSrc": "DemosPreview/Cryptocurrencyreview.PNG"
},
{
    "project-title": "SEO & Marketing",
    "used-technologies": "HTML,CSS,BOOTSTRAP,JS",
    "projectUrl": "DEMOS/SEO&Marketing/SEO&Marketing.html",
    "githubUrl": "https://github.com/4gayev1/marketing-template-website",
    "imgSrc": "DemosPreview/SEO&Marketing.png"
},
{
    "project-title": "Food & Restaurants",
    "used-technologies": "HTML,CSS,JS,JQuery",
    "projectUrl": "DEMOS/Food&Restaurant/index.html",
    "githubUrl": "https://github.com/4gayev1/marketing-template-website",
    "imgSrc": "DemosPreview/Food&Restaurant.png"
}
]

const updateButtonMsg = function () {
    button.classList.add('state-1', 'animated');

    setTimeout(finalButtonMsg, 2000);
};

const finalButtonMsg = function () {
    button.classList.add('state-2');
};
button.addEventListener('click', updateButtonMsg);


projects.map(project=>{
projectsHTML+=`
<div class="slider-item-container item">
  <div class="slider-item">
    <div class="item-detail">
      <p class="project-title">${project["project-title"]}</p>
      <p class="used">Used - ${project["used-technologies"]}</p>
      <a href="${project["projectUrl"]}" target="__blank">Demo</a><br>
      <a href="${project["githubUrl"]}" target="__blank">Download</a>
    </div>
    <img class="slider-img" src="${project["imgSrc"]}" alt="">
  </div>
</div>
`});

projectsDiv.innerHTML=projectsHTML

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
        $(".icons").css("fill","#FFFFFF");
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
        $(".icons").css("fill","#000000");
        $(".slider-items").css("border","1px solid #39404f");
    }
});


$('.swiper-wrapper').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav:false,
    dots:false,
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

  

