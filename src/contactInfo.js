export default function contactInfo() {
    const contentDiv = document.getElementById("content");

    const mainDiv = document.createElement("div");
    mainDiv.className = "main";

    const p1 = document.createElement("div");
    p1.className = "heading";

    const contactOne = document.createElement("h1");
    contactOne.textContent = "Tana";
    const contactOneRole = document.createElement("p");
    contactOneRole.textContent = "Owner";
    const contactOneNumber = document.createElement("p");
    contactOneNumber.textContent = "123-123-1234";
    const contactOneEmail = document.createElement("p");
    contactOneEmail.textContent = "Tanareal@mail.com";

    p1.appendChild(contactOne);
    p1.appendChild(contactOneRole);
    p1.appendChild(contactOneNumber);
    p1.appendChild(contactOneEmail);

    const p2 = document.createElement("div");
    p2.className = "heading";

    const contactTwo= document.createElement("h1");
    contactTwo.textContent = "Mark";
    const contactTwoRole = document.createElement("p");
    contactTwoRole.textContent = "Cook";
    const contactTwoNumber = document.createElement("p");
    contactTwoNumber.textContent = "456-456-4321";
    const contactTwoEmail = document.createElement("p");
    contactTwoEmail.textContent = "Markreal@mail.com";

    p2.appendChild(contactTwo);
    p2.appendChild(contactTwoRole);
    p2.appendChild(contactTwoNumber);
    p2.appendChild(contactTwoEmail);

    const p3 = document.createElement("div");
    p3.className = "heading";

    const contactThree= document.createElement("h1");
    contactThree.textContent = "Dean";
    const contactThreeRole = document.createElement("p");
    contactThreeRole.textContent = "Cashier";
    const contactThreeNumber = document.createElement("p");
    contactThreeNumber.textContent = "689-689-5555";
    const contactThreeEmail = document.createElement("p");
    contactThreeEmail.textContent = "Deanreal@mail.com";

    p3.appendChild(contactThree);
    p3.appendChild(contactThreeRole);
    p3.appendChild(contactThreeNumber);
    p3.appendChild(contactThreeEmail);

    mainDiv.appendChild(p1);
    mainDiv.appendChild(p2);
    mainDiv.appendChild(p3);

    contentDiv.appendChild(mainDiv);
}