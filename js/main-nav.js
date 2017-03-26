var btn = document.querySelector(".main-nav__btn");
var menu = document.querySelector(".main-nav__items-links");
var user = document.querySelector(".main-nav__user-links");
var noJS = document.querySelector(".main-nav--no-js");
var noJSLot = document.getElementsByClassName("main-nav--no-js");

  menu.classList.remove("main-nav--no-js");
  user.classList.remove("main-nav--no-js");
  btn.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.toggle("main-nav__items-list--opened");
  user.classList.toggle("main-nav__items-list--opened");
  btn.classList.toggle("main-nav__btn--open");
  btn.classList.toggle("main-nav__btn--close");
});
