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
});