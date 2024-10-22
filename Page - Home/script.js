document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const sections = document.querySelectorAll("section");
    const sticky = navbar.offsetTop; // Get the navbar's initial position

    // Highlight active section link
    function highlightActiveLink() {
        const fromTop = window.scrollY + navbar.offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const link = document.querySelector(a[href = "#${section.id}"]);

            if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Navbar behavior on scroll
    window.onscroll = function () {
        if (window.pageYOffset > sticky) {
            navbar.classList.add("scrolled"); // Add class for styling
            navbar.style.position = "fixed"; // Fix navbar to the top of the viewport
            navbar.style.top = "0"; // Set top position
        } else {
            navbar.classList.remove("scrolled"); // Remove class
            navbar.style.position = "absolute"; // Return to initial position
            navbar.style.top = "20px"; // Set to initial top position
        }
        highlightActiveLink(); // Update active link highlight
    };

    // Toggle hamburger menu
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active"); // Toggle active class for slide-down effect
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active"); // Close the mobile menu
            }
        });
    });

    // Smooth scrolling to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
