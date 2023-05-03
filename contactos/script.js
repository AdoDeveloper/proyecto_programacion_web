document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel', {
      type: 'loop', // Habilita el modo de bucle para el carrusel
      perMove: 1, // Configura la cantidad de diapositivas que se mueven con cada cambio (en este caso, 1)
      autoplay: true, // Habilita el autoplay
      interval: 5000, // Configura el tiempo de reproducción automática en milisegundos (en este caso, 5000 ms o 5 segundos)
    }).mount();
  });

// API URL de whatsapp
var phoneNumber = "50374871621"; 

form.addEventListener("submit", function(event) {
	event.preventDefault();
	var message = document.getElementById("message").value;
	var encodedMessage = encodeURIComponent(message);
	var url = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
	window.open(url);
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