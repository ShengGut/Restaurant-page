export default function menu() {
    const contentDiv = document.getElementById("content");
    const mainDiv = document.createElement("div");
    mainDiv.className = "main";

    const menuDiv = document.createElement("div");
    menuDiv.className = "heading";

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Menu";

    menuDiv.appendChild(menuHeading);

    const lunchMenu = document.createElement("div");
    lunchMenu.className = "heading";
    const lunchHeading = document.createElement("h1");
    lunchHeading.textContent = "Lunch";
    lunchMenu.appendChild(lunchHeading);

    const lunch1 = document.createElement("h1");
    lunch1.textContent = "Sandwich";
    const lunch1Desc = document.createElement("p");
    lunch1Desc.textContent = "A sumptuous sandwich consisting of Italian herb bread, slices of swiss cheese, grilled chicken, and a layer of special sauce!";
    const lunch1Price = document.createElement("p");
    lunch1Price.textContent = "$10";

    lunchMenu.appendChild(lunch1);
    lunchMenu.appendChild(lunch1Desc);
    lunchMenu.appendChild(lunch1Price);

    const lunch2 = document.createElement("h1");
    lunch2.textContent = "Pepperoni Pizza";
    const lunch2Desc = document.createElement("p");
    lunch2Desc.textContent = "A 16-inch pizza pie served with fresh mozarella sauce, an assortment of Italian cheeses, and finally topped with pepperoni.";
    const lunch2Price = document.createElement("p");
    lunch2Price.textContent = "$15";

    lunchMenu.appendChild(lunch2);
    lunchMenu.appendChild(lunch2Desc);
    lunchMenu.appendChild(lunch2Price);

    const lunch3 = document.createElement("h1");
    lunch3.textContent = "Salad";
    const lunch3Desc = document.createElement("p");
    lunch3Desc.textContent = "A salad bowl consisting of leafy lettuces, cherry tomatoes, and spinaches, along with a heap of feta cheese and caesar dressing.";
    const lunch3Price = document.createElement("p");
    lunch3Price.textContent = "$11";

    lunchMenu.appendChild(lunch3);
    lunchMenu.appendChild(lunch3Desc);
    lunchMenu.appendChild(lunch3Price);

    mainDiv.appendChild(menuDiv);
    mainDiv.appendChild(lunchMenu);

    contentDiv.appendChild(mainDiv);
}