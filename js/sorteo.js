import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// ...

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

const app = initializeApp(firebaseConfig);

// Obtener una instancia de Firebase Authentication
const auth = getAuth();

// Manejar el inicio de sesión
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Usuario autenticado con éxito
      const user = userCredential.user;
      console.log("Usuario autenticado: ", user);
    })
    .catch((error) => {
      console.error("Error al autenticar: ", error);
    });
});

// Manejar el registro de usuarios
document.getElementById("register-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Usuario registrado con éxito
      const user = userCredential.user;
      console.log("Usuario registrado: ", user);
    })
    .catch((error) => {
      console.error("Error al registrar usuario: ", error);
    });
});
