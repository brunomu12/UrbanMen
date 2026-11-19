const formulario = document.getElementById("login");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("mail").value;

    sessionStorage.setItem("usuario", email);

    window.location.href = "../index.html";
});