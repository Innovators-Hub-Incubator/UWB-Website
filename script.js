function underConstruction() {
    alert('This page is under construction!');
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
        el.classList.add("visible");
    });
});

// Infinite Carousel Effect
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const images = [...carousel.children];

    // Clone images to make infinite scrolling effect
    images.forEach(image => {
        const clone = image.cloneNode(true);
        carousel.appendChild(clone);
    });
});
