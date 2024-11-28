
const express = require('express');
const bodyParser = require('body-parser'); // Asegúrate de instalar body-parser

const app = express();

// Middleware para leer datos de formularios URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar el envío del formulario de contacto
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Verificar si los campos están vacíos
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Faltan datos en el formulario' });
  }

  // Aquí puedes agregar la lógica para enviar el correo o almacenar los datos
  console.log('Datos recibidos:', { name, email, message });

  // Respuesta al cliente
  res.send('Formulario enviado correctamente');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
