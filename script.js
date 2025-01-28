const scrollButton = document.getElementById("scrollButton");

// Cambiar el comportamiento del botón según la posición del scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollButton.style.display = "block";
        scrollButton.textContent = "⇧";
    } else {
        scrollButton.style.display = "block";
        scrollButton.textContent = "⇩";
    }
});

// Comportamiento al hacer clic en el botón
scrollButton.addEventListener("click", () => {
    if (scrollButton.textContent === "⇩") {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});
