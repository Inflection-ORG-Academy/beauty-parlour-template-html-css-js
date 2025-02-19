import { InitHeader } from './components/header.js';
import { InitFooter } from './components/footer.js';
import { InitMobileNav } from './components/mobileNav.js';
window.addEventListener('DOMContentLoaded', () => {
  const mainHeader = document.getElementById('main-header');
  const mobileNavDrawer = document.getElementById('mobile-nav');
  const mainFooter = document.getElementById('main-footer');

  mainHeader.innerHTML = InitHeader();
  mobileNavDrawer.innerHTML = InitMobileNav();
  mainFooter.innerHTML = InitFooter();

  const menuBtnEl = document.getElementById('menu-btn');

  menuBtnEl.addEventListener('click', () => {
    mobileNavDrawer.style.transform = 'translateX(0%)';
  });

  const closeMenuBtnEl = document.getElementById('close-menu');
  closeMenuBtnEl.addEventListener('click', () => {
    mobileNavDrawer.style.transform = 'translateX(200%)';
  });
});
