const menuIcon = document.querySelector(".menu-icon-container");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");
const navSocial = document.querySelector(".nav-social");
const navSocialCol = document.querySelector(".nav-social-col");
const navOverlay = document.querySelector(".nav-overlay");


menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("x");
    navMenu.classList.toggle("x");
    navBar.classList.toggle("x");
    navSocial.classList.toggle("x");
    navSocialCol.classList.toggle("x");
    navOverlay.classList.toggle("x");
})

navOverlay.addEventListener("click", () => {
    menuIcon.classList.toggle("x");
    navMenu.classList.toggle("x");
    navBar.classList.toggle("x");
    navSocial.classList.toggle("x");
    navSocialCol.classList.toggle("x");
    navOverlay.classList.toggle("x");
})
