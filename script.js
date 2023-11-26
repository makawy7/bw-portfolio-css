function toggleMenu() {
  const menu = document.querySelector(".menu__links");
  const menuIcon = document.querySelector(".hamburger__icon");
  menuIcon.classList.toggle("open");
  menu.classList.toggle("open");
}
