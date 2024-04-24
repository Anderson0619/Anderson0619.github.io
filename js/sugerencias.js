document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const anonimoCheckbox = document.getElementById('anonimo');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const categorizacion = document.getElementById('categorizacion').value;
        const message = document.getElementById('message').value;
        const correo = anonimoCheckbox.checked ? "Anónimo" : emailInput.value;

        fetch('https://formspree.io/f/xzbnypkr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({categorizacion, correo, message})
        })
        .then(response => {
            if(response.ok) {
                successMessage.classList.remove('hidden');
                form.reset();

                setTimeout(function() {
                    successMessage.classList.add('hidden');
                }, 5000);
            } else{
                throw new Error('Error al enviar el formulario');
            }
        })
        .catch(error => {
            console.error('Error', error);
        });
    });

    anonimoCheckbox.addEventListener('change', function() {
        if (anonimoCheckbox.checked) {
            emailInput.disabled = true;
            emailInput.value = ''; // Limpiar el valor del email si se marca como anónimo
            emailInput.removeAttribute('required'); // Quitar la obligatoriedad del campo email
        } else {
            emailInput.disabled = false;
            emailInput.setAttribute('required', true); // Restaurar la obligatoriedad del campo email
        }
    });
});
