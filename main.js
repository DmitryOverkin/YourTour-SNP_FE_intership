// Добавление активной ссылки

const menuItemLinks = document.querySelectorAll(
  ".choose_your_tour__content-list-item-link"
);

menuItemLinks.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    menuItemLinks.forEach((link) => link.classList.remove("active"));

    item.classList.add("active");
  });
});

// Изменнение header при скролле

const header = document.querySelector(".header");
const logo = document.querySelector(".logo_img");

window.addEventListener("scroll", function () {
  if (this.scrollY > 450) {
    header.classList.add("scroll_header");
    logo.classList.add("black");
  } else {
    header.classList.remove("scroll_header");
    logo.classList.remove("black");
  }
});

const selectElement = document.querySelector(".take_your_tour__form-select");

selectElement.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  if (selectedValue) {
    selectElement.classList.add("selected");
  } else {
    selectElement.classList.remove("selected");
  }
});
