const accordion_item = document.querySelectorAll(".accordion-item");
const accordion_button = document.querySelectorAll(".accordion-button");
const arrow = document.querySelectorAll(".arrow");
const accordion_content = document.querySelectorAll(".accordion-content");

accordion_item.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      accordion_item.forEach((item) => item.classList.remove("active"));
      item.classList.toggle("active");
    }
  });
});
