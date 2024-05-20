const carouselInner = document.querySelector('.carousel-inner');
const images = carouselInner.querySelectorAll('img');

let currentImageIndex = 0;

function changeImage() {
  images[currentImageIndex].style.opacity = 0; /* Fade out the current image */

  currentImageIndex = (currentImageIndex + 1) % images.length; /* Calculate the next image index */

  images[currentImageIndex].style.opacity = 1; /* Fade in the next image */
}

setInterval(changeImage, 3000); /* Change images every 3 seconds */
