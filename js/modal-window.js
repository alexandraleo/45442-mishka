var order = document.querySelector(".btn-order");
var basket = document.querySelector(".product__basket-btn");
var modal = document.querySelector(".modal-window");
var overlay = document.querySelector(".overlay");

order.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.toggle("modal-window--opened");
  overlay.classList.toggle("overlay--shown");
});
