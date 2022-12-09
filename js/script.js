let body = document.querySelector('body');
let menu = document.querySelector('.menu');
let burger = document.querySelector('.burger');

burger.addEventListener('click', function(){
  body.classList.toggle('freeze');
  menu.classList.toggle('menu_active');
  burger.classList.toggle('burger_active');
})