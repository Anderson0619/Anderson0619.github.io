document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Construct the mailto URL
  var mailtoLink = 'mailto:sistemas@fishcorpsa.com.ec' +
                   '?subject=' + encodeURIComponent('Mensaje de contacto desde el sitio web') +
                   '&body=' + encodeURIComponent('Nombre: ' + name + '\nCorreo Electrónico: ' + email + '\nMensaje: ' + message);

  // Open the mail client with the pre-filled values
  window.location.href = mailtoLink;
});
