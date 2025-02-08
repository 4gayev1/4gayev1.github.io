window.onload = function () {
  $(".preloader").addClass("preloader-opacity");
};

const year = new Date().getFullYear()

const footerDiv = document.querySelector(".footer-div")
footerDiv.innerHTML = `Copyright ©${year} All rights reserved`

const button = document.querySelector(".submit-button"),
  stateMsg = document.querySelector(".pre-state-msg");

const projectsDiv = document.getElementsByClassName("swiper-wrapper")[0];
var projectsHTML = "";

const projects = [
  {
    "project-title": "Artes",
    "used-technologies": "Testing framework",
    websiteUrl: "https://www.npmjs.com/package/artes",
    githubUrl: "https://github.com/4gayev1/Artes/tree/main",
    imgSrc: "./imgs/demosPreview/artes.png",
  },
  {
    "project-title": "La Collection",
    "used-technologies": "React,Redux,Hooks,API,Bootstrap",
    websiteUrl: "https://la-collection.netlify.app/",
    githubUrl: "https://github.com/4gayev1/La-Collection-ReactJS",
    imgSrc: "./imgs/demosPreview/La_Collection.png",
  },
  {
    "project-title": "Spotify Clone",
    "used-technologies": "React,Hooks,TailwindCSS",
    websiteUrl: "https://react-spotify-clone41.netlify.app/",
    githubUrl: "https://github.com/4gayev1/Spotify-Clone-React",
    imgSrc: "./imgs/demosPreview/Spotify-Clone_React.png",
  },
  {
    "project-title": "Movie DB",
    "used-technologies": "React,Hooks,API,CSS",
    websiteUrl: "https://react-movietmdb-app.netlify.app/",
    githubUrl: "https://github.com/4gayev1/React-moviedb-app",
    imgSrc: "./imgs/demosPreview/React-movietmdb-app.png",
  },
  {
    "project-title": "Crypto Currency App",
    "used-technologies": "React,Axios,API,CSS",
    websiteUrl: "https://react-currency.netlify.app/",
    githubUrl: "https://github.com/4gayev1/Crypto-Currency-app",
    imgSrc: "./imgs/demosPreview/Cryptocurrencyreview.PNG",
  },
  {
    "project-title": "Marketing Website Template",
    "used-technologies": "HTML,CSS,BOOTSTRAP,JS",
    websiteUrl: "https://marketing-1lx.pages.dev/",
    githubUrl: "https://github.com/4gayev1/marketing-template-website",
    imgSrc: "./imgs/demosPreview/SEO&Marketing.png",
  },
  {
    "project-title": "Restaurant Website Template",
    "used-technologies": "HTML,CSS,JS,JQuery",
    websiteUrl: "https://restaurant-cs5.pages.dev/",
    githubUrl: "https://github.com/4gayev1/restaurant-template-website",
    imgSrc: "./imgs/demosPreview/Food&Restaurant.png",
  }
];

const updateButtonMsg = function () {
  button.classList.add("state-1", "animated");

  setTimeout(finalButtonMsg, 2000);
};

const finalButtonMsg = function () {
  button.classList.add("state-2");
};
button.addEventListener("click", updateButtonMsg);

projects.map((project) => {
  projectsHTML += `
        <div class="slider-item-container item">
        <div class="slider-item">
            <div class="item-detail">
            <p class="project-title">${project["project-title"]}</p>
            <p class="used">Used - ${project["used-technologies"]}</p>
            <a href="${project["websiteUrl"]}" target="__blank"><p class="used">Live Demo</p></a>
            <a class="used" href="${project["githubUrl"]}" target="__blank"><p class="used">Github URL</p></a>
            </div>
            <img class="slider-img" src="${project["imgSrc"]}" alt="">
        </div>
        </div>
`;
});

projectsDiv.innerHTML = projectsHTML;

$("input[name=checkbox]").change(function () {
  if ($(this).is(":checked")) {
    $("body").css("background-color", "#131417");
    $("body").css("background-image", 'url("./imgs/dark.png")');
    $("nav").removeClass("navbar-light bg-light");
    $("nav").addClass("navbar-dark bg-dark");
    $(".text").css("color", "#f8f9fa");
    $(".text-pro").css("color", "#f8f9fa");
    $("hr").css("background-color", "white");
    $(".nav-log").attr("src", "./imgs/logo1-white.png");
    $(".icons").css("fill", "#FFFFFF");
    $(".techIcon").css("color", "#fff");
    $(".slider-items").css("border", "1px solid #fff");
  } else {
    $("body").css("background-color", "#ffffff");
    $("body").css("background-image", 'url("./imgs/white.jpg")');
    $("nav").removeClass("navbar-dark bg-dark");
    $("nav").addClass("navbar-light bg-light");
    $(".text").css("color", "black");
    $(".text-pro").css("color", "#FFCC00");
    $("hr").css("background-color", "black");
    $(".nav-log").attr("src", "./imgs/logo1.png");
    $(".footer-div").css("background-color", "#6c757d");
    $(".icons").css("fill", "#000000");
    $(".techIcon").css("color", "#000");
    $(".slider-items").css("border", "1px solid #39404f");
  }
});

$(".swiper-wrapper").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  nav: false,
  dots: false,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    1024: {
      items: 2,
    },
    1440: {
      items: 4,
    },
    2560: {
      items: 5,
      nav: true,
      loop: false,
    },
  },
});



async function getVisitorData() {
  let locationData;
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function getCurrentPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  async function getLocation() {
    try {
      const pos = await getCurrentPosition();
      const crd = pos.coords;
      return {
        latitude: crd.latitude,
        longitude: crd.longitude,
        accuracy: crd.accuracy
      };
    } catch (err) {
      console.log(err);
      return null;
    }
  }


  try {
    const location = await getLocation();
    if (!location) {
      const ipResponse = await fetch("https://api.ipify.org/?format=json");
      const ipData = await ipResponse.json();
      
      const request = await fetch(
        `https://location-server-gxue.onrender.com/location/${ipData.ip}`
      );
      locationData = await request.json();
      locationData.ip = ipData.ip; 
    } else {
      locationData = location;
    }
    
    await fetch("https://formsubmit.co/ajax/aghayevvahid1@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: "New Visitor",
        message: `
        Precise Location: ${location ? "Yes" : "No"} 
          Visitors address: https://gps-coordinates.org/my-location.php?lat=${locationData.latitude}&lng=${locationData.longitude}
          Country: ${locationData["country_name"] || "Unknown"} | ${locationData.city || "Unknown"} | ${locationData.zip || "Unknown"}
          IP: ${locationData.ip || "Unavailable"}
          Latitude | Longitude: ${locationData.latitude}, ${locationData.longitude}
          Accuracy: ${locationData.accuracy}
          Radius: ${locationData.radius || "Unknown"}
        `,
      }),
    });
  } catch (error) {
    console.error("Error during data submission:", error);
  }
}

 getVisitorData();


  