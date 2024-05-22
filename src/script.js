'use strict';

const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('block');
});

menu.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('block');
});
