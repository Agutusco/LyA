const carouselInner = document.querySelector('.carousel-inner');
const images = carouselInner.querySelectorAll('img');

let currentImageIndex = 0;

function changeImage() {
  images[currentImageIndex].style.opacity = 0; 

  currentImageIndex = (currentImageIndex + 1) % images.length;

  images[currentImageIndex].style.opacity = 1;
}

setInterval(changeImage, 5000);


const contactoBtn = document.getElementById("icono1")
const tasacionesBtn = document.getElementById("icono2")
const contactoForm = document.getElementById("contactoForm");
const tasacionesForm = document.getElementById("tasacionesForm");

contactoBtn.addEventListener("click",() => {
    contactoForm.classList.toggle("mostrar")
} )

tasacionesBtn.addEventListener("click",() => {
  tasacionesForm.classList.toggle("mostrar")
} )


