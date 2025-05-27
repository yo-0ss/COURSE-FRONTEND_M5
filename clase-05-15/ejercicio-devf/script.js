document.getElementById('registroEvento').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío automático del formulario

      // Variables
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

      // Validaciones básicas

    const hoy = new Date();
    const fechaEvento = new Date(fecha);
    hoy.setHours(0, 0, 0, 0);
    if (fechaEvento < hoy) {
        alert('La fecha del evento no puede ser en el pasado.');
        return;
    }


    if (!/^\d{10}$/.test(telefono)) {
        alert('El número de teléfono debe tener 10 dígitos.');
        return;
    }
  

    if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    // Si todo está bien
    alert('Registro exitoso. ¡Gracias por registrarte!');
});