document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const openMenuBtn = document.querySelector('.menu-btn');
  const closeMenuBtn = document.querySelector('.menu-close-btn');
  const menuLinks = document.querySelectorAll('.menu-nav-link, .menu-order-btn');

  const openMenu = () => mobileMenu?.classList.add('is-open');
  const closeMenu = () => mobileMenu?.classList.remove('is-open');

  openMenuBtn?.addEventListener('click', openMenu);
  closeMenuBtn?.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu?.classList.contains('is-open')) {
      closeMenu();
    }
  });
});