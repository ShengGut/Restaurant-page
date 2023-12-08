export default function page() {
    // Create content div
    const contentDiv = document.getElementById("content");

    // Create header div
    const headerDiv = document.createElement("div");
    headerDiv.className = "header";

    // Create ul element
    const headerUl = document.createElement("ul");

    // Create li elements for the header
    const homeLi = document.createElement("li");
    homeLi.textContent = "Home";

    const menuLi = document.createElement("li");
    menuLi.textContent = "Menu";

    const contactInfoLi = document.createElement("li");
    contactInfoLi.textContent = "Contact Info";

    // Append li elements to ul
    headerUl.appendChild(homeLi);
    headerUl.appendChild(menuLi);
    headerUl.appendChild(contactInfoLi);

    // Append ul to header div
    headerDiv.appendChild(headerUl);

    // Create main div
    const mainDiv = document.createElement("div");
    mainDiv.className = "main";

    // Create heading div
    const headingDiv = document.createElement("div");
    headingDiv.className = "heading";

    // Create h1 element
    const headingH1 = document.createElement("h1");
    headingH1.textContent = "SJ Lunch";

    // Append h1 to heading div
    headingDiv.appendChild(headingH1);

    // Create schedule div
    const scheduleDiv = document.createElement("div");
    scheduleDiv.className = "schedule";

    // Create h3 element for hours opened
    const hoursH3 = document.createElement("h3");
    hoursH3.textContent = "Hours Opened";

    // Create p elements for schedule
    const scheduleP1 = document.createElement("p");
    scheduleP1.textContent = "M-F: 10am - 6pm";

    const scheduleP2 = document.createElement("p");
    scheduleP2.textContent = "Sat-Sun: 11am - 2pm";

    // Append elements to schedule div
    scheduleDiv.appendChild(hoursH3);
    scheduleDiv.appendChild(scheduleP1);
    scheduleDiv.appendChild(scheduleP2);

    // Create location div
    const locationDiv = document.createElement("div");
    locationDiv.className = "location";

    // Create h3 element for location
    const locationH3 = document.createElement("h3");
    locationH3.textContent = "Location";

    // Create p element for location
    const locationP = document.createElement("p");
    locationP.textContent = "123 Richter Avenue, San Jose, California";

    // Append elements to location div
    locationDiv.appendChild(locationH3);
    locationDiv.appendChild(locationP);

    // Append heading, schedule, and location divs to main div
    mainDiv.appendChild(headingDiv);
    mainDiv.appendChild(scheduleDiv);
    mainDiv.appendChild(locationDiv);

    // Create footer div
    const footerDiv = document.createElement("div");
    footerDiv.className = "footer";

    // Create ul element for the footer
    const footerUl = document.createElement("ul");

    // Create li elements for the footer
    const niceLi = document.createElement("li");
    niceLi.textContent = "Nice";

    const yearLi = document.createElement("li");
    yearLi.textContent = "2023";

    const funLi = document.createElement("li");
    funLi.textContent = "Fun";

    // Append li elements to ul
    footerUl.appendChild(niceLi);
    footerUl.appendChild(yearLi);
    footerUl.appendChild(funLi);

    // Append ul to footer div
    footerDiv.appendChild(footerUl);

    // Append header, main, and footer divs to content div
    contentDiv.appendChild(headerDiv);
    contentDiv.appendChild(mainDiv);
    contentDiv.appendChild(footerDiv);
}
