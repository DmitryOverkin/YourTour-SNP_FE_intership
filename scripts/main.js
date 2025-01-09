// Добавление активной ссылки

const menuItemLinks = document.querySelectorAll(".choose-tour__list-item a");

menuItemLinks.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    menuItemLinks.forEach((link) => {
      link.classList.remove("choose-tour__link_active");
      link.classList.add("choose-tour__link");
    });

    item.classList.add("choose-tour__link_active");
    item.classList.remove("choose-tour__link");
  });
});

// Изменнение header при скролле

const header = document.querySelector(".header__inner");
const logo = document.querySelector(".logo__img");
const headerLinkScroll = document.querySelectorAll(".header__nav-item a");
const headerContactLink = document.querySelector(".header__contact a");

function updateHeaderState(isScrolled) {
  header.classList.toggle("header_scroll", isScrolled);
  logo.classList.toggle("logo__img_black", isScrolled);

  headerContactLink.classList.toggle("header__contact-link", !isScrolled);
  headerContactLink.classList.toggle(
    "header__contact-link--scroll",
    isScrolled
  );

  headerLinkScroll.forEach((link) => {
    link.classList.toggle("header__nav-link", !isScrolled);
    link.classList.toggle("header__nav-link--scroll", isScrolled);
  });
}

window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY > 450;
  updateHeaderState(isScrolled);
});

// Изменение цвета шрифта при выборе места путешествия

const selectElement = document.querySelector(".take-tour__form-select");
const form = document.querySelector(".take-tour__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Форма отправлена");
  form.reset();
});

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
