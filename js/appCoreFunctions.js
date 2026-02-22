//Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach((item) => item.classList.add('show'));

        //set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach((item) => item.classList.remove('show'));

        //set menu state
        showMenu = false;
    }
}




//Es6 Class method for typewriter function

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        //current index of word
        const current = this.wordIndex % this.words.length;
        //get full text of current word
        const fullTxt = this.words[current];

        //check if deleting
        if (this.isDeleting) {
            //remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            //add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        //insert the txtElement into the span element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        //Initial Type speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        //check if words is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            //Make a pause
            typeSpeed = this.wait;
            //set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            //Move to next word
            this.wordIndex++;
            //Pause before Start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}





//progress bar functionality
class ProgressBar {
    constructor(element, initialValue = 0) {
        this.valueElem = element.querySelector('.progress-bar-value');
        this.fillElem = element.querySelector('.progress-bar-fill');
        this.setValue(initialValue);
    }

    setValue(newValue) {
        if (newValue < 0) {
            newValue = 0;
        }

        if (newValue > 100) {
            newValue = 100;
        }
        this.value = newValue;
        this.update();
    }

    update() {
        const percentage = this.value + '%';
        this.fillElem.style.width = percentage;
        this.valueElem.textContent += percentage;
    }
}