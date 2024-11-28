document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario
  
    // Capturar los datos del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Validación básica
    if (!name || !email || !telefono || !message) {
      alert('Por favor, complete todos los campos.');
      return;
    }
  
    // Datos a enviar al servidor
    const formData = {
      name,
      email,
      telefono,
      message,
    };
  
    // Opciones para la solicitud fetch
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
  
    // Enviar datos al servidor
    fetch('http://localhost:3000/api/contact', options) // Cambia la URL a tu endpoint real
      .then((response) => {
        if (response.ok) {
          alert('Formulario enviado con éxito. ¡Gracias por contactarnos!');
          document.getElementById('contactForm').reset(); // Reinicia el formulario
        } else {
          alert('Hubo un problema al enviar el formulario. Intente nuevamente.');
        }
      })
      .catch((error) => {
        console.error('Error al enviar el formulario:', error);
        alert('Hubo un error al conectar con el servidor.');
      });
  });
  