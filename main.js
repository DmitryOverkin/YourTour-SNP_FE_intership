// Добавление активной ссылки

const menuItemLinks = document.querySelectorAll(
  ".choose_your_tour__content-list-item-link"
);

const setActiveLink = function (link) {
  link.classList.add("active");
};

const removeActiveLink = function (link) {
  if (link.classList.contains("active")) {
    link.classList.remove("active");
  }
};

menuItemLinks.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      removeActiveLink(el);
    } else {
      setActiveLink(el);
    }
  });
});
