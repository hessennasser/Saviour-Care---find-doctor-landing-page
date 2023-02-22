let nav = document.querySelector("nav");
let menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
});