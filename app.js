const hamburgerMenu = document.querySelector('.hamburgerMenu');
const fullScreenNavigation = document.querySelector('.fullScreenNavigation');

hamburgerMenu.addEventListener('click', ()=> {
    fullScreenNavigation.classList.toggle('visible');
});

fullScreenNavigation.addEventListener('click', ()=> {
    fullScreenNavigation.classList.remove('visible')
});