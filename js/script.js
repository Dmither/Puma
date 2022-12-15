let body = document.querySelector('body');
let menu = document.querySelector('.menu');
let burger = document.querySelector('.burger');

burger.addEventListener('click', function(){
  body.classList.toggle('freeze');
  menu.classList.toggle('menu_active');
  burger.classList.toggle('burger_active');
})

new Swiper('.slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})

new Swiper('.gallary-slider', {
  navigation: {
    nextEl: '.gallary-slider__next',
    prevEl: '.gallary-slider__prev',
  }
})