
function mostrarCarrito() {
    const lista = document.getElementById("lista-carrito");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    lista.innerHTML = "";

    // Eliminar el resumen anterior
    document.getElementById("resumen-carrito")?.remove();

    if (carrito.length === 0) {
        lista.innerHTML = `
            <p class="carrito-vacio">
                Tu carrito está vacío.
            </p>
        `;
        return;
    }

    let total = 0;

    carrito.forEach(function(producto, i) {

        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        lista.innerHTML += `
            <div class="tarjeta-producto">

                <div class="imagen-producto">
                    <img src="../${producto.imagen}" alt="${producto.nombre}">
                </div>

                <h3>${producto.nombre}</h3>

                <p>${producto.descripcion}</p>

                <p>Precio: $${producto.precio.toLocaleString("es-AR")}</p>

                <div class="cantidad-producto">

                    <button onclick="cambiarCantidad(${i}, -1)">
                        -
                    </button>

                    <span>${producto.cantidad}</span>

                    <button onclick="cambiarCantidad(${i}, 1)">
                        +
                    </button>

                </div>

                <p>Subtotal: $${subtotal.toLocaleString("es-AR")}</p>

                <button onclick="eliminarDelCarrito(${i})">
                    Eliminar
                </button>

            </div>
        `;
    });

 
    document.body.insertAdjacentHTML("beforeend", `
        <div id="resumen-carrito" class="resumen-carrito">

            <h2>Total: $${total.toLocaleString("es-AR")}</h2>

            <button onclick="vaciarCarrito()">
                Vaciar carrito
            </button>

        </div>
    `);
}




function cambiarCantidad(i, cambio) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito[i].cantidad = Number(carrito[i].cantidad);

    carrito[i].cantidad += cambio;

    // Evitar cantidades menores a 1
    if (carrito[i].cantidad < 1) {
        carrito[i].cantidad = 1;
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();
}




function eliminarDelCarrito(i) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.splice(i, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();
}




function vaciarCarrito() {

    localStorage.removeItem("carrito");

    mostrarCarrito();
}