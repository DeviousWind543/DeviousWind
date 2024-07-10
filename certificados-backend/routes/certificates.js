// routes/certificates.js
const express = require('express');
const router = express.Router();
const Certificate = require('../models/Certificate');

// Obtener todos los certificados
router.get('/', async (req, res) => {
    try {
        const certificates = await Certificate.find();
        res.json(certificates);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Crear un nuevo certificado
router.post('/', async (req, res) => {
    const { courseName, studentName, completionDate } = req.body;
    const newCertificate = new Certificate({
        courseName,
        studentName,
        completionDate
    });

    try {
        const savedCertificate = await newCertificate.save();
        res.status(201).json(savedCertificate);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
