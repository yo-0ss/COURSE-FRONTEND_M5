const cowsay = require('cowsay');
const planetas = require('./planetas');
// Aquí mostraremos la información de los planetas

console.log(
  cowsay.say({
    text: "¡Bienvenido al Registro Planetario!",
    e: "^^",
    T: "U "
  })
);


planetas.forEach(planeta => {
  console.log(`¡Planeta ${planeta.nombre} descubierto!`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
  console.log('---');
});