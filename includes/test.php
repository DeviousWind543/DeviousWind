<?php
// Verifica si se recibió una solicitud POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "Solicitud POST recibida correctamente.";
} else {
    echo "No se recibió una solicitud POST.";
}
?>
