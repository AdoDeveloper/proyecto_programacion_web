document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel', {
      type: 'loop', // Habilita el modo de bucle para el carrusel
      perMove: 1, // Configura la cantidad de diapositivas que se mueven con cada cambio (en este caso, 1)
      autoplay: true, // Habilita el autoplay
      interval: 5000, // Configura el tiempo de reproducción automática en milisegundos (en este caso, 5000 ms o 5 segundos)
    }).mount();
  });