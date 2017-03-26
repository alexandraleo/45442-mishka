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

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains("modal-window--opened")) {
      overlay.classList.remove("overlay--shown");
      modal.classList.remove("modal-window--opened");
    }
  }
});

overlay.addEventListener("click", function(event) {
    if (modal.classList.contains("modal-window--opened")) {
      overlay.classList.remove("overlay--shown");
      modal.classList.remove("modal-window--opened");
    }
});
