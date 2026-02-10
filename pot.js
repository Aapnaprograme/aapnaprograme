// Smooth scroll for navbar links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Button click animation + message
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        button.innerText = "Loading...";
        button.style.opacity = "0.7";

        setTimeout(() => {
            button.innerText = "Watch Now";
            button.style.opacity = "1";
            alert("Anime will be available soon 🔥");
        }, 1200);
    });
});


// Navbar background change on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 80) {
        nav.style.background = "rgba(0,0,0,0.95)";
    } else {
        nav.style.background = "rgba(0,0,0,0.75)";
    }
});


// Parallax scroll effect
const parallaxSection = document.querySelector("#bg-section");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const sectionTop = parallaxSection.offsetTop;
    const sectionHeight = parallaxSection.offsetHeight;

    if (scrollY > sectionTop - window.innerHeight &&
        scrollY < sectionTop + sectionHeight) {

        const speed = (scrollY - sectionTop) * 0.3;
        parallaxSection.style.backgroundPosition =
            `center ${-speed}px`;
    }
});

// Side image scroll animation
const sideSection = document.querySelector("#side-anim");

window.addEventListener("scroll", () => {
    const sectionTop = sideSection.offsetTop;
    const scrollY = window.scrollY;

    if (scrollY > sectionTop - window.innerHeight + 150) {
        sideSection.classList.add("active");
    }
});

// Falling image animation
const fallSection = document.querySelector("#fall-section");

window.addEventListener("scroll", () => {
    const sectionTop = fallSection.offsetTop;
    const scrollY = window.scrollY;

    if (scrollY > sectionTop - window.innerHeight + 150) {
        fallSection.classList.add("active");
    }
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");

// Scroll hone par button show/hide
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Click par smooth scroll top
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
