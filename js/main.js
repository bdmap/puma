"use strict"

let header__burger = document.querySelector('.header__burger');
let header__menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');


header__burger.onclick = function () {
   header__burger.classList.toggle('active');
   header__menu.classList.toggle('active');
   back.classList.toggle('lock');
}

header__list.onclick = function () {
   header__menu.classList.remove('active');
   header__burger.classList.remove('active');
   back.classList.toggle('lock');
}


let slider1 = new Swiper('.header__slider', {


   navigation: {
      nextEl: '.swiper-button-next',
   },
   simulateTouch: true,
   touchRatio: 1,
   touchAngle: 45,
   gradCursor: true,
   slidesPerView: 1,
   slidesPerGroup: 1,
   loop: true,
});


let paginationList = ['All', 'Male', 'Female', 'Kids']
let cat = 'Categories:'

let slider2 = new Swiper('.gallary-slider', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (paginationList[index]) + '</span>';
      },
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   simulateTouch: true,
   touchRatio: 1,
   touchAngle: 45,
   gradCursor: true,
   slidesPerView: 4,
   spaceBetween: 22,
   loop: true,
   breakpoints: {

      767: {
         slidesPerView: 4,
      },
      500: {
         slidesPerView: 3,
      },
      468: {
         slidesPerView: 3,
      },
      360: {

         slidesPerView: 2,
      },
      270: {
         slidesPerView: 1,
      }

   }
});


let slider3 = new Swiper('.testimonials-slider', {

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   simulateTouch: true,
   touchRatio: 1,
   touchAngle: 45,
   gradCursor: true,
   slidesPerView: 1,
   slidesPerGroup: 1,

})

if (window.NodeList && !NodeList.prototype.forEach) {
   NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
         callback.call(thisArg, this[i], i, this);
      }
   };
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
   const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
   const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
   const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
   const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

   dropDownBtn.addEventListener('click', function () {
      dropDownList.classList.toggle('dropdown__list--visible');
   });

   dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener('click', function (e) {
         e.stopPropagation()
         dropDownBtn.innerText = this.innerText;
         dropDownBtn.focus();
         document.querySelector('.dropdown__input-hidden').value = this.dataset.value;
         dropDownList.classList.remove('dropdown__list--visible');

      })
   })

   document.addEventListener('click', function (e) {
      if (e.target !== dropDownBtn) {
         dropDownList.classList.remove('dropdown__list--visible')

      }
   })


   document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
         document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible')
      }
   })

})






