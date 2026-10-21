const formulario = document.getElementById("login");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    window.location.href = "../index.html";
});