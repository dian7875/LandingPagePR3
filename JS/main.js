window.addEventListener("load", function (event) {
  console.log("'Todos los recursos terminaron de cargar!");
  loadContened();
  fetchData();
});


let RYCDATA;

function fetchData() {
  return fetch('http://localhost:3000/api/infogeneral/1')
    .then(response => response.json())
    .then(RYC => {
      RYCDATA = RYC;
    });
}


function loadIntro() {
  const RYC = RYCDATA;
  //Info General de RYC
  this.document.getElementById("Dir").innerText = RYC.direction;
  this.document.getElementById("Tel").innerText = RYC.tel;
  this.document.getElementById("Mail").innerText = RYC.correo;
  const LogoRYC = document.getElementById("Logo");
  this.document.getElementById("Description").innerHTML = `
    <p id="Conocenos" class="Des">${RYC.history}</p>
    `;
  LogoRYC.src = RYC.logo;
  this.document.getElementById("Contac").innerHTML = `
    <h3>En ${RYC.companyName} Nos preocupamos por tu opinion</h3>
    <br>
    <h3>Podes contactarnos de las siguientes maneras</h3>
    <br>
    <h3><img class="Icon" src="https://cdn-icons-png.flaticon.com/128/480/480321.png"> ${RYC.correo}</h3>
    <br>
    <h3><img class="Icon" src="https://cdn-icons-png.flaticon.com/128/597/597177.png"> ${RYC.tel}</h3>
    <br>
    <h3><img class="Icon" src="https://cdn-icons-png.flaticon.com/128/733/733585.png"> ${RYC.tel2}</h3>
    <br>
    <h3><img class="Icon" src="https://cdn-icons-png.flaticon.com/128/535/535239.png"> ${RYC.direction}</h3>
    <br>
    <h3>Tambien puedes envianos un mensaje con tus datos y te contaremos en cuando podamos</h3>
    `;
}
function loadFoot() {
  const RYC = RYCDATA;
  //Footer
  this.document.getElementById("firstColum").innerHTML = `
  <img class"FIcon" src="${RYC.logo}"/>
  <h2 class="FName"> ${RYC.companyName}</h2>
  <p class="Fdescription">

  ${RYC.description}.</p>
  `
  RYC.services.forEach((services) => {
    const target = this.document.getElementById("SecondColum");
    const fService = this.document.createElement("p");
    fService.textContent = services.name;
    target.appendChild(fService);
  }
  )
};
function loadContened() {
  fetchData()
    .then(() => {
     loadIntro();
     loadFoot();
     loadImage();
    loadService();
    });
}

function loadImage(){
  const RYC=RYCDATA;
  RYC.Galery.forEach(Galery => {
    const imagenContainer = document.getElementById("imagenes");
    const imagen = document.createElement("img");
    imagen.src = Galery.url;
    const lisImg = this.document.createElement("li");
    lisImg.appendChild(imagen);
    imagenContainer.appendChild(lisImg);
  });//Fin de imagenes de proyectos


}

document.getElementById("Logo").addEventListener("click", function (){
location.reload();
location.href="#Home";
})

function loadService() {
  //servicess de RYC
  const RYC = RYCDATA;
  const servContainer = document.getElementById("Serv");
  RYC.services.forEach((services) => {
    const ServiceCard = document.createElement("span");
    ServiceCard.id = services.id;
    ServiceCard.className = "ServCard";

    const serviceContainer = document.createElement("span");
    serviceContainer.className = "ServiceContainer";


    const servicePreview = document.createElement("span");
    servicePreview.className = "ServicePreview";
    if (parseInt(services.id) % 2 === 0) {
    }
    servicePreview.innerHTML = `
         <img src="${services.icon}">
         <h3>${services.name}</h3>`;

    const serviceInfo = document.createElement("span");
    serviceInfo.className = "ServiceInfo";
    serviceInfo.innerHTML = `
             <p>${services.description}</p> `;
    //Marcas relacionadas a los servicess
    serviceContainer.appendChild(serviceInfo);
    serviceContainer.appendChild(servicePreview);

    ServiceCard.appendChild(serviceContainer);
    servContainer.appendChild(ServiceCard);

  });
    };


