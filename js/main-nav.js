var btn = document.querySelector(".main-nav__btn");
var menu = document.querySelector(".main-nav__list-wrap");

btn.addEventListener("click", function(event) {
 event.preventDefault();
  menu.classList.toggle("main-nav__list-wrap--opened");
  btn.classList.toggle("main-nav__btn-close");
});

