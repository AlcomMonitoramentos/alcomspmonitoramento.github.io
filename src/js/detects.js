menu = document.getElementById('menu_btn');

menu.addEventListener('touchend',function(){
  document.getElementsByClassName('header__menu--mobile__content')[0].classList.toggle('header__menu--mobile__content--open')
})

