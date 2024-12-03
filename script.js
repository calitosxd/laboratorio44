// script.js

// Función para mostrar un mensaje de bienvenida
document.getElementById('bienvenidaButton').addEventListener('click', function() {
    alert('¡Bienvenido a mi página personal!');
});

// Función para validar el formulario de contacto
document.getElementById('formContacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe de inmediato

    // Validar campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        // Si todos los campos son válidos, mostrar confirmación
        document.getElementById('mensajeConfirmacion').textContent = '¡Gracias por tu mensaje, nos pondremos en contacto pronto!';
    } else {
        // Si algún campo está vacío, mostrar error
        document.getElementById('mensajeConfirmacion').textContent = 'Por favor, completa todos los campos.';
    }
});
