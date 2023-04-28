document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel', {
      type: 'loop', // Habilita el modo de bucle para el carrusel
      perMove: 1, // Configura la cantidad de diapositivas que se mueven con cada cambio (en este caso, 1)
      autoplay: true, // Habilita el autoplay
      interval: 5000, // Configura el tiempo de reproducción automática en milisegundos (en este caso, 5000 ms o 5 segundos)
    }).mount();
  });

  // Scroll-Up

const irArriba = document.querySelector(".ir-arriba");

irArriba.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
    if (window.scrollY < 600) {
        irArriba.style.right = -100 + "px";
    } else {
        irArriba.style.right = 5 + "px";
    }
});

// Animacion
const elementosAnimar = document.querySelectorAll('.animar, .animar2');

window.addEventListener('scroll', () => {
  elementosAnimar.forEach(elemento => {
    const alturaViewport = window.innerHeight;
    const distanciaElemento = elemento.getBoundingClientRect().top;
    const alturaElemento = elemento.offsetHeight;

    // Si el elemento está visible en el viewport
    if (distanciaElemento < alturaViewport) {
      elemento.classList.add('animado');
    } else {
      elemento.classList.remove('animado');
    }
  });
});





