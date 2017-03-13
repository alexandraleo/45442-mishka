var openBtn = document.querySelector(".main-nav__btn-open");
var menu = document.querySelector(".main-nav__list-wrap");
var closeBtn = document.querySelector(".main-nav__btn-close");

openBtn.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.add("main-nav__list-wrap--opened");
});
closeBtn.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.remove("main-nav__list-wrap--opened");
});
