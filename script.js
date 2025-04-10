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

    // Toggle Navbar visibility for mobile
    const toggleButton = document.querySelector('.toggle');
    const mobileMenu = document.querySelector('.mobile-menu'); // Correct class name

    if (toggleButton && mobileMenu) {
        toggleButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('show'); // Show/hide mobile menu
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            document.getElementById("statusMessage").textContent = "Please fill in all fields.";
            document.getElementById("statusMessage").style.color = "red";
            return;
        }

        // Replace with your actual Formspree endpoint
        const formspreeEndpoint = "https://formspree.io/f/YKL!pyeWzZEn3bA";

        fetch(formspreeEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        .then(response => {
            if (response.ok) {
                document.getElementById("statusMessage").textContent = "Message sent successfully!";
                document.getElementById("statusMessage").style.color = "green";
                document.getElementById("contactForm").reset();
            } else {
                return response.json().then(data => {
                    throw new Error(data.error || "Failed to send message.");
                });
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("statusMessage").textContent = "Failed to send message.";
            document.getElementById("statusMessage").style.color = "red";
        });
    });
});

