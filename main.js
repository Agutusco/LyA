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



const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.ul-container');

menuToggle.addEventListener('click', function() {
  this.classList.toggle('active');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});


//FORM
const Form2 = document.getElementById("tasaciones-form")
Form2.addEventListener("submit", enviarFormulario)

function enviarFormulario(evento) {
  evento.preventDefault()

const nombre = document.getElementById("nombre").value
const tel = document.getElementById("tel").value
const celular = document.getElementById("cel").value
const email = document.getElementById("email").value
const mensaje = document.getElementById("mensaje").value

const datos = {
  nombre,
  tel,
  celular,
  email,
  mensaje,
}

    enviarDatosAlServidor(datos)

}


function enviarDatosAlServidor(datos) {
  
  fetch("http://127.0.0.1:5500/procesar_formulario.php",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos),
  })
  .then(response => response.text())
  .then(data =>{
    console.log("Respuesta del servidor", data)
  })
  .catch(error =>{
    console.error("Error al enviar los datos", error)
  })
}