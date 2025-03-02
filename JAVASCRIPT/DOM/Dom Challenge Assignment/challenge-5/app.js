const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

const carouselTrack = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const carouselNav = document.getElementById("carouselNav");
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");

let state = 0;

carouselTrack.style.backgroundImage = `url(${images[state].url})`;
caption.textContent = `${images[state].caption}`;
carouselTrack.classList.add(`carousel-slide`);


for (let i = 0; i < images.length; i++) {
  const indicator = document.createElement("div");
  indicator.classList.add("carousel-indicator");
  carouselNav.appendChild(indicator);
  carouselNav.children[state].classList.add(`active`);
  indicator.addEventListener("click", function () {
    if (state == i) {
    } else {
      state = i;
      updateImageStatus(state);
    }
  });
}

nextButton.addEventListener("click", function () {
  state = (state + 1) % images.length;
  updateImageStatus(state);
});

prevButton.addEventListener("click", function () {
  if (state == 0) {
    state = images.length - 1;
  } else {
    state--;
  }
  updateImageStatus(state);
});

function updateImageStatus(state) {
  for (let i = 0; i < carouselNav.children.length; i++) {
    carouselNav.children[i].classList.remove("active");
  }
  carouselTrack.style.backgroundImage = `url(${images[state].url})`;
  caption.textContent = `${images[state].caption}`;
  carouselNav.children[state].classList.add(`active`);
}

let autoplaystate = false;
let intervalid = null;
let countdown = 4;
let countdownid = null;

autoPlayButton.addEventListener("click", function(){

  if(!autoplaystate){
    autoplaystate = true
    function a(){
      state = (state + 1) % images.length;
      updateImageStatus(state);
      countdown = 4;
    }
    function count(){
      timerDisplay.textContent = `Next Slide In ${countdown}s`;
      countdown--;
    }
    count();
    intervalid = setInterval(a,5000);
    countdownid = setInterval(count, 1000);
    autoPlayButton.textContent = "Stop Auto Play";
  }else{
    autoplaystate = false;
    clearInterval(intervalid);
    clearInterval(countdownid);
    autoPlayButton.textContent = "Start Auto Play";
    timerDisplay.textContent = "";
  }
  

})





// const indicator1 = document.createElement("div");
// indicator1.classList.add(`carousel-indicator`);
// const indicator2 = document.createElement("div");
// indicator2.classList.add(`carousel-indicator`);
// const indicator3 = document.createElement("div");
// indicator3.classList.add(`carousel-indicator`);
// const indicator4 = document.createElement("div");
// indicator4.classList.add(`carousel-indicator`);

// carouselNav.appendChild(indicator1);
// carouselNav.appendChild(indicator2);
// carouselNav.appendChild(indicator3);
// carouselNav.appendChild(indicator4);



// for (let i = 0; i < carouselNav.children.length; i++) {
//   carouselNav.children[i].addEventListener("click", function () {
//     if (state == i) {
//     } else {
//       state = i;
//       updateImageStatus(state);
//     }
//   });
// }

// indicator1.addEventListener("click", function(){
//   if(state == 0){}
//   else{
//     state = 0;
//     updateImageStatus(state);
//   }
// });
// indicator2.addEventListener("click", function(){
//   if(state == 1){}
//   else{
//     state = 1;
//     updateImageStatus(state);
//   }
// });
// indicator3.addEventListener("click", function(){
//   if(state == 2){}
//   else{
//     state = 2;
//     updateImageStatus(state);
//   }
// });
// indicator4.addEventListener("click", function(){
//   if(state == 3){}
//   else{
//     state = 3;
//     updateImageStatus(state);
//   }
// });