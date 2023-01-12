const hambuger = document.querySelector(".hambuger");
const mobileMenu = document.querySelector(".mobl-menu");
const closeIcon = document.querySelector(".close-icon");

hambuger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});
closeIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});
