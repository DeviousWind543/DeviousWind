function actualizarReloj() {
    const reloj = document.getElementById('reloj');
    const fecha = new Date();
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    // Formatea las horas, minutos y segundos con ceros a la izquierda si son menores de 10
    const horaFormateada = horas < 10 ? `0${horas}` : horas;
    const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;
    const segundosFormateados = segundos < 10 ? `0${segundos}` : segundos;

    // Actualiza el contenido del elemento con la hora
    reloj.textContent = `${horaFormateada}:${minutosFormateados}:${segundosFormateados}`;
}

// Llama a la función para actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Llama a la función para actualizar el reloj cuando la página se carga
window.addEventListener('load', actualizarReloj);
