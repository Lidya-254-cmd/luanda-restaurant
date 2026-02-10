
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const menu = nav.querySelector("ul");

  // Create hamburger
  const hamburger = document.createElement("div");
  hamburger.className = "hamburger";
  hamburger.innerHTML = "&#9776;";

  // Insert hamburger before icons
  nav.insertBefore(hamburger, nav.querySelector(".icon"));

  // Toggle menu
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});

