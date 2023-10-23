window.addEventListener("load", function (event) {
  console.log("'Todos los recursos terminaron de cargar!");
  loadContened();
});


let RYCDATA;

function fetchData() {
  return fetch('./JS/mocks/RYC.json')
    .then(response => response.json())
    .then(RYC => {
      RYCDATA = RYC;
    });
}

function loadIntro() {
  const RYC = RYCDATA;
  //Info General de RYC
  this.document.getElementById("Dir").innerText = RYC.Direction;
  this.document.getElementById("Tel").innerText = RYC.Tel;
  this.document.getElementById("Mail").innerText = RYC.Correo;
  const LogoRYC = document.getElementById("Logo");
  this.document.getElementById("Description").innerHTML = `
    <p id="Conocenos" class="Des">${RYC.history}</p>
    `;
  LogoRYC.src = RYC.Logo;
  this.document.getElementById("Contac").innerHTML = `
    <h3>En ${RYC.companyName} Nos preocupamos por tu opinion</h3>
    <br>
    <h3>Podes contactarnos de las siguientes maneras</h3>
    <br>
    <h3><img class="Icon" src="https://cdn-icons-png.flaticon.com/128/480/480321.png"> ${RYC.Correo}</h3>
    <br>
    <h3><img class="Icon" src="https://cdn-icons-png.flaticon.com/128/597/597177.png"> ${RYC.Tel}</h3>
    <br>
    <h3><img class="Icon" src="https://cdn-icons-png.flaticon.com/128/733/733585.png"> ${RYC.Tel2}</h3>
    <br>
    <h3><img class="Icon" src="https://cdn-icons-png.flaticon.com/128/535/535239.png"> ${RYC.Direction}</h3>
    <br>
    <h3>Tambien puedes envianos un mensaje con tus datos y te contaremos en cuando podamos</h3>
    `;
}

function loadService() {
  //Servicios de RYC
  const RYC = RYCDATA;
  const servContainer = document.getElementById("Serv");
  RYC.servicios.forEach((servicio) => {
    const ServiceCard = document.createElement("span");
    ServiceCard.id = servicio.ServId;
    ServiceCard.className = "ServCard";

    const serviceContainer = document.createElement("span");
    serviceContainer.className = "ServiceContainer";


    const servicePreview = document.createElement("span");
    servicePreview.className = "ServicePreview";
    if (parseInt(servicio.ServId) % 2 === 0) {
    }
    servicePreview.innerHTML = `
         <img src="${servicio.ico}">
         <h3>${servicio.Name}</h3>`;

    const serviceInfo = document.createElement("span");
    serviceInfo.className = "ServiceInfo";
    serviceInfo.innerHTML = `
             <p>${servicio.description}</p> `;

    //Marcas relacionadas a los servicios
    const marcasRelacionadas = RYC.Relacionados.filter((relacionado) => relacionado.id === servicio.ServId);
    if (marcasRelacionadas.length > 0) {
      const marca = document.createElement("span");
      marca.className = "marcas";
      marcasRelacionadas.forEach((relacionado) => {
        const marcaImg = document.createElement("img");
        marcaImg.src = relacionado.marca;
        marca.appendChild(marcaImg);
      });
      serviceInfo.appendChild(marca);
    }

    serviceContainer.appendChild(serviceInfo);
    serviceContainer.appendChild(servicePreview);

    ServiceCard.appendChild(serviceContainer);
    servContainer.appendChild(ServiceCard);

  });

};
function loadFoot() {
  const RYC = RYCDATA;
  //Footer
  this.document.getElementById("firstColum").innerHTML = `
  <img class"FIcon" src="${RYC.Logo}"/>
  <h2 class="FName"> ${RYC.companyName}</h2>
  <p class="Fdescription">

  ${RYC.description}.</p>
  `
  RYC.servicios.forEach((servicio) => {
    const target = this.document.getElementById("SecondColum");
    const fService = this.document.createElement("p");
    fService.textContent = servicio.Name;
    target.appendChild(fService);
  }
  )
};

function loadImage() {
  const RYC = RYCDATA;
  //Carrusel de imagenes de proyectos
  RYC.carrusel.forEach(carrusel => {
    const imagenContainer = document.getElementById("imagenes");
    const imagen = document.createElement("img");
    imagen.src = carrusel.img;
    const lisImg = this.document.createElement("li");
    lisImg.appendChild(imagen);
    imagenContainer.appendChild(lisImg);
  });//Fin de imagenes de proyectos
  //Animacion de scroll imagenes
  const ListImg = document.getElementById("imagenes");
  const anterior = document.getElementById("anterior");
  const siguiente = document.getElementById("siguiente");
  const porcentajeImagen = 33.3;
  const numImagenes = ListImg.children.length;
  let index = 0;

  siguiente.addEventListener("click", () => {
    index += 1;
    if (index >= numImagenes) {
      index = 0;
    }
    actualizarCarrusel();
  });

  anterior.addEventListener("click", () => {
    index -= 1;
    if (index < 0) {
      index = numImagenes - 1;
    }
    actualizarCarrusel();
  });

  function actualizarCarrusel() {
    const desplazamiento = -index * porcentajeImagen;
    ListImg.style.transform = `translateX(${desplazamiento}%)`;
  }
};



function loadContened() {
  fetchData()
    .then(() => {
      loadFoot();
      loadImage();
      loadIntro();
      loadService();
    });
}
