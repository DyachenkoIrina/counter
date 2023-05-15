let button = document.querySelector(".counter_btn");
let reset = document.querySelector(".counter_reset");
let counterText = document.querySelector(".counter");
let counter = 0;

button.addEventListener("click", function () {
  counter = counter + 1;
  counterText.innerText = counter;
});
reset.addEventListener("click", function () {
  counter = counter * 0;
  counterText.innerText = counter;
});
