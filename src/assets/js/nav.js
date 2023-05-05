const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav__menu");

const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");

navToggle.addEventListener("click", function () {
  navMenu.classList.add("block");
  navMenu.classList.remove("hidden");
});
navClose.addEventListener("click", function () {
  navMenu.classList.remove("block");
  navMenu.classList.add("hidden");
});
