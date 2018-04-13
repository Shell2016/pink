var nav = document.querySelector('.main-nav');
var navToggle = nav.querySelector('.main-nav__toggle');
var mainHeader = document.querySelector('.main-header');

nav.classList.remove('main-nav--nojs');
mainHeader.classList.remove('main-header--opened');


navToggle.addEventListener('click', function(event) {
  event.preventDefault();
  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
    nav.classList.add('main-nav--opened');
  } else {
    nav.classList.remove('main-nav--opened');
    nav.classList.add('main-nav--closed');
  }
  mainHeader.classList.toggle('main-header--opened');
});


