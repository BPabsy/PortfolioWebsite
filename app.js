const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('toggle');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const projectsMenu = document.querySelector('#projects-page');
    const contactMenu = document.querySelector('#contact-page');
    let scrollPos = window.scrollY
        // console.log(scrollPos);

    //  adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 500) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 1350) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 2600) {
        projectsMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 9000) {
        contactMenu.classList.add('highlight');
        projectsMenu.classList.remove('highlight');
        return
    }

    if ((elem && window.innerWidth < 960 && scrollPos < 450) || elem) {
        elem.classList.remove('highlight');
    }

};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.toggle')
    if (window.innerWidth <= 960 && menuBars) {
        menu.classList.toggle('toggle');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


// Project Modal
var modal_btn = document.getElementsByClassName("modal_button");
var modal_el = document.getElementsByClassName("modal");
var close_btn = document.getElementsByClassName("close");

function modalClick(x) {
    modal_el[x].style.display = "block";
}

function closeModal(x) {
    modal_el[x].style.display = "none";
}

window.onclick = function(event) {
    for(i = 0; i < modal_el.length; i++){
        if(event.target == modal_el[i]){
            modal_el[i].style.display = "none";
        }        
    }
}