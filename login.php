<?php
session_start();

// Incluir archivo de conexión a la base de datos
include "includes/config.php";

// Verificar si se envió el formulario por POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificar que se recibieron los datos del formulario
    if (isset($_POST['email']) && isset($_POST['password'])) {
        // Obtener los datos del formulario
        $email = $_POST['email'];
        $password = $_POST['password'];

        // Consulta SQL para buscar el usuario por correo electrónico
        $sql = "SELECT * FROM usuarios WHERE email = '$email'";
        $resultado = $conn->query($sql);

        if ($resultado->num_rows == 1) {
            // Si el usuario existe, verificar la contraseña
            $row = $resultado->fetch_assoc();
            if (password_verify($password, $row['password'])) {
                // Iniciar sesión
                $_SESSION['id_usuario'] = $row['id'];
                $_SESSION['nombre'] = $row['nombre'];
                $_SESSION['tipo'] = $row['tipo'];
                
                // Redireccionar según el tipo de usuario (ejemplo básico)
                if ($row['tipo'] == 'admin') {
                    header("Location: admin.php");
                } else {
                    header("Location: cliente.php");
                }
                exit(); // Asegura que el script se detenga después de redirigir
            } else {
                echo "Contraseña incorrecta";
            }
        } else {
            echo "Usuario no encontrado";
        }
    } else {
        echo "Falta el correo electrónico o la contraseña";
    }
}

// Cerrar conexión a la base de datos
$conn->close();
?>
