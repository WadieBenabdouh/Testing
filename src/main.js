const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");

icon1.addEventListener("click", function () {
  icon1.classList.toggle("clicked");
});

icon2.addEventListener("click", function () {
  icon2.classList.toggle("clicked");
});
