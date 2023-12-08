export default function header() {
    const headerDiv = document.getElementById("header");
    const headerUl = document.createElement("ul");

    const homeLi = document.createElement("li");
    homeLi.textContent = "Home";
    homeLi.id = "homeLi";
    const menuLi = document.createElement("li");
    menuLi.textContent = "Menu";
    menuLi.id = "menuLi";
    const contactInfoLi = document.createElement("li");
    contactInfoLi.textContent = "Contact Info";
    contactInfoLi.id = "contactInfoLi";
    headerUl.appendChild(homeLi);
    headerUl.appendChild(menuLi);
    headerUl.appendChild(contactInfoLi);

    headerDiv.appendChild(headerUl);
}