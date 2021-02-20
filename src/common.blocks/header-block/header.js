const menuToggle = document.querySelector('.page-header__menu-toggle');
const submenuToggle = document.querySelector('.page-header__nav-item--submenu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('page-header__menu-toggle--show');

  if (menuToggle.classList.contains('page-header__menu-toggle--show')) {
    document.body.style.overflow = 'hidden';
  } else document.body.style.overflow = '';
});

submenuToggle.addEventListener('click', () => {
  submenuToggle.classList.toggle('submenu-show');
});
