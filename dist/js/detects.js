/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2019 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

menu = document.getElementById('menu_btn');

menu.addEventListener('touchend',(function(){
  document.getElementsByClassName('header__menu--mobile__content')[0].classList.toggle('header__menu--mobile__content--open')
}))

