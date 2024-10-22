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
            const link = document.querySelector(`a[href="#${section.id}"]`);

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

    // Button ripple effect
    const button = document.querySelector('.wow-button');
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const size = Math.max(button.offsetWidth, button.offsetHeight);
        const x = e.pageX - button.offsetLeft - size / 2;
        const y = e.pageY - button.offsetTop - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');

        // Add ripple to the button
        button.appendChild(ripple);

        // Remove ripple after animation ends
        setTimeout(() => {
            ripple.remove();
        }, 600); // Duration matches CSS animation
    });

    // Starry background initialization
    const starField = document.querySelector(".star-field");

    function createStars() {
        for (let i = 0; i < 100; i++) {
            const star = document.createElement("div");
            star.classList.add("star");
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.width = `${Math.random() * 2 + 1}px`;
            star.style.height = `${Math.random() * 2 + 1}px`;
            star.style.animationDelay = `${Math.random() * 10}s`; // Delay for staggered star movement
            starField.appendChild(star);
        }
    }

    // Create stars on load
    createStars();

    // Rocket launch logic
    const rocket = document.querySelector(".rocket");

    function launchRocket() {
        rocket.classList.add("launch"); // Add class to trigger rocket animation
    }

    // Start rocket animation after a short delay
    setTimeout(launchRocket, 1000); // Wait 1 second before launching the rocket
});
