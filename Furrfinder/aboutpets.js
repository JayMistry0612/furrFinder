const getPets = document.getElementById("about-pets");
const navbarBottom = document.getElementById("navbar-bottom");
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