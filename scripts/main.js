// Добавление активной ссылки

const menuItemLinks = document.querySelectorAll(".choose-your-tour__link");

menuItemLinks.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    menuItemLinks.forEach((link) =>
      link.classList.remove("choose-your-tour__link--active")
    );

    item.classList.add("choose-your-tour__link--active");
  });
});

// Изменнение header при скролле

const header = document.querySelector(".intro__header");
const logo = document.querySelector(".logo__img");

window.addEventListener("scroll", function () {
  if (this.scrollY > 450) {
    header.classList.add("intro--scroll");
    logo.classList.add("logo__img--black");
  } else {
    header.classList.remove("intro--scroll");
    logo.classList.remove("logo__img--black");
  }
});

// Изменение цвета шрифта при выборе места путешествия

const selectElement = document.querySelector(".take-your-tour__form-select");
const form = document.querySelector(".take-your-tour__form");

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
