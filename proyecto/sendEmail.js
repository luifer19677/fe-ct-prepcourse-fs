// Importar Nodemailer
const nodemailer = require('nodemailer');

// Configurar el transporte de correo (usando Gmail en este caso)
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lfquintero4539@gmail.com', // Tu correo de Gmail
    pass: '/*JEHOVA19674539*/', // Tu contraseña de Gmail
  }
});

// Función para enviar el correo
function sendEmail(userEmail, userName, userMessage) {
  let mailOptions = {
    from: '', // Correo de origen
    to: '', // Aquí puedes cambiar el correo de destino
    subject: 'Nuevo mensaje de contacto',
    text: `Has recibido un mensaje de ${userEmail}: ${userName}: ${userMessage}`, // Mensaje en texto
    html: `<p><strong>${userName}</strong> te ha enviado el siguiente mensaje: <br>${userMessage}</p>` // Mensaje en HTML
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Correo enviado: ' + info.response);
  });
}

// Exportar la función para que pueda ser utilizada en otros archivos
module.exports = sendEmail;
