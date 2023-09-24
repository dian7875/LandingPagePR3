window.addEventListener("load", function (event) {
    console.log("'Todos los recursos terminaron de cargar!");
    fetch('./JS/mocks/RYC.json')
    .then(response => response.json())
    .then(RYC => {
    //Info de RYC

    company.services.forEach(services => {
     //Servicios

    });
    company.sponsors.forEach(sponsors =>{
        //Marcas Relacionadas
    });

                });



});
    

