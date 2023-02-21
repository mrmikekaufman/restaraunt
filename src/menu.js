export default function generateMenu() {
  const content = document.createElement("div");
  // Add the image to our existing div.
  content.classList.toggle("display");
  const head = document.createElement("h1");
  head.classList.toggle("head");
  head.textContent = "Menu";
  content.appendChild(head);
  const body = document.createElement("div");
  body.textContent = "Pasta, ravioli, spaghetti etc.";
  content.appendChild(body);
  const hours = document.createElement("div");
  const hoursHeader = document.createElement("h2");
  hoursHeader.textContent = "HOURS";
  hours.classList.toggle("hours");
  hours.appendChild(hoursHeader);
  const openTime = document.createElement("p");
  openTime.textContent =
    "Sunday: 8am - 8pm      Monday: 8am - 6pm      Tuesday: 8am - 6pm       Wednesday: 8am - 6pm       Thursday: 8am - 10pm       Friday: 8am - 10pm      Saturday: 8am - 10pm";
  hours.appendChild(openTime);
  content.appendChild(hours);
  const location = document.createElement("div");
  location.textContent = "Located at 1234 fancy drive";
  content.appendChild(location);
  return content;
}
