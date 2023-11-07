document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const products = document.querySelectorAll(".product"); // Asegúrate de que esta clase sea la misma que usas para los productos

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.toLowerCase();

        products.forEach(function (product) {
            const productTitle = product.querySelector("h2").textContent.toLowerCase();

            if (productTitle.includes(searchTerm)) {
                product.style.display = "block"; // Muestra el producto si coincide
            } else {
                product.style.display = "none"; // Oculta el producto si no coincide
            }
        });
    });
});
