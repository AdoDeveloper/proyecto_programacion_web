document.addEventListener('DOMContentLoaded', function () {
  const carousel = new Splide('#image-carousel', {
    type: 'loop',
    perMove: 1,
    autoplay: true,
    interval: 5000,
  }).mount();

  const slides = document.querySelectorAll('.splide__slide');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleVisibility() {
    slides.forEach(function (slide) {
      if (isInViewport(slide)) {
        carousel.enable(slide); // Activar la diapositiva si está visible
      } else {
        carousel.disable(slide); // Desactivar la diapositiva si no está visible
      }
    });
  }

  // Llamar a la función handleVisibility en el evento scroll
  window.addEventListener('scroll', handleVisibility);
});


// Scroll-Up

const irArriba = document.querySelector(".ir-arriba");

irArriba.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
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





