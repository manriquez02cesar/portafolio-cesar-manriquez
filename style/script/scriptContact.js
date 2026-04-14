document.addEventListener("DOMContentLoaded", function () {
            // Lógica de Validación
            const form = document.getElementById('contactForm');
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const submitBtn = document.getElementById('submitBtn');

            function validateForm() {
                const nameVal = nameInput.value.trim();
                const emailVal = emailInput.value.trim();
                const messageVal = messageInput.value.trim();

                // 1. Validar nombre (sin números)
                const nameValid = nameVal !== "" && !/\d/.test(nameVal);
                toggleValidationClass(nameInput, nameValid);

                // 2. Validar email (formato correcto)
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const emailValid = emailRegex.test(emailVal);
                toggleValidationClass(emailInput, emailValid);

                // 3. Validar mensaje (mínimo 3 palabras)
                const words = messageVal.split(/\s+/).filter(word => word.length > 0);
                const messageValid = words.length >= 3;
                toggleValidationClass(messageInput, messageValid);

                // Habilitar/Deshabilitar botón
                submitBtn.disabled = !(nameValid && emailValid && messageValid);
            }

            function toggleValidationClass(input, isValid) {
                if (input.value.length > 0) {
                    if (isValid) {
                        input.classList.remove('is-invalid');
                        input.classList.add('is-valid');
                    } else {
                        input.classList.remove('is-valid');
                        input.classList.add('is-invalid');
                    }
                } else {
                    input.classList.remove('is-valid', 'is-invalid');
                }
            }

            // Escuchar eventos de escritura
            nameInput.addEventListener('input', validateForm);
            emailInput.addEventListener('input', validateForm);
            messageInput.addEventListener('input', validateForm);
        });