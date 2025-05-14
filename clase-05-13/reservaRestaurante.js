// Aquí tienes un código incompleto para tomar como base. Cada función está definida, pero los pasos cruciales aún no están implementados.

// Simulando una base de datos de mesas
const mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Completa la lógica aquí: Si hay suficientes mesas disponibles, resuelve la promesa, 
      // de lo contrario, recházala con un mensaje adecuado.
      if (mesasDisponibles >= mesasSolicitadas) {
        resolve("Si hay mesa disponible.");
      }else{
        reject("No hay mesas disponibles.")
      }
    }, 2000);  // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Completa la lógica aquí: Simula un envío de correo. Usa Math.random() 
      // para simular si el correo se envió correctamente o si ocurrió un error.
      const exito = Math.random() < 0.5;
      
      if (exito) {
        resolve(`Correo de confirmación enviado a ${nombreCliente}`);
      } else {
        reject(`Error al enviar el correo de confirmación a ${nombreCliente}`);
      }
    }, 1500);  // Simula el envío de un correo (1.5 segundos)
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);  // Llama a la función de verificación
    console.log(disponibilidad);
    
    // Completa el flujo aquí: Si hay mesas disponibles, llama a la función para enviar la confirmación.
    // Si no hay mesas disponibles o si ocurre un error, captura el error.
    console.log("Enviando confirmación de reserva...");
    const mensajeConfirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(mensajeConfirmacion);

  } catch (error) {
    console.log("Error:", error);  // Maneja los errores en la promesa
  }
}

// Llamada de prueba
hacerReserva("Juan Pérez", 3);  // Intenta hacer una reserva para 3 personas