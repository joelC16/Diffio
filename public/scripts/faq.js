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
