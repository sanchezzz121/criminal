(function () {
            'use strict';
            const form = document.getElementById('contactForm');
            const whatsappNumber = '+5511999999999'; 
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();

                if (form.checkValidity()) {
                    const name = document.getElementById('floatingName').value;
                    const email = document.getElementById('floatingEmail').value;
                    const message = document.getElementById('floatingTextarea2').value;

                    const text = `Olá! Meu nome é ${name}.%0AEmail: ${email}%0AMensagem: ${message}`;
                    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

                    window.open(url, '_blank');
                }

                form.classList.add('was-validated');
            }, false);
        })();