// Mostrar la ventana emergente al cargar la página
window.addEventListener("load", function() {
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("close-button");

    popup.style.display = "block";

    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
    });
});
