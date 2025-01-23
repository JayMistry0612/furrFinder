const getPets = document.getElementById("about-pets");
const navbarBottom = document.getElementById("navbar-bottom");
const navbar_icon = document.getElementById("nav-icon");
const sidenavBar = document.getElementById("side-navbar")
getPets.addEventListener("click", () => {
    if (navbarBottom.classList.contains("hidden")) {
        navbarBottom.classList.toggle("hidden");
        navbarBottom.style.display = "block";
    }
    else {
        navbarBottom.classList.toggle("hidden");
        navbarBottom.style.display = "none";
    }
})

navbar_icon.addEventListener("click", () => {
    if (sidenavBar.classList.contains("hidden")) {
        sidenavBar.classList.toggle("hidden");
        sidenavBar.style.display = "flex ";
    }
    else {
        sidenavBar.classList.toggle("hidden");
        sidenavBar.style.display = "none";
    }
})