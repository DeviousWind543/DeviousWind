// models/Certificate.js
const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    studentId: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    completionDate: {
        type: Date,
        required: true
    },
    teacherName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Certificate', CertificateSchema);
