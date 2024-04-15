document.getElementById('contactForm-general').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get form values
  var name = document.getElementById('name-general').value;
  var email = document.getElementById('email-general').value;
  var message = document.getElementById('message-general').value;

  // Construct the mailto URL
  var mailtoLink = 'mailto:trabajosocial@fishcorpsa.com.ec' +
                   '?subject=' + encodeURIComponent('Mensaje de contacto desde el sitio web Fishcorp') +
                   '&body=' + encodeURIComponent('Nombre: ' + name + '\nCorreo Electrónico: ' + email + '\nMensaje: ' + message);

  // Open the mail client with the pre-filled values
  window.location.href = mailtoLink;
});
