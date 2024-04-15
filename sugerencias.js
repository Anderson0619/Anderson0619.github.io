document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    
    // Obtener valores del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var anonimo = document.getElementById('anonimo').checked;
    var sugerencia = document.getElementById('categorizacion').value; // Obtener el valor seleccionado del select
    
    // Construir el cuerpo del correo electrónico
    var body = 'Mensaje de contacto desde el sitio web Fishcorp\n';
    
    if (!anonimo) {
        // Si no es anónimo, validar el correo electrónico
        if (!email) {
            alert('Por favor, ingresa tu correo electrónico.');
            return;
        }
        
        body += 'Sugerencia/Denuncia: ' + sugerencia + '\n' + // Agregar la categorización al cuerpo del correo
                'Nombre: ' + name + '\n' + 
                'Correo Electrónico: ' + email + '\n';
    } else {
        body += 'Sugerencia/Denuncia: ' + sugerencia + '\n' + // Agregar la categorización al cuerpo del correo
                'Nombre: Anónimo\n' +
                'Correo Electrónico: No proporcionado\n';

        document.getElementById('name').disabled = true;
        document.getElementById('email').disabled = true; 
    }
    
    body += 'Mensaje: ' + message;
    
    // Construir el enlace mailto
    var mailtoLink = 'mailto:trabajosocial@fishcorpsa.com.ec' +
                     '?subject=' + encodeURIComponent('Mensaje de contacto desde el sitio web Fishcorp') +
                     '&body=' + encodeURIComponent(body);
    
    // Abrir el cliente de correo con los valores prellenados
    window.location.href = mailtoLink;
});

// Manejar el cambio en la casilla "Enviar de forma anónima"
document.getElementById('anonimo').addEventListener('change', function() {
    var emailField = document.getElementById('email');
    
    // Si la casilla "Enviar de forma anónima" está marcada, eliminar el atributo "required" del campo de correo electrónico
    if (this.checked) {
        emailField.removeAttribute('required');

        document.getElementById('name').disabled = true;
        emailField.disabled = true;
    } else {
        // Si no está marcada, agregar el atributo "required"
        emailField.setAttribute('required', 'required');

        document.getElementById('name').disabled = false;
        emailField.disabled = false;
    }
});
