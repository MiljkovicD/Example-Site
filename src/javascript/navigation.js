const toggle = document.querySelector('.header_menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', toggleMenu);

/**
 * Toggle menu on mobile
 */
function toggleMenu() {
	toggle.classList.toggle('header_menu-toggle--close');
	menu.classList.toggle('menu--open');
}
