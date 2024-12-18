// Добавление активной ссылки

const menuItemLinks = document.querySelectorAll(".choose-tour__link");

menuItemLinks.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    menuItemLinks.forEach((link) =>
      link.classList.remove("choose-tour__link_active")
    );

    item.classList.add("choose-tour__link_active");
  });
});

// Изменнение header при скролле

const header = document.querySelector(".header__inner");
const logo = document.querySelector(".logo__img");

window.addEventListener("scroll", function () {
  if (this.scrollY > 450) {
    header.classList.add("header_scroll");
    logo.classList.add("logo__img_black");
  } else {
    header.classList.remove("header_scroll");
    logo.classList.remove("logo__img_black");
  }
});

// Изменение цвета шрифта при выборе места путешествия

const selectElement = document.querySelector(".take-tour__form-select");
const form = document.querySelector(".take-tour__form");

selectElement.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  if (selectedValue) {
    selectElement.classList.add("selected");
  } else {
    selectElement.classList.remove("selected");
  }
});

form.addEventListener("reset", () => {
  selectElement.classList.remove("selected");
});

// Маска номера телефона

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
