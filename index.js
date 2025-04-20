const express = require('express'); // importamos express, que es el framework que nos permite crear el servidor de manera rápida y sencilla
const path = require('path'); // usamos path para navegar entre carpetas y manejar rutas de archivos correctamente sin importar el sistema operativo
const app = express(); // inicializamos express y lo guardamos en la variable app para usarlo
const PORT = 3000; // definimos el puerto que vamos a usar para levantar nuestro servidor

let base_datos = []; // aquí se van a guardar los datos que lleguen del formulario temporalmente en memoria

app.use(express.urlencoded({ extended: true })); // se agrega esta línea para que los datos del formulario puedan leerse correctamente; si es false, no se pueden leer bien cuando son datos complejos

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); // esta es la ruta principal que recibe solicitudes GET y responde enviando el archivo index.html que está dentro de la carpeta public

app.post('/registrar', (req, res) => {
    base_datos.push(req.body); // guardamos los datos que llegan del formulario en el array base_datos
    console.log('Nuevo cliente:', req.body); // mostramos en consola el nuevo cliente registrado
    res.redirect('/'); // redirigimos al usuario de vuelta al inicio después de enviar el formulario
}); // esta ruta recibe solicitudes POST cuando se envían los datos del formulario, y es más segura que GET porque los datos no viajan por la URL

app.use(express.static(path.join(__dirname, 'public'))); // aquí le decimos a express que sirva de forma estática todos los archivos dentro de la carpeta public (CSS, imágenes, JS)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); // iniciamos el servidor en el puerto que definimos arriba y mostramos un mensaje en consola cuando está corriendo

console.log(base_datos); // mostramos en consola el array base_datos, que al inicio está vacío
// se completa el proceso
// hola