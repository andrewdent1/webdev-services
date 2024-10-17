const faqs = {
    pricing: [
        { question: "How long does the subscription last?", answer: "The subscription lasts for 12 months." },
        { question: "What happens if I cancel after the 12 month minimum and want to come back?", answer: "You can re-subscribe anytime, but the conditions may vary." },
        { question: "What happens if I cancel before the 12 months is over?", answer: "Cancellation policies apply." },
        { question: "How do you handle late payments?", answer: "We send reminders and may impose a late fee." },
        { question: "What do you use to take payment and what payment methods do you accept?", answer: "We accept credit cards and PayPal." }
    ],
    plans: [
        { question: "What plans do you offer?", answer: "We offer basic, standard, and premium plans." },
        { question: "Can I upgrade my plan later?", answer: "Yes, you can upgrade anytime." }
    ],
    seo: [
        { question: "What is SEO?", answer: "SEO stands for Search Engine Optimization." },
        { question: "Why is SEO important?", answer: "SEO helps improve visibility in search engines." }
    ],
    websites: [
        { question: "Can I have my own domain name?", answer: "Yes, you can choose your domain name." },
        { question: "Do you provide hosting?", answer: "Yes, we offer hosting services." }
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
            faqAnswer.style.display = faqAnswer.style.display === 'none' ? 'block' : 'none';
        };

        faqContainer.appendChild(faqQuestion);
        faqContainer.appendChild(faqAnswer);
    });
}