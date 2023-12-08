export default function footer() {
    const footerDiv = document.getElementById("footer");

    const footerUl = document.createElement("ul");

    const niceLi = document.createElement("li");
    niceLi.textContent = "Nice";

    const yearLi = document.createElement("li");
    yearLi.textContent = "2023";

    const funLi = document.createElement("li");
    funLi.textContent = "Fun";

    footerUl.appendChild(niceLi);
    footerUl.appendChild(yearLi);
    footerUl.appendChild(funLi);

    footerDiv.appendChild(footerUl);
}