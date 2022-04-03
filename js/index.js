// * Navbar Menu 
const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".navbar--open--icon");
const navLinks = document.querySelectorAll(".nav__link")

// * Navbar Menu Toggle Event 
navBtn.addEventListener('click', () => {
    nav.classList.toggle("open");
});

// * Navbar Menu Close
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove("open");
    });
})

