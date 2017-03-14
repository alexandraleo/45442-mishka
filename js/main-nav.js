var btn = document.querySelector(".main-nav__btn");
var menu = document.querySelector(".main-nav__list-wrap");

btn.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.toggle("main-nav__list-wrap--opened");
  btn.classList.toggle("main-nav__btn--close");
});

var basket = document.querySelector(".modal-show");
var modal = document.querySelector(".modal-window");
var overlay = document.querySelector(".overlay");
var els = document.getElementsByClassName("modal-show");

for (i=0 ; i<els.length ; i++ ) {
  els[i].addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.toggle("overlay--shown");
  modal.classList.toggle("modal-window--opened");
});
}
