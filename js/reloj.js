function actualizarReloj() {
    const fecha = new Date();
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
    const horaActual = `${horas}:${minutos}:${segundos}`;
    
    document.getElementById("reloj").innerHTML = horaActual;
}

setInterval(actualizarReloj, 1000); // Actualiza el reloj cada segundo (1000 ms)
