const getPets = document.getElementById("about-pets");
const navbarBottom = document.getElementById("navbar-bottom");
const navbar_icon = document.getElementById("nav-icon");
const sidenavBar = document.getElementById("side-navbar")
getPets.addEventListener("click", () => {
    if (navbarBottom.classList.contains("hidden")) {
        navbarBottom.classList.toggle("hidden");
        // navbarBottom.style.display = "block";
        navbarBottom.style.opacity = "1"
        navbarBottom.style.transform = "translateY(0px)"
        navbarBottom.style.transform = "all 1s ease"
    }
    else {
        navbarBottom.classList.toggle("hidden");
        // navbarBottom.style.display = "none";
        navbarBottom.style.opacity = "0"
        navbarBottom.style.transform = "translateY(-10px)"
        navbarBottom.style.transform = "all 1s ease"
    }
})