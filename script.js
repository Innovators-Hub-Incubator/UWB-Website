function underConstruction() {
    alert('This page is under construction!');
}

document.addEventListener("DOMContentLoaded", () => {
    // Fade-in Effect
    document.querySelectorAll(".fade-in").forEach(el => {
        el.classList.add("visible");
    });

    // Infinite Carousel Effect
    const carousel = document.querySelector(".carousel");
    if (carousel) {
        const images = [...carousel.children];

        // Clone images to make infinite scrolling effect
        images.forEach(image => {
            const clone = image.cloneNode(true);
            carousel.appendChild(clone);
        });
    }

    // Expandable Event List
    document.querySelectorAll(".event-button").forEach(button => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            const arrow = button.querySelector(".arrow");

            if (content.classList.contains("show")) {
                content.classList.remove("show");
                arrow.classList.remove("rotate");
            } else {
                // Close other open events before opening a new one
                document.querySelectorAll(".event-content").forEach(item => item.classList.remove("show"));
                document.querySelectorAll(".arrow").forEach(item => item.classList.remove("rotate"));

                content.classList.add("show");
                arrow.classList.add("rotate");
            }
        });
    });

    // Contact Form Handling
    emailjs.init("YOUR_EMAILJS_USER_ID"); // Ensure this is correctly set

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const statusMessage = document.getElementById("statusMessage");

            if (!name || !email || !message) {
                statusMessage.textContent = "Please fill in all fields.";
                statusMessage.style.color = "red";
                return;
            }

            const templateParams = {
                from_name: name,
                from_email: email,
                message: message
            };

            emailjs.send("service_q5nya2v", "YOUR_TEMPLATE_ID", templateParams)
                .then(response => {
                    console.log("SUCCESS!", response.status, response.text);
                    statusMessage.textContent = "Message sent successfully!";
                    statusMessage.style.color = "green";
                    contactForm.reset();
                })
                .catch(error => {
                    console.log("FAILED...", error);
                    statusMessage.textContent = "Failed to send message.";
                    statusMessage.style.color = "red";
                });
        });
    }
});
document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");

    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        menu.style.maxHeight = "0";
        menu.style.opacity = "0";
    } else {
        menu.classList.add("open");
        menu.style.maxHeight = menu.scrollHeight + "px"; // Set height dynamically
        menu.style.opacity = "1";
    }
});