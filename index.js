import { InitHeader } from './components/header.js';
import { InitFooter } from './components/footer.js';
import { InitMobileNav } from './components/mobileNav.js';

const mainHeader = document.getElementById('main-header');

document.addEventListener('DOMContentLoaded', () => {
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

  // ----------- Intersection Observer ---------

  const boxes = document.querySelectorAll('.box');
  // console.log(boxes);
  const observer = new IntersectionObserver(
    (entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.3 }
  );

  boxes.forEach((box) => observer.observe(box));
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    mainHeader.style.backgroundColor = 'white';
    mainHeader.style.color = 'black';
    mainHeader.style.boxShadow = '2px 2px 4px rgb(223, 223, 223)';
  } else {
    mainHeader.style.backgroundColor = 'transparent';
    mainHeader.style.color = 'white';
    mainHeader.style.boxShadow = 'none';
  }
});
