const mysql = require('mysql2');

// Configura la conexión a MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'DeviousWind',
    password: '13092001',
    database: 'DeviousWind'  // Reemplaza con el nombre de tu base de datos
});

// Conéctate a MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a MySQL:', err);
        return;
    }
    console.log('Conectado a MySQL correctamente');
});

module.exports = connection;

