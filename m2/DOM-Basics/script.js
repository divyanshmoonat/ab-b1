// console.log("DOM Basics");

// console.log(document);

/**
 * Targeting elements in JS
 * 1. getElementById(ID OF THE ELEMENT)
 * 2. getElementsByClassName(CLASS OF THE ELEMENTS)
 * 3. getElementsByTagName(TAG NAME TO FIND)
 * 4. querySelector(QUERY)
 * 5. querySelectorAll(QUERY)
 */

const title = document.getElementById("title");
// console.log(title);

const description = document.getElementById("description");
// console.log(description);

const image = document.getElementById("wallpaper");
// console.log(image);

const myDiv = document.getElementById("myDiv");
// console.log(myDiv);


const redText = document.getElementsByClassName("text-red");
// console.log(redText);

const blueText = document.getElementsByClassName("text-blue");
// console.log(blueText);

const h2 = document.getElementsByTagName("h2");
// console.log(h2);

// h2.map((element, index) => {
//     console.log(element);
// });

const img = document.getElementsByTagName("img");
// console.log(img);


const h2InP = document.querySelector("div > h2"); // Desendent selector ( ), Direct Child ( > )
// console.log(h2InP);

const pTextRed = document.querySelector("p.text-red");
// console.log(pTextRed);

const pTextRed2 = document.querySelectorAll("p.text-red");
// console.log(pTextRed2);

const h2Title = document.querySelectorAll(".text-red");
// console.log(h2Title);

for (let i = 0; i < h2.length; i++) {
    h2[i].textContent = "New title by JS " + (i + 1)
    h2[i].style.color = "blue";
}

const pWithId = document.getElementById("description")
// pWithId.textContent = "This paragrph has been changed using JS methods."

pWithId.style.color = "red"; // font-size => fontSize / background-color => backgroundColor
pWithId.style.fontSize = "32px";


const wallpaperImage = document.getElementById("wallpaper");
// setTimeout(() => {
    // wallpaperImage.src = "https://wallpapercave.com/wp/wp3819629.jpg";
    // wallpaperImage.width = "300"
    // wallpaperImage.height = "200"
// }, 5000)
console.log(wallpaperImage.getAttribute("src"));
wallpaperImage.setAttribute("src","https://wallpapercave.com/wp/wp3819629.jpg");

// Creating a new HTML Tag

const h1 = document.createElement("h1");
h1.textContent = "This H1 is created and appended using JS";

const parentDiv = document.getElementById("parentDiv");
parentDiv.appendChild(h1);

/**
 * <div style="border: 2px solid black">
 *  <h3>Article head line</h3>
 *  <p> Lorem ipsum lorem ipsum.... </p>
 * </div>
 */

const h3 = document.createElement("h3");
h3.textContent = "Article head line";

const p = document.createElement("p");
p.textContent = "Lorem ipsum lorem ipsum...";

const newDiv = document.createElement("div");
// newDiv.appendChild(h3);
// newDiv.appendChild(p);
newDiv.append(h3, p);
newDiv.style.border = "2px solid black";
newDiv.style.padding = "10px";

// parentDiv.appendChild(newDiv);

const pWithDescription = document.getElementById("description");
console.log(pWithDescription);

pWithDescription.insertAdjacentElement("afterend", newDiv);