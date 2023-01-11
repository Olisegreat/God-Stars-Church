const hambuger = document.querySelector(".hambuger");
const mobileMenu = document.querySelector(".mobl-menu");
const closeIcon = document.querySelector(".close-icon");

hambuger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});
closeIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});


// For Location map inverter

const map = document.querySelector(".map")
const link = document.querySelector(".menu-link")
let time = new Date().getHours()

if (time < 20) {
  map.style.filter = "invert(0%)"
}
else{
  map.style.filter = "invert(100%)"
}

console.log(time);
console.log(map.style);