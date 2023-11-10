const primerNombre = document.getElementById('primer_nombre');
const segundoNombre = document.getElementById('segundo_nombre');
const primerApellido = document.getElementById('primer_apellido');
const segundoApellido = document.getElementById('segundo_apellido');
const numeroTicket = document.getElementById('numero_ticket');
const btnEnviar = document.getElementById('submit'); // Agrega esta línea para seleccionar el botón
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
// Inicializa Firebase (asegúrate de haber configurado tu proyecto de Firebase previamente)
const firebaseConfig = {
    apiKey: "AIzaSyBx89YRtravITCUzYlhx6eh3Cz_JKy45v4",
            authDomain: "deviouswind543.firebaseapp.com",
            databaseURL: "https://deviouswind543-default-rtdb.firebaseio.com",
            projectId: "deviouswind543",
            storageBucket: "deviouswind543.appspot.com",
            messagingSenderId: "612868944328",
            appId: "1:612868944328:web:4cc22396da4b213a4d50fd",
            measurementId: "G-X56MY7PB6Z"
  };
  const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const participantesRef = database.ref('Participantes'); // Ref para los participantes

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Obtén los valores de los campos del formulario
    const primerNombreValue = primerNombre.value;
    const segundoNombreValue = segundoNombre.value;
    const primerApellidoValue = primerApellido.value;
    const segundoApellidoValue = segundoApellido.value;
    const numeroTicketValue = numeroTicket.value;
    
    // Crea un objeto con los datos del participante
    const nuevoParticipante = {
        'Primer Nombre': primerNombreValue,
        'Segundo Nombre': segundoNombreValue,
        'Primer Apellido': primerApellidoValue,
        'Segundo Apellido': segundoApellidoValue,
        'Numero de Ticket': numeroTicketValue
    };
    
    // Almacena los datos del participante en la base de datos de Firebase
    participantesRef.push(nuevoParticipante)
        .then(() => {
            // Limpiar los campos del formulario después de enviar los datos
            primerNombre.value = '';
            segundoNombre.value = '';
            primerApellido.value = '';
            segundoApellido.value = '';
            numeroTicket.value = '';
            alert('Datos enviados correctamente');
        })
        .catch((error) => {
            console.error('Error al enviar los datos:', error);
        });
});
