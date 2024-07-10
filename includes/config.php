<?php
$servername = "localhost";
$username = "root";  // Nombre de usuario de la base de datos
$password = "";      // Contraseña de la base de datos
$dbname = "deviouswind";  // Nombre de la base de datos

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    // Configuración adicional para manejar errores y excepciones
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
} catch (PDOException $e) {
    // Si hay algún error en la conexión, muestra un mensaje de error
    die("Error: No se pudo conectar a la base de datos. " . $e->getMessage());
}
?>