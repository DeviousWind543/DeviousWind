import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBx89YRtravITCUzYlhx6eh3Cz_JKy45v4",
  authDomain: "deviouswind543.firebaseapp.com",
  databaseURL: "https://deviouswind543-default-rtdb.firebaseio.com",
  projectId: "deviouswind543",
  storageBucket: "deviouswind543.appspot.com",
  messagingSenderId: "612868944328",
  appId: "1:612868944328:web:4cc22396da4b213a4d50fd",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }; // Exporta la referencia a la base de datos

