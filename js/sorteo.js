// Importa las funciones necesarias de Firebase Realtime Database
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

// Tu configuración de Firebase
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

// Inicializa Firebase con la configuración
const app = initializeApp(firebaseConfig);

// Obtén una referencia a la base de datos
const database = getDatabase(app);

// Obtén una referencia a la colección de participantes
const participantesRef = ref(database, "participantes");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  // Obtener valores del formulario y guardar en Firebase
  const primerNombre = document.querySelector("#primer_nombre").value;
  const segundoNombre = document.querySelector("#segundo_nombre").value;
  const primerApellido = document.querySelector("#primer_apellido").value;
  const segundoApellido = document.querySelector("#segundo_apellido").value;
  const numeroTicket = parseInt(document.querySelector("#numero_ticket").value);

  // Guardar los datos en Firebase
  const nuevoParticipante = {
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    numeroTicket,
  };

  // Agregar el nuevo participante a la colección
  push(participantesRef, nuevoParticipante)
    .then(() => {
      // Limpiar el formulario después de guardar
      formulario.reset();
      alert("Participante registrado con éxito.");
    })
    .catch((error) => {
      alert("Hubo un error al registrar el participante: " + error.message);
    });
});

