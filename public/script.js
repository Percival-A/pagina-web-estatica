document.getElementById('siguiente').addEventListener('click', function() {
    const imagen = document.createElement('img');
    imagen.src = "imagen2.jpg"; // Cambia a la ruta de tu segunda imagen
    imagen.alt = "segundo acto";
    document.body.appendChild(imagen);
});
