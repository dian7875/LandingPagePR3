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
          servicePreview.classList.add("icon-right");
        }
        servicePreview.innerHTML = `
            <img src="${servicio.ico}">
            <h3>${servicio.Name}</h3>`;

        const serviceInfo = document.createElement("span");
        serviceInfo.className = "ServiceInfo";
        if (parseInt(servicio.ServId) % 2 === 0) {
          serviceInfo.classList.add("InfoI")
        }
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
      RYC.carrusel.forEach(carrusel => {
        const imagen = document.createElement("img");
        imagen.src = carrusel.img;
        const imagenContainer = document.getElementById("Gal");
        imagenContainer.appendChild(imagen);
      })

    });


 ;
    

});


