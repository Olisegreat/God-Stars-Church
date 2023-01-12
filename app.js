const menuBar = document.querySelector(".custom_menu-btn")
const mainMenu = document.querySelector(".overlay")
const sliderDivs = document.querySelectorAll(".each-slide")
const topSlide = document.querySelectorAll(".slider_and_vision")

const slider1 = document.querySelectorAll(".slider1");
let position = 0;

function showSlider() {
  slider1.forEach((p) => {
    p.style.display = "none";
  });
  position++;
  if (position > slider1.length) {
    position = 1;
  }
  slider1[position - 1].style.display = "block";
}

setInterval(() => {
  showSlider();
}, 3000);


let slideNow = 0;

doFunction()

function doFunction() {
    slideNow++
    for (let index = 0; index < sliderDivs.length; index++) {
        const element = sliderDivs[index];
    
        element.style.display = "none"

        if (slideNow > sliderDivs.length) {
            slideNow = 1;
        }  
    }
      sliderDivs[slideNow -1].style.display = "block"
} 
setInterval(() => {
    doFunction()   
}, 5000);

// mobile navbar 
menuBar.addEventListener("click",()=>{
  menuBar.classList.toggle("rotate")
  mainMenu.classList.toggle("menu_width")
})