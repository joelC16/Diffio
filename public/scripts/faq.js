let partesNoVisiblesPreguntas = document.querySelectorAll(
  ".parteNoVisiblePregunta"
);
let botonAbrirPregunta = document.querySelectorAll(".abrirPregunta");

botonAbrirPregunta.forEach((boton, index) => {
  boton.addEventListener("click", (e) => {
    e.preventDefault();

    let estiloActual = window.getComputedStyle(
      partesNoVisiblesPreguntas[index]
    );

    let displayActual = estiloActual.getPropertyValue("display");

    if (displayActual === "none") {
      partesNoVisiblesPreguntas[index].classList.add(
        "parteNoVisiblePreguntaDisplayBlock"
      );
    } else if (displayActual === "block") {
      partesNoVisiblesPreguntas[index].classList.remove(
        "parteNoVisiblePreguntaDisplayBlock"
      );
    }

    boton.classList.toggle("rotar-45");
  });
});

window.addEventListener("scroll", function () {
  var header = document.getElementById("scrollingHeader");
  var scrollTop = window.scrollY;
  var gradientSpeed = 3; // Ajusta este valor para cambiar la velocidad del gradiente

  var gradientDirection = scrollTop * gradientSpeed;

  header.style.backgroundImage = `linear-gradient(to left, var(--color-texto-hover), var(--color-textos-gris) ${gradientDirection}px)`;
});
