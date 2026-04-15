const fondo = document.createElement("div");

fondo.style.position = "fixed";
fondo.style.top = "0";
fondo.style.left = "0";
fondo.style.width = "100%";
fondo.style.height = "100%";
fondo.style.background = "linear-gradient(135deg, #b3ecff, #e7f1f4)";
fondo.style.filter = "blur(80px)";
fondo.style.zIndex = "-1";

document.body.appendChild(fondo);

document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});