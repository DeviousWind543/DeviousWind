document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const x = document.querySelectorAll(".x");

    searchButton.addEventListener("click", searchProducts);
    
    // Agregar un event listener para la tecla "Enter" en el input de búsqueda
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchProducts();
        }
    });

    function searchProducts() {
        const searchTerm = searchInput.value.toLowerCase();

        x.forEach(function (product) {
            const productTitle = product.querySelector("h2").textContent.toLowerCase();

            if (productTitle.includes(searchTerm)) {
                product.style.display = "block"; // Muestra el producto si coincide
            } else {
                product.style.display = "none"; // Oculta el producto si no coincide
            }
        });
    }
});

