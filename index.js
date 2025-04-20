const express = require('express');
const app = express();
const PORT = 3000;

// 👉 Aquí está tu variable temporal
let base_datos = [];

// Servir archivos estáticos desde 'public'
app.use(express.static('public'));

// Middleware para poder leer datos de formularios
app.use(express.urlencoded({ extended: true }));

// Ruta para recibir datos del formulario (POST)
app.post('/', (req, res) => {
  // Agregar los datos al array 'clientes'
    base_datos.push(req.body);

console.log('Nuevo cliente registrado:', req.body);
console.log('Clientes registrados:', clientes);

  // Puedes redirigir de vuelta o enviar una respuesta
res.send('Cliente registrado correctamente');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
