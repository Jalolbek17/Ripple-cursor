const dot = document.querySelector(".dot"), ripple = document.querySelector(".ripple");

window.addEventListener("mousemove", () => {
    if (getComputedStyle(dot).display === "none") {
        dot.style.display = "initial";
    }
    dot.style.top = `${event.clientY}px`;
    dot.style.left = `${event.clientX}px`;
})

window.addEventListener("mousedown", () => {
    if (getComputedStyle(ripple).display === "none") {
        ripple.style.display = "initial";
    }
    ripple.style.top = `${event.clientY}px`;
    ripple.style.left = `${event.clientX}px`;
    document.body.replaceChild(ripple, ripple);
})