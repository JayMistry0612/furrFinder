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
const modal = document.getElementById("FilterModal");
const openModalButton = document.getElementById("MyModalButton");
const closeModalButton = document.getElementById("close");
console.log(modal,openModalButton,closeModalButton)
console.log("hello")

// Open modal when the "FILTER BREEDS" button is clicked
openModalButton.addEventListener("click", function() {
    modal.style.display = "block"; // Show the modal
});

// Close modal when the "SEE ALL BREEDS" link or close button is clicked
closeModalButton.addEventListener("click", function() {
    modal.style.display = "none"; // Hide the modal
});

// Close the modal if the user clicks outside the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal
    }
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
  }
  });