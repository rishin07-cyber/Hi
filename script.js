// Velora Cafe - Website Interactions

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar nav a");
    const sections = document.querySelectorAll("section[id]");


    // Navbar scroll effect
    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }


        // Find the section currently on screen
        let currentSection = "home";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {
                currentSection = section.id;
            }

        });


        // Update active navigation
        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    });


    // Navigation click
    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });


    // Home active when page first loads
    navLinks.forEach(link => {
        link.classList.remove("active");
    });

    const homeLink = document.querySelector('.navbar nav a[href="#home"]');

    if (homeLink) {
        homeLink.classList.add("active");
    }

});