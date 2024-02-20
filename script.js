const container = document.querySelectorAll(".matcha");

container.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
