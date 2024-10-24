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

const faqs = {
    pricing: [
        { question: "How long does the subscription last?", answer: "The subscription lasts for a minimum of 6 months, and is month to month after that. Cancel anytime after the 6 months have passed. If you cancel, you don't keep the site." },
        { question: "What happens if I cancel after the 6 month minimum and want to come back?", answer: "You can re-subscribe anytime, but the conditions may vary." },
        { question: "What happens if I cancel before the 6 months is over?", answer: "If you cancel before the 6 months, you owe the full cost of what the site would normally cost ($1,900) minus whatever you have already paid. We prioritize long term relationships with our clients, and want clients to share the same philosophy." },
        { question: "How do you handle late payments?", answer: "Every invoice comes with a 7 day grace period to be paid. If an invoice is not paid within 7 days, there will be a $25 late fee applied. If you're on a subscription, and an invoice has not been paid in 30 days, we reserve the right to cancel the contract. In this case, the client will be responsible for paying the full price of the site. We are generally very flexible and understanding of certain situations and often times offer assistance and help. But if there is no communication or replies to our messages, we will take precautions to make sure we are paid for our time and effort in making the site." },
        { question: "What do you use to take payment and what payment methods do you accept?", answer: "We send digital invoices to your email via Square, which includes a link to a secure page for adding payment info. Subscriptions are paid with a credit card or debit card. All major credit cards are accepted. Lump sum projects are paid via ACH bank transfer to minimize processing fees." },
        { question: "Are there refunds?", answer: "When you sign a contract, either lump sum or subscription, if we cannot design something you are 100% happy with and no longer want to move forward, then we will refund whatever you paid to get started. If we do end up moving forward with building the site, there are no refunds after that point. From then on, refunds are at our discretion." }
    ],
    plans: [
        { question: "If I have a subscription plan, do I continue paying after the 6 month minimum period is over?", answer: "Yes, subscriptions are indefinite. You keep paying every month after the 12 month minimum. It generally takes us 2-3 years to make what we would have made if we sold a lump sum site. So ideally we'd like to have clients last at least 5 years to make getting paid over that period of time worth the wait and financially viable. And at that point, the website will be generating more than $175 a month in value for the client, so the site will essentially be paying for itself at that point and we hope our clients continue to see the value in the work we do to keep paying every month so we can continue to do what we do." },
        { question: "Can I buy out of my subscription after the subsciption minimum is over?", answer: "No, there is no buyout price to stop paying on the monthly package. As noted in another question, it takes 2-3 years including hosting fees to make what we would have made on a lump sum site. We have this rule because subscriptions really only work out financially if a client stays for 5+ years to be beneficial enough to wait that long for payment. It’s not feasible to be waiting 2 years or so for full payment on every site and then have to replace that monthly subscription. It’s much more beneficial to have just been paid in full up front from the start. We also rely on this monthly recurring income for consistent and reliable income so we don’t have to sell sell sell every month to pay the bills and we can spend more time working on our clients sites and spending time on their support calls and emails. Doing this allows us to be more hands on with our clients and provide a better service than any other agency. So if we had clients buying out of their subscriptions every month, we’d end up having to sell more and more to replace that income and the model begins to break down, and then so does our service." },
        { question: "Can I add unlimited edits and support to the lump sum package?", answer: "Yes! We offer $50 a month subscription add on for unlimited edits and support. These are done with a 12 month minimum commitment as well. There's no turning it on and off every other month. Once you end it, if you want to reinstate, it you’ll need to sign another 12 month commitment." },
        { question: "What is the difference between the lump sum package and the subscription package?", answer: "The biggest difference is long term versus short term costs. On subscription, you’ll be paying more over time but it will be in small manageable and affordable monthly payments. The lump sum just gets it all out the way in the beginning and you save more money over the long run because you also paid for the design and development up front. So when deciding which package to choose, it all depends on cash flow and long term versus short term goals. If you don’t want to spend that much up front and value the service that comes with it, then the monthly is your best option. If you don't want or need the monthly service packages, you can get it all out the way up front and save money over the long term." },
        { question: "Is SEO included in all packages?", answer: "Yes and no. SEO is comprised of two parts - On-page and Off-page. On-page SEO is everything ON the page like your content, load times, accessibility, and arrangement. Off-page is everything OFF the site like link building, guest posting, citations, etc. We do some on-page SEO with our packages such as incredibly fast load times, accessibility, your meta tags, google search console, sitemap generation, and some content creation. But that’s not the whole story. SEO is more than that. It’s an active and on-going process and that’s what our SEO partner Adam Gingery takes care of, but he is separate from our website packages. If you’d like to have professional SEO work done, let us know and we will happily connect you with Adam to go over his work, plans, and pricing." },
        { question: "If I cancel a subscription, do I keep my domain?", answer: "Yes, you will always own your domain." },
    ],
    websites: [
        { question: "How long does the process take from start to finish?", answer: "We generally finish a website from start to finish within 2-4 weeks and is all dependent on how soon clients respond to our content and image requests as well as the availability of our designers and developers." },
        { question: "Do I keep my site if I cancel the subscription?", answer: "Yes, we offer hosting services." },
        { question: "Do I own my domain?", answer: "Security, load times, maintainability, lower costs, easier to customize, less bloat because we don’t need plugins for everything. We never need to update anything like you need to constantly update your Wordpress version - otherwise you get hacked and your site redirects to a Chinese gambling site. To go into more detail about security, our custom coded sites have no databases or anything so there’s nothing to hack. Our sites are more secure without needing constant updates to be on top of or constant attacks from online hackers trying to barge in. There's nowhere for them to barge into on our sites no matter how hard they try." },
        { question: "Why custom code over Wordpress? What are the advantages?", answer: "" },
        { question: "How can I request edits for my site?", answer: "You send an email to dentdrew@gmail.com and it will go into our ticketing system where I and my team can read and fulfill them and mark as solved." },
    ]
};

function showFAQs(category) {
    const faqContainer = document.getElementById('faq-container');
    faqContainer.innerHTML = ''; // Clear previous FAQs

    faqs[category].forEach(faq => {
        const faqQuestion = document.createElement('div');
        faqQuestion.classList.add('faq-question');
        faqQuestion.innerText = faq.question;

        const faqAnswer = document.createElement('div');
        faqAnswer.classList.add('faq-answer');
        faqAnswer.innerText = faq.answer;

        faqQuestion.onclick = () => {
            faqAnswer.classList.toggle('visible');
        };

        faqContainer.appendChild(faqQuestion);
        faqContainer.appendChild(faqAnswer);
    });
}