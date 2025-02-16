// Добавление активной ссылки

const menuItemLinks = document.querySelectorAll(".choose-tour__button");

menuItemLinks.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    menuItemLinks.forEach((link) => {
      link.classList.remove("choose-tour__button_active");
    });

    item.classList.add("choose-tour__button_active");
  });
});

// Изменнение header при скролле

const header = document.querySelector(".header__content");
const logo = document.querySelector(".logo");
const headerLinkScroll = document.querySelectorAll(".header__nav-link");
const headerContactLink = document.querySelector(".header__contact-link");

function addStylesHeaderScroll() {
  header.classList.add("header_scroll");
  logo.classList.add("logo_black");
  headerContactLink.classList.add("header__contact-link--scroll");

  headerLinkScroll.forEach((link) => {
    link.classList.add("header__nav-link--scroll");
  });
}

function removeStylesHeaderScroll() {
  header.classList.remove("header_scroll");
  logo.classList.remove("logo_black");

  headerLinkScroll.forEach((link) => {
    link.classList.remove("header__nav-link--scroll");
  });

  headerContactLink.classList.remove("header__contact-link--scroll");
}

function scrollHeaderStyle() {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 450) {
      addStylesHeaderScroll();
    } else {
      removeStylesHeaderScroll();
    }
  });
}

scrollHeaderStyle();

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
