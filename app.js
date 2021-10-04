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

// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
var span4 = document.getElementById("close4");
var span5 = document.getElementById("close5");
var span6 = document.getElementById("close6");

//Project 1 Modal
var project1_modal = document.getElementById("project1_modal");
var project1_modal_btn = document.getElementById("item1_button");

// When the user clicks the button, open the modal 
project1_modal_btn.onclick = function() {    
    project1_modal.style.display = "block";
}

//Project 2 Modal
var project2_modal = document.getElementById("project2_modal");
var project2_modal_btn = document.getElementById("item2_button");

// When the user clicks the button, open the modal 
project2_modal_btn.onclick = function() {
    project2_modal.style.display = "block";
}

//Project 3 Modal
var project3_modal = document.getElementById("project3_modal");
var project3_modal_btn = document.getElementById("item3_button");

// When the user clicks the button, open the modal 
project3_modal_btn.onclick = function() {
    project3_modal.style.display = "block";
}

//Project 4 Modal
var project4_modal = document.getElementById("project4_modal");
var project4_modal_btn = document.getElementById("item4_button");

// When the user clicks the button, open the modal 
project4_modal_btn.onclick = function() {
    project4_modal.style.display = "block";
}

//Project 5 Modal
var project5_modal = document.getElementById("project5_modal");
var project5_modal_btn = document.getElementById("item5_button");

// When the user clicks the button, open the modal 
project5_modal_btn.onclick = function() {
    project5_modal.style.display = "block";
}

//Project 6 Modal
var project6_modal = document.getElementById("project6_modal");
var project6_modal_btn = document.getElementById("item6_button");

// When the user clicks the button, open the modal 
project6_modal_btn.onclick = function() {
    project6_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    if (project1_modal.style.display == "block") {
        project1_modal.style.display = "none";
    }
}

span2.onclick = function() {
    if (project2_modal.style.display == "block") {
        project2_modal.style.display = "none";
    }
}
span3.onclick = function() {
    if (project3_modal.style.display == "block") {
        project3_modal.style.display = "none";
    }
}
span4.onclick = function() {
    if (project4_modal.style.display == "block") {
        project4_modal.style.display = "none";
    }
}
span5.onclick = function() {
    if (project5_modal.style.display == "block") {
        project5_modal.style.display = "none";
    }
}
span6.onclick = function() {
    if (project6_modal.style.display == "block") {
        project6_modal.style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == project1_modal) {
        project1_modal.style.display = "none";
    }
    if (event.target == project2_modal) {
        project2_modal.style.display = "none";
    }
    if (event.target == project3_modal) {
        project3_modal.style.display = "none";
    }
    if (event.target == project4_modal) {
        project4_modal.style.display = "none";
    }
    if (event.target == project5_modal) {
        project5_modal.style.display = "none";
    }
    if (event.target == project6_modal) {
        project6_modal.style.display = "none";
    }
}