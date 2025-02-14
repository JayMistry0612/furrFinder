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

document.querySelectorAll(".nav-item").forEach((e) => {
    console.log(e.children)
    e.addEventListener("mouseenter", () => {
        e.children[1].style.display = "block"
        e.children[1].style.opacity = "1"
        e.children[1].style.transform = "translateY(0px)"
        document.querySelector(".hero").style.zIndex = "-5"
    })
    e.addEventListener("mouseleave", () => {
        e.children[1].style.opacity = "0"
        e.children[1].style.transform = "translateY(-20px)"
        e.children[1].style.display = "none"

        document.querySelector(".hero").style.zIndex = ""
    })
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


const images = [
    "./assest/dogs-cats.jpg",
    "./assest/hero-2.webp",
    "./assest/hero-3.webp"
];

let currentIndex = 0;
const bgElement = document.querySelector("#section-1 .caorusel-bg");
console.log(bgElement)

function changeBackground() {
    bgElement.style.opacity = 0;

    setTimeout(() => {
        bgElement.style.backgroundImage = `url(${images[currentIndex]})`;
        bgElement.style.opacity = 1;
        currentIndex = (currentIndex + 1) % images.length;
    }, 1000);
}

setInterval(changeBackground, 3000);


bgElement.style.backgroundImage = `url(${images[2]})`;





// for pets nrar by

// const petsNames = document.querySelectorAll("#section-2 .pets #pets-option  .pets-names");
// console.log(petsNames)

// let cuI = 0
// function scroll() {
//     petsNames.forEach(ele => {
//         console.log(ele)
//         if (cuI > 3) {
//             ele.style.transform = `-translateX(${0}px)`
//             cuI = 0
//         }
//         else if (cuI < 3) {
//             ele.style.transform = `-translateX(${ele.clientWidth}px)`
//             cuI = cuI + 1

//         }
//     })


// }
// setInterval(() => {
//     scroll()
// }, 1000);




