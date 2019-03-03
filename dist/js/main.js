//Select Menu Items

var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.menu');
var menuNav = document.querySelector('.menu-nav');
var menuBranding = document.querySelector('.menu-branding');
var navItems = document.querySelectorAll('.nav-item');

//Set interval State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //set Menu State 
        showMenu = true;

    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //set Menu State 
        showMenu = false;
    }
}