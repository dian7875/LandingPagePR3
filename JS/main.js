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
        
    });
    RYC.sponsors.forEach(sponsors =>{
        //Marcas Relacionadas
    });

    RYC.carrusel.forEach(carrusel =>{
        const imagen = document.createElement("img");
        imagen.src = carrusel.img;
        const imagenContainer = document.getElementById("Gal");
        imagenContainer.appendChild(imagen);
        console.log(imagen.src);

    })

                });


    



});
    

