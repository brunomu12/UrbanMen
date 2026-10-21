const productos = [
    {
        nombre: "Remera básica azul",
        descripcion: "Remera básica de algodón",
        precio: 15000,
        imagen: "recursos/imagenes/remeraAzul.webp",
        categoria: "remera"
    },
    {
        nombre: "Remera básica negra",
        descripcion: "Remera básica de algodón",
        precio: 17000,
        imagen: "recursos/imagenes/remeraNegra.webp",
        categoria: "remera"
    },
    {
        nombre: "Remera básica verde",
        descripcion: "Remera básica de algodón",
        precio: 13000,
        imagen: "recursos/imagenes/remeraVerde.webp",
        categoria: "remera"
    },
    {
        nombre: "Sweater clásico",
        descripcion: "Sweater clásico de algodón",
        precio: 25000,
        imagen: "recursos/imagenes/sweaterAzul.webp",
        categoria: "sweater"
    },
    {
        nombre: "Sweater beige",
        descripcion: "Sweater clásico de algodón",
        precio: 28000,
        imagen: "recursos/imagenes/sweaterBeige.webp",
        categoria: "sweater"
    },
    {
        nombre: "Sweater verde",
        descripcion: "Sweater clásico de algodón",
        precio: 19000,
        imagen: "recursos/imagenes/sweaterVerde.webp",
        categoria: "sweater"
    },
    {
        nombre: "Campera cuello alto",
        descripcion: "Campera con cuello alto ",
        precio: 35000,
        imagen: "recursos/imagenes/camperaAlto.webp",
        categoria: "campera"
    },
    {
        nombre: "Campera Puffer",
        descripcion: "Campera negra inflable",
        precio: 45000,
        imagen: "recursos/imagenes/camperaPuffer.webp",
        categoria: "campera"
    },
    {
        nombre: "Jean Mom",
        descripcion: "Jean Mom, 38 al 46",
        precio: 36000,
        imagen: "recursos/imagenes/jeanMom.webp",
        categoria: "jean"
    },
    {
        nombre: "Jean Skynni",
        descripcion: "Jean Skynni, 40 al 46",
        precio: 36000,
        imagen: "recursos/imagenes/jeanSkynni.webp",
        categoria: "jean"
    }
];

function obtenerProductosDeLaPagina() {
    const archivo = window.location.pathname
        .split("/")
        .pop()
        .replace(".html", "");

    if (archivo === "index") {
        return productos;
    }

    let categoria = "";

    if (archivo === "remeras") {
        categoria = "remera";
    } else if (archivo === "sweaters") {
        categoria = "sweater";
    } else if (archivo === "camperas") {
        categoria = "campera";
    } else if (archivo === "jeans") {
        categoria = "jean";
    }

    return productos.filter(function(producto) {
        return producto.categoria === categoria;
    });
}

function mostrarProductos() {
    const lista = document.getElementById("lista-productos");

    lista.innerHTML = "";
    const productosMostrar = obtenerProductosDeLaPagina();

    productosMostrar.forEach(function(producto, i) {

        const rutaImagen = window.location.pathname.includes("/pages/")
            ? "../" + producto.imagen
            : producto.imagen;

        lista.innerHTML += `
            <div class="tarjeta-producto">
                <div class="imagen-producto">
                    <img src="${rutaImagen}" alt="${producto.nombre}">
                </div>

                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>

                <div class="cantidad-producto">
                    <button onclick="disminuirCantidad(${i})">−</button>

                    <span id="cantidad-${i}">1</span>

                    <button onclick="aumentarCantidad(${i})">+</button>
                </div>

                <button onclick="agregarAlCarrito(${i})">
                    Agregar al carrito
                </button>
            </div>
        `;
    });
}

function aumentarCantidad(i) {
    const cantidad = document.getElementById("cantidad-" + i);
    let valor = Number(cantidad.textContent);

    valor++;

    cantidad.textContent = valor;
}

function disminuirCantidad(i) {
    const cantidad = document.getElementById("cantidad-" + i);
    let valor = Number(cantidad.textContent);

    if (valor > 1) {
        valor--;
    }

    cantidad.textContent = valor;
}

function agregarAlCarrito(i) {
    const cantidad = Number(
        document.getElementById("cantidad-" + i).textContent
    );

    const productosMostrar = obtenerProductosDeLaPagina();

    if (cantidad > 0) {
        alert(
            "Agregaste " + cantidad + " unidad(es) de " +
            productosMostrar[i].nombre + " al carrito."
        );
    } else {
        alert("Seleccioná al menos una unidad.");
    }
}

mostrarProductos();