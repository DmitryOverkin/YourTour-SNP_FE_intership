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

// Изменение цвета шрифта при выборе места путешествия

const selectElement = document.querySelector(".take_your_tour__form-select");
const form = document.querySelector(".take_your_tour__form");

selectElement.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  console.log(selectedValue);
  if (selectedValue) {
    selectElement.classList.add("selected");
  } else {
    selectElement.classList.remove("selected");
  }
});

form.addEventListener("reset", () => {
  selectElement.classList.remove("selected");
});

// Валидация номера телефона

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  let formattedValue = "+7 (";

  if (value.length > 1) {
    formattedValue += value.substring(1, 4);
  }

  if (value.length >= 5) {
    formattedValue += ") " + value.substring(4, 7);
  }

  if (value.length >= 8) {
    formattedValue += "-" + value.substring(7, 9);
  }

  if (value.length >= 10) {
    formattedValue += "-" + value.substring(9, 11);
  }

  e.target.value = formattedValue;
});
