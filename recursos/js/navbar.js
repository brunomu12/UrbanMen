const paginas = [
    { titulo: "Home", direccion: "index.html" },
    { titulo: "Remeras", direccion: "remeras.html" },
    { titulo: "Sweaters", direccion: "sweaters.html" },
    { titulo: "Camperas", direccion: "camperas.html" },
    { titulo: "Jeans", direccion: "jeans.html" }
];

function cerrarSesion() {
    if (window.location.pathname.includes("/pages/")) {
        window.location.href = "login.html";
    } else {
        window.location.href = "pages/login.html";
    }
}

function crearNavbar() {
    const dentroDePages = window.location.pathname.includes("/pages/");

    const rutaInicio = dentroDePages
        ? "../index.html"
        : "index.html";

    const rutaPages = dentroDePages
        ? ""
        : "pages/";

    let contenido = `
        <nav>
            <a href="${rutaInicio}">👕 Urban Men</a>
    `;

    for (let i = 0; i < paginas.length; i++) {
        let direccion;

        if (paginas[i].direccion === "index.html") {
            direccion = rutaInicio;
        } else {
            direccion = rutaPages + paginas[i].direccion;
        }

        contenido += `
            <a href="${direccion}">
                ${paginas[i].titulo}
            </a>
        `;
    }
    contenido += `
    <a href="#" onclick="cerrarSesion(); return false;">
        Cerrar sesión
    </a>
    </nav>

   
    `;

    document.getElementById("navbar").innerHTML = contenido;
}