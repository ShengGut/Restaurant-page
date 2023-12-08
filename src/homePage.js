export default function page() {

    const contentDiv = document.getElementById("content");

    const mainDiv = document.createElement("div");
    mainDiv.className = "main";

    const headingDiv = document.createElement("div");
    headingDiv.className = "heading";

    const headingH1 = document.createElement("h1");
    headingH1.textContent = "SJ Lunch";

    headingDiv.appendChild(headingH1);

    const scheduleDiv = document.createElement("div");
    scheduleDiv.className = "schedule";

    const hoursH3 = document.createElement("h3");
    hoursH3.textContent = "Hours Opened";

    const scheduleP1 = document.createElement("p");
    scheduleP1.textContent = "M-F: 10am - 6pm";

    const scheduleP2 = document.createElement("p");
    scheduleP2.textContent = "Sat-Sun: 11am - 2pm";

    scheduleDiv.appendChild(hoursH3);
    scheduleDiv.appendChild(scheduleP1);
    scheduleDiv.appendChild(scheduleP2);

    const locationDiv = document.createElement("div");
    locationDiv.className = "location";

    const locationH3 = document.createElement("h3");
    locationH3.textContent = "Location";

    const locationP = document.createElement("p");
    locationP.textContent = "123 Richter Avenue, San Jose, California";

    locationDiv.appendChild(locationH3);
    locationDiv.appendChild(locationP);

    mainDiv.appendChild(headingDiv);
    mainDiv.appendChild(scheduleDiv);
    mainDiv.appendChild(locationDiv);

    contentDiv.appendChild(mainDiv);
}
