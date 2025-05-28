import './style.css';

const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const botonReiniciar = document.getElementById('reiniciar');
const mensaje = document.getElementById('mensaje');
const contadorIntentos = document.getElementById('intentos');

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
    } else{
        intentos++;
        contadorIntentos.textContent = `Intentos: ${intentos}`;

        if (numeroJugador === numeroSecreto) {
            mensaje.textContent = '¡Felicidades! ¡Adivinaste el número!';
        } else if (numeroJugador < numeroSecreto) {
            mensaje.textContent = 'El número es más alto.';
        } else {
            mensaje.textContent = 'El número es más bajo.';
        }
    }
});

botonReiniciar.addEventListener('click', () => {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    contadorIntentos.textContent = 'Intentos: 0';
    mensaje.textContent = 'Juego reiniciado. ¡Intenta adivinar el nuevo número!';
    inputNumero.value = ''; 
});