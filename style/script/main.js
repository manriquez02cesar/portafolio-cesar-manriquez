document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. LÓGICA REUTILIZABLE: DETECCIÓN DE PÁGINA ---
    // Detectamos si estamos en la raíz o en el index.html
    const isIndexPage = window.location.pathname === "/" || 
                        window.location.pathname.endsWith("index.html");

    // --- 2. CONFIGURACIÓN DE FONDOS (INDEX vs OTRAS PÁGINAS) ---
    if (isIndexPage) {
        // Fondo de Video (Solo para Index)
        const video = document.createElement("video");
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.className = "video-bg";

        const source = document.createElement("source");
        source.src = "componentes/vds/body.mp4";
        source.type = "video/mp4";

        video.appendChild(source);
        document.body.prepend(video);
    } else {
        // Fondo en Tonos Azules (Para todas las páginas excepto Index)
        const fondo = document.createElement("div");
        fondo.style.position = "fixed";
        fondo.style.top = "0";
        fondo.style.left = "0";
        fondo.style.width = "100%";
        fondo.style.height = "100%";
        fondo.style.background = "linear-gradient(135deg, #b3ecff, #e7f1f4)";
        fondo.style.filter = "blur(80px)";
        fondo.style.zIndex = "-1";

        document.body.appendChild(fondo);
    }

    // --- 3. ANIMACIÓN DE TARJETAS (FLIP CARDS) ---
    // Funciona de forma segura: si hay tarjetas en la página, les añade el evento. 
    // Si no hay (como en contacto), no hace nada y no rompe el código.
    document.querySelectorAll(".flip-card").forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("active");
        });
    });

    // --- 4. VALIDACIONES DEL FORMULARIO DE CONTACTO ---
    // Buscamos el formulario. Si existe en el HTML actual, ejecutamos la lógica.
    const form = document.getElementById('contactForm');

    if (form) {
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
    }

});