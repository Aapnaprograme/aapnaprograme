// Glow Beauty Parlour - Custom JS

document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scrolling for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId !== "#") {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Add to Cart Alert - Sparkling Message
    const cartButtons = document.querySelectorAll('.product-card button');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.parentElement.querySelector('h3').innerText;
            alert(`✨ Awesome choice! ${productName} has been added to your beauty bag! 💖`);
        });
    });

    // 3. Contact Form Validation with a Sweet Message
    const contactForm = document.querySelector('form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if(name === "" || email === "" || message === "") {
                alert("Oh oh! 🌸 Please fill all the details so we can get back to you.");
            } else {
                alert(`Thank you, ${name}! Your message has been sent. We'll contact you soon! ✨`);
                contactForm.reset(); // Form khali karne ke liye
            }
        });
    }

    // 4. Reveal Animation on Scroll (Optional Touch)
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if(sectionTop < window.innerHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    });
});