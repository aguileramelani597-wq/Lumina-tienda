// =====================================
// Lúmina
// JAVASCRIPT
// =====================================


// =====================================
// LISTA DE PRODUCTOS
// =====================================

const productos = [

    {
        nombre: "Remera básica",
        descripcion: "Remera cómoda y versátil para todos los días.",
        precio: 15000,
        imagen: "img/remera1.jpeg"
    },

    {
        nombre: "Remera urbana",
        descripcion: "Diseño moderno para un look urbano.",
        precio: 18000,
        imagen: ".img/remera2.jpeg"
    },

    {
        nombre: "Pantalón clásico",
        descripcion: "Pantalón cómodo y fácil de combinar.",
        precio: 28000,
        imagen: ".img/pantalon1.jpeg"
    },

    {
        nombre: "Pantalón moderno",
        descripcion: "Diseño moderno para combinar con diferentes prendas.",
        precio: 32000,
        imagen: ".img/pantalon2.jpeg"
    },

    {
        nombre: "Vestido elegante",
        descripcion: "Vestido elegante y femenino para diferentes ocasiones.",
        precio: 35000,
        imagen: ".img/vestido1.jpeg"
    },

    {
        nombre: "Campera urbana",
        descripcion: "Campera moderna ideal para completar tu outfit.",
        precio: 45000,
        imagen: ".img/campera.jpeg"
    }

];


// =====================================
// MOSTRAR PRODUCTOS
// =====================================

const listaProductos =
    document.getElementById("lista-productos");


productos.forEach(function (producto, indice) {

    const tarjeta = document.createElement("article");

    tarjeta.classList.add("producto");


    tarjeta.innerHTML = `

        <div class="producto-imagen">

            <img
                src="${producto.imagen}"
                alt="${producto.nombre}"
            >

        </div>


        <div class="producto-info">

            <h3>
                ${producto.nombre}
            </h3>

            <p class="descripcion">
                ${producto.descripcion}
            </p>

            <p class="precio">
                $${producto.precio.toLocaleString("es-AR")}
            </p>

            <a
                class="comprar"
                href="https://wa.me/5492646061764?text=Hola%20Meli%20Store%2C%20quiero%20consultar%20por%20${encodeURIComponent(producto.nombre)}"
                target="_blank"
            >
                Consultar por WhatsApp
            </a>

        </div>

    `;


    listaProductos.appendChild(tarjeta);


    // =====================================
    // ANIMACIÓN
    // =====================================

    setTimeout(function () {

        tarjeta.classList.add("mostrar");

    }, indice * 150);

});


// =====================================
// MENSAJE EN CONSOLA
// =====================================

console.log("Meli Store cargó correctamente.");

console.log(
    "Cantidad de productos:",
    productos.length
);
