const menubar = document.querySelector('#menu-bars');
const menu = document.querySelector('.menu');

menubar.addEventListener("click", function () {
    menubar.classList.toggle("fa-times");
    menu.classList.toggle("active");
});