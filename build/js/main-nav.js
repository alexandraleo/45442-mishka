(function(){
  var btn = document.querySelector(".main-nav__btn");
  var menu = document.querySelector(".main-nav__items-links");
  var user = document.querySelector(".main-nav__user-links");
  var logo = document.querySelector(".logo");

  menu.classList.remove("main-nav__items-list--no-js");
  user.classList.remove("main-nav__items-list--no-js");
  logo.classList.remove("logo--no-js");
  btn.classList.remove("main-nav__btn--no-js");
  btn.addEventListener("click", function(event) {
    event.preventDefault();
    menu.classList.toggle("main-nav__items-list--opened");
    user.classList.toggle("main-nav__items-list--opened");
    btn.classList.toggle("main-nav__btn--open");
    btn.classList.toggle("main-nav__btn--close");
  });
})();
