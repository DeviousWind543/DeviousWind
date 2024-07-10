document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtiene la contraseña ingresada por el usuario
    const password = document.getElementById("password").value;

    // Verifica si la contraseña es correcta
    if (password === "13092001") {
        // Si la contraseña es correcta, redirecciona a la página protegida
        window.location.href = "Opciones.html";
    } else {
        // Si la contraseña es incorrecta, muestra un mensaje de error
        document.getElementById("loginMessage").textContent = "Contraseña incorrecta.";
    }
});