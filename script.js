window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop; // Get the navbar's initial position
    const sections = document.querySelectorAll("h1");
    
    // Highlight active section link
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const link = document.querySelector(`a[href="#${section.id}"]`);

        if (window.pageYOffset >= sectionTop - navbar.offsetHeight && window.pageYOffset < sectionTop + sectionHeight) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Navbar behavior on scroll
    if (window.pageYOffset > sticky) {
        navbar.style.position = "fixed"; // Fix navbar to the top of the viewport
        navbar.style.top = "0"; // Set top position
        navbar.classList.add("scrolled"); // Add class for styling
    } else {
        navbar.style.position = "absolute"; // Return to initial position
        navbar.style.top = "20px"; // Set to initial top position
        navbar.classList.remove("scrolled"); // Remove class
    }
};

// Toggle hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active"); // Toggle active class for slide-down effect
});

