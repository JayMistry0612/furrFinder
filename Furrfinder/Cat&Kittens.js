const getPets = document.getElementById("about-pets");
const navbarBottom = document.getElementById("navbar-bottom");
const navbar_icon = document.getElementById("nav-icon");
const sidenavBar = document.getElementById("side-navbar")
getPets.addEventListener("click", () => {
    if (navbarBottom.classList.contains("hidden")) {
        navbarBottom.classList.toggle("hidden");
        navbarBottom.style.display = "block";
        navbarBottom.style.opacity = "1"
        navbarBottom.style.transform = "translateY(0px)"
        navbarBottom.style.transform = "all 1s ease"
        document.getElementById("Path").style.zIndex = 0;
    }
    else {
        navbarBottom.classList.toggle("hidden");
        navbarBottom.style.display = "none";
        navbarBottom.style.opacity = "0"
        navbarBottom.style.transform = "translateY(-10px)"
        navbarBottom.style.transform = "all 1s ease"
        document.getElementById("Path").style.zIndex = 1000;
    }
})

document.querySelectorAll(".nav-item").forEach((e) => {
    // console.log(e.childNodes[3])
    e.addEventListener("mouseenter", () => {
        e.childNodes[3].style.display = "block"
        document.querySelector("main").style.zIndex = "-5"
    })
    e.addEventListener("mouseleave", () => {
        e.childNodes[3].style.display = "none"
        document.querySelector("main").style.zIndex = ""
    })
})


navbar_icon.addEventListener("click", () => {
    if (sidenavBar.classList.contains("hidden")) {
        sidenavBar.classList.toggle("hidden");
        // sidenavBar.style.display = "flex ";
        sidenavBar.style.opacity = "1"
        sidenavBar.style.transform = "translateX(10px)"
        sidenavBar.style.transform = "all 1s ease"
    }
    else {
        sidenavBar.classList.toggle("hidden");
        // sidenavBar.style.display = "none";
        sidenavBar.style.opacity = "0"
        sidenavBar.style.transform = "translateX(-100px)"
        sidenavBar.style.transform = "all 0.1s ease"
    }
})
document.querySelectorAll("#side-navbar .side-nav-item li").forEach((e) => {
    e.addEventListener("click", () => {
        if (e.children[0].classList.contains("hidden")) {
            e.children[1].style.display = 'block'
            e.children[0].classList.toggle("hidden")
        }
        else {
            e.children[1].style.display = 'none'
            e.children[0].classList.toggle("hidden")

        }
    })
})