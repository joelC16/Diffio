// Abrir y cerrar el menu
const botonNav = document.getElementById("botonNav");
const botonClose = document.getElementById("botonCerrar");
const nav = document.getElementById("nav");

function toggleMenu() {
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

botonNav.addEventListener("click", toggleMenu);
botonClose.addEventListener("click", toggleMenu);