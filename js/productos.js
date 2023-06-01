//=======================================================================================================================================
//BASE DE DATOS XD
//=======================================================================================================================================
//=======================================================================================================================================
//LINEA CALIENTE
//=======================================================================================================================================
//===========================================
//TABLA COCINAS INDUSTRIALES
//===========================================
var tablaCocinasIndustriales = [
    {
        id: 1,
        nombre: "COCINA CON 1 HORNILLA",
        img: "img/img-categorias/linea-caliente/cocinas-industriales/cocina-1.png",
        caracteristicas: [
            "Fabricado en acero inoxidable AISI 304 (Acero quirúrgico)",
            "Espesor de plancha 1.20mm",
            "Parrillas de fierro fundido",
            "Quemadores removibles",
            "Base inferior con rejillas para ollas",
            "Uniones fijas de soldadura TIG de fino acabado",
            "Medidas personalizadas de acuerdo a su requerimiento"
        ]
    },

    {
        id: 2,
        nombre: "COCINA CON 2 HORNILLAS",
        img: "img/img-categorias/linea-caliente/cocinas-industriales/cocina-2.png",
        caracteristicas: [
            "Fabricado en acero inoxidable AISI 304 (Acero quirúrgico)",
            "Espesor de plancha 1.20mm",
            "Parrillas de fierro fundido",
            "Quemadores removibles",
            "Base inferior con rejillas para ollas",
            "Uniones fijas de soldadura TIG de fino acabado",
            "Medidas personalizadas de acuerdo a su requerimiento"
        ]
    },

    {
        id: 3,
        nombre: "COCINA CON 3 HORNILLAS",
        img: "img/img-categorias/linea-caliente/cocinas-industriales/cocina-3.png",
        caracteristicas: [
            "Fabricado en acero inoxidable AISI 304 (Acero quirúrgico)",
            "Espesor de plancha 1.20mm",
            "Parrillas de fierro fundido",
            "Quemadores removibles",
            "Base inferior con rejillas para ollas",
            "Uniones fijas de soldadura TIG de fino acabado",
            "Medidas personalizadas de acuerdo a su requerimiento"
        ]
    },

    {
        id: 4,
        nombre: "COCINA CON 4 HORNILLAS",
        img: "img/img-categorias/linea-caliente/cocinas-industriales/cocina-4.png",
        caracteristicas: [
            "Fabricado en acero inoxidable AISI 304 (Acero quirúrgico)",
            "Espesor de plancha 1.20mm",
            "Parrillas de fierro fundido",
            "Quemadores removibles",
            "Base inferior con rejillas para ollas",
            "Uniones fijas de soldadura TIG de fino acabado",
            "Medidas personalizadas de acuerdo a su requerimiento"
        ]
    },

    {
        id: 5,
        nombre: "COCINA CON 5 HORNILLAS",
        img: "img/img-categorias/linea-caliente/cocinas-industriales/cocina-5.png",
        caracteristicas: [
            "Fabricado en acero inoxidable AISI 304 (Acero quirúrgico)",
            "Espesor de plancha 1.20mm",
            "Parrillas de fierro fundido",
            "Quemadores removibles",
            "Base inferior con rejillas para ollas",
            "Uniones fijas de soldadura TIG de fino acabado",
            "Medidas personalizadas de acuerdo a su requerimiento"
        ]
    },

    {
        id: 6,
        nombre: "COCINA CON 6 HORNILLAS",
        img: "img/img-categorias/linea-caliente/cocinas-industriales/cocina-6.png",
        caracteristicas: [
            "Fabricado en acero inoxidable AISI 304 (Acero quirúrgico)",
            "Espesor de plancha 1.20mm",
            "Parrillas de fierro fundido",
            "Quemadores removibles",
            "Base inferior con rejillas para ollas",
            "Uniones fijas de soldadura TIG de fino acabado",
            "Medidas personalizadas de acuerdo a su requerimiento"
        ]
    },
    // Agrega más productos según sea necesario
];

//=======================================================================================================================================
//IMPRIMIR DINAMICAMENTE
//=======================================================================================================================================
// Obtener el contenedor principal
var contenedor = document.querySelector('.container__card');

tablaCocinasIndustriales.forEach(function (producto) {
    var html = `
      <div class="card__father">
          <div class="cardA" style="border: 0px solid black;">
              <div class="card__front"
                  style="border: 0px solid black;background-color:  #04343c ;border-top-left-radius: 10px;border-top-right-radius: 10px;">
                  <div class="bg ">
                      <img src="${producto.img}" alt="" class="img-fluid">
                  </div>
                  <div class="relative contenedor-tipo">
                      <div class="body__card_front absolute">
                          <h1 class="letra-signika">${producto.nombre}</h1>
                      </div>
                  </div>
              </div>
              <div class="card__back"
                  style="border: 0px solid black;border-top-left-radius: 10px;border-top-right-radius: 10px;">
                  <div class="body__card_back relative">
                      <div class="product-description">
                          <ul>
                              ${producto.caracteristicas.map(caracteristica => `<li>${caracteristica}</li>`).join('')}
                          </ul>
                      </div>
                      <button class="my-button absolute">
                          <i class="ri-add-line"></i>
                          <i class="ri-shopping-cart-line"></i>
                      </button>
                  </div>
              </div>
          </div>
      </div>
    `;

    contenedor.innerHTML += html;
});

