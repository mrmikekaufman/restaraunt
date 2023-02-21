import "./style.css";
import generateHomepage from "./homepage.js";
import generateMenu from "./menu.js";
import generateContact from "./contact.js";

const container = document.querySelector("#container");

const header = document.createElement("div");
header.classList.toggle("header");
const homepage = document.createElement("button");
homepage.classList.toggle("homepage");
homepage.textContent = "Home";
header.appendChild(homepage);
const menu = document.createElement("button");
menu.textContent = "Menu";
menu.classList.toggle("menupage");
header.appendChild(menu);
const contact = document.createElement("button");
contact.textContent = "Contact";
contact.classList.toggle("contactpage");
header.appendChild(contact);

container.appendChild(header);
container.appendChild(generateHomepage());

homepage.addEventListener("click", () => {
  container.removeChild(container.children[1]);
  container.appendChild(generateHomepage());
});

menu.addEventListener("click", () => {
  container.removeChild(container.children[1]);
  container.appendChild(generateMenu());
});

contact.addEventListener("click", () => {
  container.removeChild(container.children[1]);
  container.appendChild(generateContact());
});
