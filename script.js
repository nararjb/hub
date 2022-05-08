const menuIcon = document.querySelector(".menu-icon-container");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");
const navSocial = document.querySelector(".nav-social");
const navSocialCol = document.querySelector(".nav-social-col");
const navOverlay = document.querySelector(".nav-overlay");
const previewAbout = document.querySelector(".preview-about");
const previewPortfolio = document.querySelector(".preview-portfolio");
const previewMyProjects = document.querySelector(".preview-myprojects");
const previewBlog = document.querySelector(".preview-blog");
const previewContact = document.querySelector(".preview-contact");
const listAbout = document.querySelector(".about");
const listPortfolio = document.querySelector(".portfolio");
const listProjects = document.querySelector(".myprojects");
const listBlog = document.querySelector(".blog");
const listContact = document.querySelector(".contact");


menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("x");
    navMenu.classList.toggle("x");
    navBar.classList.toggle("x");
    navSocial.classList.toggle("x");
    navSocialCol.classList.toggle("x");
    navOverlay.classList.toggle("x");
});

navOverlay.addEventListener("click", () => {
    menuIcon.classList.toggle("x");
    navMenu.classList.toggle("x");
    navBar.classList.toggle("x");
    navSocial.classList.toggle("x");
    navSocialCol.classList.toggle("x");
    navOverlay.classList.toggle("x");
});

listAbout.addEventListener("mouseenter", () => {
    previewAbout.classList.add("x");
    previewPortfolio.classList.remove("x");
    previewMyProjects.classList.remove("x");
    previewBlog.classList.remove("x");
    previewContact.classList.remove("x");
    listAbout.classList.add("x");
    listPortfolio.classList.remove("x");
    listProjects.classList.remove("x");
    listBlog.classList.remove("x");
    listContact.classList.remove("x");
});

listPortfolio.addEventListener("mouseenter", () => {
    previewAbout.classList.remove("x");
    previewPortfolio.classList.add("x");
    previewMyProjects.classList.remove("x");
    previewBlog.classList.remove("x");
    previewContact.classList.remove("x");
    listAbout.classList.remove("x");
    listPortfolio.classList.add("x");
    listProjects.classList.remove("x");
    listBlog.classList.remove("x");
    listContact.classList.remove("x");
});


listProjects.addEventListener("mouseenter", () => {
    previewAbout.classList.remove("x");
    previewPortfolio.classList.remove("x");
    previewMyProjects.classList.add("x");
    previewBlog.classList.remove("x");
    previewContact.classList.remove("x");
    listAbout.classList.remove("x");
    listPortfolio.classList.remove("x");
    listProjects.classList.add("x");
    listBlog.classList.remove("x");
    listContact.classList.remove("x");
});

listBlog.addEventListener("mouseenter", () => {
    previewAbout.classList.remove("x");
    previewPortfolio.classList.remove("x");
    previewMyProjects.classList.remove("x");
    previewBlog.classList.add("x");
    previewContact.classList.remove("x");
    listAbout.classList.remove("x");
    listPortfolio.classList.remove("x");
    listProjects.classList.remove("x");
    listBlog.classList.add("x");
    listContact.classList.remove("x");
});

listContact.addEventListener("mouseenter", () => {
    previewAbout.classList.remove("x");
    previewPortfolio.classList.remove("x");
    previewMyProjects.classList.remove("x");
    previewBlog.classList.remove("x");
    previewContact.classList.add("x");
    listAbout.classList.remove("x");
    listPortfolio.classList.remove("x");
    listProjects.classList.remove("x");
    listBlog.classList.remove("x");
    listContact.classList.add("x");
});