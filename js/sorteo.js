import { database } from "./clave.js"; // Importa la referencia a la base de datos

import { ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

const participantesRef = ref(database, "participantes");

// Escucha cambios en la base de datos
onValue(participantesRef, (snapshot) => {
  const participantes = snapshot.val();
  // Actualiza la interfaz de usuario con los datos de los participantes
  // Puedes mostrar los nombres y números de boleto en tu página aquí
});

const formulario = document.querySelector("form");
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

