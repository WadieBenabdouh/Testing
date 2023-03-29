const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");

icon1.addEventListener("click", function () {
  icon1.classList.add("clicked");
  icon2.classList.remove("clicked");
});

icon2.addEventListener("click", function () {
  icon2.classList.add("clicked");
  icon1.classList.remove("clicked");
});

document.addEventListener("click", function (event) {
  if (!event.target.closest(".payment-method")) {
    icon1.classList.remove("clicked");
    icon2.classList.remove("clicked");
  }
  //LINE 14 =  If the user clicks outside the target element, the event listener can then close the element.
});
