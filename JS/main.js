window.addEventListener("load", function (event) {
    console.log("'Todos los recursos terminaron de cargar!");
    fetch('./JS/mocks/RYC.json')
    .then(response => response.json())
    .then(RYC => {
    //Info de RYC
    this.document.getElementById("Dir").innerText = RYC.Direction;
    this.document.getElementById("Tel").innerText = RYC.Tel;
    this.document.getElementById("Mail").innerText = RYC.Correo;
    const LogoRYC = document.getElementById("logo");
    LogoRYC.src = RYC.Logo;

    RYC.services.forEach(services => {
    const ServCont = this.document.getElementById("Serv")
    const IconS = this.document.createElement("img");
    const ServDesc = this.document.createElement("p")
    IconS.src = services.ico;
    ServDesc.textContent = services.description;
    const ServiceF = this.document.createElement("div");
    ServiceF.id = services.id;
    ServiceF.appendChild(IconS);
    ServiceF.appendChild(ServDesc);
    ServiceF.className="ServCard";
    ServCont.appendChild(ServiceF)
    });
    RYC.sponsors.forEach(sponsors =>{
        //Marcas Relacionadas
    });

                });



});
    

