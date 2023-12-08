import './style.css';
import homePageCreation from './homePage.js';
import headerCreation from './header.js';
import footerCreation from './footer.js';
import menuCreation from './menu.js';
import contactInfoCreation from './contactInfo.js';

headerCreation();
footerCreation();
homePageCreation();
const contentDiv = document.getElementById("content");

const homeLi = document.getElementById("homeLi");
const menuLi = document.getElementById("menuLi");
const contactInfoLi = document.getElementById("contactInfoLi");

homeLi.addEventListener("click", () =>{
    contentDiv.innerHTML = "";

    homePageCreation();
});

menuLi.addEventListener("click", () =>{
    contentDiv.innerHTML = "";

    menuCreation();
});

contactInfoLi.addEventListener("click", () =>{
    contentDiv.innerHTML = "";

    contactInfoCreation();
});