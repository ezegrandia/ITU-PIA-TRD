// Lógica del menú hamburguesa (Mobile)
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav__menu--active");
        navToggle.classList.toggle("nav__toggle--active");
        document.body.classList.toggle("no-scroll");
    });
}

// Función global para desplegar los detalles de los resultados
window.toggleDetails = function (id) {
    const el = document.getElementById(id);
    if (el) {
        if (el.classList.contains("hidden")) {
            el.classList.remove("hidden");
        } else {
            el.classList.add("hidden");
        }
    }
};
