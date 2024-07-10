const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Importa el paquete CORS
const path = require('path');

const app = express();
const port = 5000;

// Middleware para permitir CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Configura la conexión a MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'DeviousWind',
    password: '13092001',
    database: 'DeviousWind' // Reemplaza con el nombre de tu base de datos
});

// Conéctate a MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a MySQL:', err);
        return;
    }
    console.log('Conectado a MySQL correctamente');
});

// Ruta para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'DEVIOUSWIND')));

// Endpoint para obtener todos los certificados
app.get('/api/certificates', (req, res) => {
    const query = 'SELECT * FROM certificates';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener los certificados:', err);
            res.status(500).json({ error: 'Error al obtener los certificados' });
            return;
        }
        res.json(results);
    });
});

// Endpoint para agregar un nuevo certificado
app.post('/api/certificates', (req, res) => {
    const { courseName, studentName, studentId, startDate, completionDate, teacherName } = req.body;
    const query = 'INSERT INTO certificates (courseName, studentName, studentId, startDate, completionDate, teacherName) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [courseName, studentName, studentId, startDate, completionDate, teacherName];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error('Error al agregar el certificado:', err);
            res.status(500).json({ error: 'Error al agregar el certificado' });
            return;
        }
        res.status(201).json({ message: 'Certificado agregado correctamente' });
    });
});

// Endpoint para eliminar un certificado por ID
app.delete('/api/certificates/:id', (req, res) => {
    const certificateId = req.params.id;
    const query = 'DELETE FROM certificates WHERE id = ?';

    connection.query(query, [certificateId], (err, results) => {
        if (err) {
            console.error('Error al eliminar el certificado:', err);
            res.status(500).json({ error: 'Error al eliminar el certificado' });
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Certificado no encontrado' });
        } else {
            res.json({ message: 'Certificado eliminado correctamente' });
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor backend iniciado en http://localhost:${port}`);
});
