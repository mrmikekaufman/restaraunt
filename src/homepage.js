export default function generateHomepage() {
  const content = document.createElement("div");
  content.classList.toggle("display");
  const head = document.createElement("h1");
  head.classList.toggle("head");
  head.textContent = "Mikes Fancy Restaurant";
  content.appendChild(head);
  const body = document.createElement("div");
  body.textContent =
    "Mikes restaurant is the most fanciest restaurant of all restaurants. If you've been to a restaurant that was fancier, we'll give you your money back. Come along, and enjoy the fanciest food ever!";
  content.appendChild(body);
  const hours = document.createElement("div");
  hours.classList.toggle("hours");
  const hoursHeader = document.createElement("h2");
  hoursHeader.textContent = "HOURS";
  hours.appendChild(hoursHeader);
  const openTime = document.createElement("p");
  openTime.textContent =
    "Sunday: 8am - 8pm\nMonday: 8am - 6pm\nTuesday: 8am - 6pm\nWednesday: 8am - 6pm\nThursday: 8am - 10pm\nFriday: 8am - 10pm\nSaturday: 8am - 10pm";
  hours.appendChild(openTime);
  content.appendChild(hours);
  const location = document.createElement("div");
  location.textContent = "Located at 1234 fancy drive";
  content.appendChild(location);
  return content;
}
