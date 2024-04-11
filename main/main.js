
const menu = document.querySelector(".btn-menu"),
      list = document.querySelector(".navigation ul "),
      closeMenu = document.querySelector(".close"),
      drop = document.querySelector(".drop"),
      menuList = document.querySelector(".drop .menu");

// Show Section Menu List when Click Button
menu.addEventListener("click", function () {
    list.classList.toggle("show-menu");
    });

// Hidden Section Menu List when Click Button
closeMenu.addEventListener("click", function () {
    list.classList.toggle("show-menu");
    });

// Show Section MenuList Services when Click Button
drop.addEventListener("click", function () {
    drop.classList.toggle("show-menuList");
    });
    