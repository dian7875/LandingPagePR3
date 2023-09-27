window.addEventListener("load", function (event) {
    console.log("'Todos los recursos terminaron de cargar!");
    fetch('./JS/mocks/RYC.json')
    .then(response => response.json())
    .then(RYC => {
    //Info de RYC
    this.document.getElementById("Dir").innerText = RYC.Direction;
    this.document.getElementById("Tel").innerText = RYC.Tel;
    this.document.getElementById("Mail").innerText = RYC.Correo;
    const LogoRYC = document.getElementById("Logo");
    LogoRYC.src = RYC.Logo;
    //Servicios de RYC
    const servContainer = document.getElementById('Serv');
const imagesToLoad = []; // Array para almacenar las imágenes

// Itera sobre los servicios y carga las imágenes en el array
RYC.services.forEach(services => {
  const IconS = document.createElement("img");
  IconS.src = services.ico;
  imagesToLoad.push(IconS); // Agrega la imagen al array de imágenes a cargar
});

// Función para cargar las descripciones después de cargar todas las imágenes
function loadDescriptions() {
  RYC.services.forEach((services, index) => {
    const ServDesc = document.createElement("p");
    ServDesc.textContent = services.description;
    const ServiceF = document.createElement("div");
    ServiceF.id = services.id;

    // Si el índice es par, muestra primero la descripción y luego la imagen
    if (index % 2 === 0) {
      ServiceF.appendChild(ServDesc);
      ServiceF.appendChild(imagesToLoad[index]);
    } else {
      // Si el índice es impar, muestra primero la imagen y luego la descripción
      ServiceF.appendChild(imagesToLoad[index]);
      ServiceF.appendChild(ServDesc);
    }

    ServiceF.className = "ServCard";
    servContainer.appendChild(ServiceF);
  });
}

// Carga las imágenes y llama a loadDescriptions cuando todas las imágenes estén cargadas
Promise.all(imagesToLoad.map(img => {
  return new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
  });
}))
  .then(() => {
    loadDescriptions(); // Cuando todas las imágenes están cargadas, carga las descripciones
  })
  .catch(error => {
    console.error("Error al cargar las imágenes:", error);
  });

    RYC.sponsors.forEach(sponsors =>{
        //Marcas Relacionadas
    });

    RYC.carrusel.forEach(carrusel =>{
        const imagen = document.createElement("img");
        imagen.src = carrusel.img;
        const imagenContainer = document.getElementById("Gal");
        imagenContainer.appendChild(imagen);

    })

  });

});
    

