// --- 1. DICCIONARIO DE TRADUCCIONES ---
// Aquí vas a centralizar los textos de tus 5 páginas HTML.
const translations = {
  es: {
    // Textos del Index
    "lenguage-spanish": 'ES<span class="d-none d-md-inline">PAÑOL</span>',
    "lenguage-english": 'IN<span class="d-none d-md-inline">GLES</span>',
    "page-index": "Inicio",
    "page-mind": "Mi Mente",
    "page-project": "Mis Proyectos",
    "page-aboutme": "Acerca de mí",
    "page-contact": "Contacto",
    "index-pos": "Ingeniero en Sistemas Computacionales",
    "index-desc": "Desarrollador Jr. Backend con sólida formación en Java y especialización en la gestión de bases de datos relacionales.",
    "index-CV": "Descargar CV",
    "footer-desc": "Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales y código limpio.",
    "footer-status": "Disponible para trabajar", //Actualmente me encuentro laborando / Disponible para trabajar
    "footer-nav": "Navegación",
    "footer-con": "Conecta",
    "footer-frase": "Un desarrollador no solo escribe código, traduce ideas en realidad",
    "footer-cesar": "© 2026 Cesar Enrique Manriquez Torres. Todos los derechos reservados."
    // Textos de Contacto

    // Textos de tus otras páginas (agrega las que necesites)
  },
  en: {
    // Textos del Index
    "lenguage-spanish": 'SP<span class="d-none d-md-inline">ANISH</span>',
    "lenguage-english": 'EN<span class="d-none d-md-inline">GLISH</span>',
    "page-index" : "Index",
    "page-mind": "My mind",
    "page-project": "My Projects",
    "page-aboutme": "About me",
    "page-contact": "Contact",
    "index-pos": "Engineer Computer Systems",
    "index-desc": "Junior Backend Developer with solid training in Java and specialization in relational database management.",
    "index-CV": "Download CV",
    "footer-desc": "Full Stack Developer passionate about creating exceptional digital experiences and clean code.",
    "footer-status": "Available to work", //I am currently employed / Available to work
    "footer-nav": "Navegation",
    "footer-con": "Connect",
    "footer-frase": "A developer doesn't just write code, they translate ideas into reality.",
    "footer-cesar": "© 2026 Cesar Enrique Manriquez Torres. All rights reserved."
    // Textos de Contacto
    
    // Textos de tus otras páginas
    
  }
};

document.addEventListener("DOMContentLoaded", function () {
    
    // --- 2. LÓGICA DE TRADUCCIÓN Y LOCALSTORAGE ---
    function changeLanguage(lang) {
        const elementsToTranslate = document.querySelectorAll('[data-key]');
        
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-key');
            
            if (translations[lang] && translations[lang][key]) {
                // Manejo especial por si quieres traducir el título de la pestaña (<title>)
                if (element.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // Guardamos el idioma seleccionado en la memoria del navegador
        localStorage.setItem('preferred-lang', lang);
        
        // Opcional: Cambiar estilos visuales de Bootstrap para saber cuál botón está activo
        updateButtonStyles(lang);
    }

    function updateButtonStyles(activeLang) {
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    // Validamos que ambos botones existan en la página actual para evitar errores
    if (btnEs && btnEn) {
        if (activeLang === 'es') {
            // --- BOTÓN ESPAÑOL ACTIVO ---
            btnEs.style.backgroundColor = "#94a3b8"; // Azul vibrante
            btnEs.style.color = "#ffffff";           // Texto blanco
            btnEs.style.borderColor = "#94a3b8";     // Borde azul

            // --- BOTÓN INGLÉS INACTIVO ---
            btnEn.style.backgroundColor = "#0f172a"; // Fondo oscuro
            btnEn.style.color = "#ffffff";           // Texto blanco (o el color que prefieras)
            btnEn.style.borderColor = "transparent";  // Sin borde llamativo
        } else {
            // --- BOTÓN ESPAÑOL INACTIVO ---
            btnEs.style.backgroundColor = "#0f172a";
            btnEs.style.color = "#ffffff";
            btnEs.style.borderColor = "transparent";

            // --- BOTÓN INGLÉS ACTIVO ---
            btnEn.style.backgroundColor = "#94a3b8";
            btnEn.style.color = "#ffffff";
            btnEn.style.borderColor = "#0ea5e9";
        }
    }
}

    // Escuchadores para los botones de idioma
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');
    
    if (btnEs) btnEs.addEventListener('click', () => changeLanguage('es'));
    if (btnEn) btnEn.addEventListener('click', () => changeLanguage('en'));

    // Al cargar CUALQUIERA de las 5 páginas, revisa si ya había un idioma guardado.
    // Si no hay ninguno, por defecto pone español ('es').
    const savedLang = localStorage.getItem('preferred-lang') || 'es';
    changeLanguage(savedLang);


    // --- 3. DETECCIÓN DE PÁGINA (FONDOS) ---
    const isIndexPage = window.location.pathname === "/" || 
                        window.location.pathname.endsWith("index.html");

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
        // Fondo en Tonos Azules (Para las otras 4 páginas)
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

    // --- 4. ANIMACIÓN DE TARJETAS (FLIP CARDS) ---
    document.querySelectorAll(".flip-card").forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("active");
        });
    });

    // --- 5. VALIDACIONES DEL FORMULARIO DE CONTACTO ---
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

            const nameValid = nameVal !== "" && !/\d/.test(nameVal);
            toggleValidationClass(nameInput, nameValid);

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailValid = emailRegex.test(emailVal);
            toggleValidationClass(emailInput, emailValid);

            const words = messageVal.split(/\s+/).filter(word => word.length > 0);
            const messageValid = words.length >= 3;
            toggleValidationClass(messageInput, messageValid);

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

        nameInput.addEventListener('input', validateForm);
        emailInput.addEventListener('input', validateForm);
        messageInput.addEventListener('input', validateForm);
    }

});

/*document.addEventListener("DOMContentLoaded", function () {    
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
*/