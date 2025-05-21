document.addEventListener("DOMContentLoaded", () => {
    // Initialize all components
    initializeFadeIn();
    initializeCarousel();
    initializeEventList();
    initializeMobileMenu();
    initializeContactForm();
});

// Fade-in Effect
function initializeFadeIn() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".fade-in").forEach(el => {
        observer.observe(el);
    });
}

// Carousel Effect
function initializeCarousel() {
    const carousel = document.querySelector(".carousel");
    if (!carousel) return;

    const images = [...carousel.children];
    images.forEach(image => {
        const clone = image.cloneNode(true);
        carousel.appendChild(clone);
    });

    // Add touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    carousel.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            // Swipe left
            carousel.scrollBy({ left: 200, behavior: 'smooth' });
        }
        if (touchEndX > touchStartX) {
            // Swipe right
            carousel.scrollBy({ left: -200, behavior: 'smooth' });
        }
    }
}

// Event List
function initializeEventList() {
    document.querySelectorAll(".event-button").forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            const arrow = button.querySelector(".arrow");

            // Close other open events
            document.querySelectorAll(".event-content").forEach(item => {
                if (item !== content) {
                    item.classList.remove("show");
                    item.previousElementSibling.querySelector(".arrow")?.classList.remove("rotate");
                }
            });

            // Toggle current event
            content.classList.toggle("show");
            arrow?.classList.toggle("rotate");

            // Smooth scroll to content if opening
            if (content.classList.contains("show")) {
                content.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
}

// Mobile Menu
function initializeMobileMenu() {
    const toggleButton = document.querySelector('.toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    if (!toggleButton || !mobileMenu) return;

    toggleButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
        body.style.overflow = mobileMenu.classList.contains('show') ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !toggleButton.contains(e.target)) {
            mobileMenu.classList.remove('show');
            body.style.overflow = '';
        }
    });

    // Close menu when window is resized to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1023) {
            mobileMenu.classList.remove('show');
            body.style.overflow = '';
        }
    });
}

// Contact Form
function initializeContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const statusMessage = document.getElementById("statusMessage");

        if (!name || !email || !message) {
            showStatus(statusMessage, "Please fill in all fields.", "error");
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/YKL!pyeWzZEn3bA", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ name, email, message })
            });

            if (response.ok) {
                showStatus(statusMessage, "Message sent successfully!", "success");
                form.reset();
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            console.error("Error:", error);
            showStatus(statusMessage, "Failed to send message. Please try again.", "error");
        }
    });
}

function showStatus(element, message, type) {
    if (!element) return;
    
    element.textContent = message;
    element.style.color = type === "success" ? "green" : "red";
    element.style.opacity = "1";
    
    // Fade out after 3 seconds
    setTimeout(() => {
        element.style.opacity = "0";
    }, 3000);
}

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

