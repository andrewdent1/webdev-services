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
});

const canvas = document.getElementById('starfield');
const context = canvas.getContext('2d');
const stars = [];

// Resize the canvas to fit the half-circle
function resizeCanvas() {
    canvas.width = document.querySelector('.half-circle').offsetWidth;
    canvas.height = document.querySelector('.half-circle').offsetHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Create stars
function createStars(count) {
    stars.length = 0; // Clear the existing stars
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speed: Math.random() * 0.5
        });
    }
}

// Update stars' positions
function updateStars() {
    stars.forEach(star => {
        star.x -= star.speed;
        if (star.x < 0) star.x = canvas.width;
    });
}

// Draw stars on the canvas
function drawStars() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'white';
    stars.forEach(star => {
        context.beginPath();
        context.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        context.fill();
    });
}

document.addEventListener("DOMContentLoaded", function () {

    var body = document.body;
    setInterval(createStar, 100);
    function createStar() {
        var right = Math.random() * 500;
        var top = Math.random() * screen.height;
        var star = document.createElement("div");
        star.classList.add("star")
        body.appendChild(star);
        setInterval(runStar, 10);
        star.style.top = top + "px";
        function runStar() {
            if (right >= screen.width) {
                star.remove();
            }
            right += 3;
            star.style.right = right + "px";
        }
    }
})

// Animate the starfield
function animate() {
    updateStars();
    drawStars();
    requestAnimationFrame(animate);
}

createStars(200); // Adjust the number of stars as needed
animate();

document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    function revealOnScroll() {
        const viewportHeight = window.innerHeight;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const triggerPoint = 100; // Adjust this value to trigger earlier or later

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
