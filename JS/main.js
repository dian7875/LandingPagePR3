window.addEventListener("load", function (event) {
    console.log("'Todos los recursos terminaron de cargar!");
    fetch('./JS/mocks/RYC.json')
    .then(response => response.json())
    .then(RYC => {
    //Info General de RYC
    this.document.getElementById("Dir").innerText = RYC.Direction;
    this.document.getElementById("Tel").innerText = RYC.Tel;
    this.document.getElementById("Mail").innerText = RYC.Correo;
    const LogoRYC = document.getElementById("Logo");
    LogoRYC.src = RYC.Logo;
 //Servicios de RYC
const servContainer = document.getElementById('Serv');
const imagesToLoad = [];

RYC.services.forEach(services => {
  const IconS = document.createElement("img");
  IconS.src = services.ico;
  imagesToLoad.push(IconS);
});

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
Promise.all(imagesToLoad.map(img => {
  return new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
  });
}))
  .then(() => {
    loadDescriptions();
  })



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
    

