document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname === "/index.html") {
        history.replaceState({}, "", "/home");
    }
});

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

document.querySelector('.wow-button').addEventListener('click', function (e) {
    const button = e.currentTarget;

    // Create a span element to act as the ripple
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

const canvas = document.getElementById('starfield');
const context = canvas.getContext('2d');
const stars = [];

function resizeCanvas() {
    canvas.width = document.querySelector('.whatwedo-grid').offsetWidth;
    canvas.height = document.querySelector('.whatwedo-grid').offsetHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createStars(count) {
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speed: Math.random() * 0.5
        });
    }
}

function updateStars() {
    stars.forEach(star => {
        star.x -= star.speed;
        if (star.x < 0) star.x = canvas.width;
    });
}

function drawStars() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'white';
    stars.forEach(star => {
        context.beginPath();
        context.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        context.fill();
    });
}

function animateStarfield() {
    updateStars();
    drawStars();
    requestAnimationFrame(animateStarfield);
}

createStars(200);
animateStarfield();

document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    function revealOnScroll() {
        const viewportHeight = window.innerHeight;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const triggerPoint = 75; // Adjust this value to trigger earlier or later

            if (elementTop < viewportHeight - triggerPoint) {
                element.classList.add('visible');
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', revealOnScroll);

    // Initial check for elements already in view
    revealOnScroll();
});
