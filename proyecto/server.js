const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Middleware para poder recibir datos en formato JSON
app.use(express.json());

// Configuración de Nodemailer (aquí necesitas usar tus datos de acceso a un servicio de correo)
const transporter = nodemailer.createTransport({
  service: 'gmail', // O el servicio que estés usando
  auth: {
    user: 'lfquintero4539@gmail.com', // Tu correo
    pass: '/*JEHOVA19674539*/', // Tu contraseña o contraseña de aplicación
  },
});

// Ruta POST para recibir los datos del formulario
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Faltan datos en el formulario' });
  }

  // Configuración del correo
  const mailOptions = {
    from: 'lfquintero4539@gmail.com', // El correo desde el cual se envía
    to: 'lfquintero19677@gmail.com', // El correo al cual se enviará (puede ser el tuyo o de la empresa)
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'Hubo un error al enviar el correo' });
    }
    console.log('Correo enviado: ' + info.response);
    res.status(200).json({ message: 'Formulario enviado correctamente' });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
