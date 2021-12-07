const items = document.querySelectorAll(".items");
function activeItem() {
  items.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
items.forEach((item) => item.addEventListener("click", activeItem));
