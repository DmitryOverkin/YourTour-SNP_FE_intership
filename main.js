// Добавление активной ссылки

const menuItemLinks = document.querySelectorAll(
  ".choose_your_tour__content-list-item-link"
);

menuItemLinks.forEach(item => {
  item.addEventListener('click', function(event){
    event.preventDefault();

    menuItemLinks.forEach(link => link.classList.remove('active'));

    item.classList.add('active')
  })
})

