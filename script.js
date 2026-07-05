// ================================
// Mahafil-e-Kabab (Mastan Chacha)
// script.js
// ================================

// Header Background on Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "rgba(0,0,0,0.96)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";
    } else {
        header.style.background = "rgba(0,0,0,.85)";
        header.style.boxShadow = "none";
    }
});

// ================================
// Active Navigation Link
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }

    });

});

// ================================
// Reveal Animation
// ================================

const reveals = document.querySelectorAll(
    ".card, .about-image, .about-text, .gallery img"
);

function revealElements() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0px)";

        }

    });

}

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "0.8s ease";

});

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// ================================
// Image Hover Effect
// ================================

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";
        img.style.transition = ".4s";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

// ================================
// Button Animation
// ================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.08)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

// ================================
// Greeting Message
// ================================

window.addEventListener("load", () => {

    console.log("🍔 Welcome to Mahafil-e-Kabab (Mastan Chacha)");

});

// ================================
// Current Year in Footer
// ================================

const copy = document.querySelector(".copy");

if (copy) {
    copy.innerHTML =
        `© ${new Date().getFullYear()} Mahafil-e-Kabab (Mastan Chacha). All Rights Reserved.`;
}