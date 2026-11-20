// =========================================================================
// SCRIPT GENERAL PARA EL SITIO WEB - PROGRAMACIÓN WEB 1
// =========================================================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM completamente cargado y analizado.");

    // 1. CAMBIAR EL CONTENIDO
    // Cambiamos el texto del subtítulo del footer o algún elemento genérico si existe
    const footerText = document.querySelector("footer p");
    if (footerText) {
        footerText.innerHTML = "© 2026 Alex Jhonson — Portafolio Académico Oficial <i>(Actualizado por JS)</i>";
    }

    // 2. MODIFICAR ESTILOS CSS
    // Añadimos un efecto de transición sutil a todas las tarjetas principales al cargar
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    });

    // 3. AGREGAR O QUITAR CLASES
    // Resaltamos la barra de navegación o agregamos una clase de animación a los títulos principales
    const mainTitles = document.querySelectorAll("header h1");
    mainTitles.forEach(title => {
        title.classList.add("fw-bold", "text-gradient"); // Añadimos clases de Bootstrap/personalizadas
    });

    // 4. CONSULTAR Y MODIFICAR ATRIBUTOS
    // Buscamos todas las imágenes del sitio y nos aseguramos de que tengan un atributo alt descriptivo, o modificamos un enlace
    const images = document.querySelectorAll("img");
    images.forEach((img, index) => {
        const currentAlt = img.getAttribute("alt");
        if (!currentAlt || currentAlt === "") {
            img.setAttribute("alt", `Imagen descriptiva del portafolio ${index + 1}`);
        }
    });

    // 5. ESCUCHAR EVENTOS (Al menos 3 formas de eventos diferentes)
    
    // --- EVENTO 1: click en los botones de navegación o tarjetas ---
    const interactiveButtons = document.querySelectorAll(".btn");
    interactiveButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            console.log(`Botón presionado: ${e.target.textContent.trim()}`);
        });
    });

    // --- EVENTO 2: keydown (evento de teclado al escribir en cualquier parte o si hay inputs) ---
    document.addEventListener("keydown", (e) => {
        // Si presionan la letra 'T' o 't', cambiamos temporalmente el fondo de la página como easter egg
        if (e.key === "t" || e.key === "T") {
            document.body.classList.toggle("bg-secondary-subtle");
            console.log("Modo de contraste rápido activado por teclado.");
        }
    });

    // --- EVENTO 3: mouseover / mouseleave (evento de mouse en las tarjetas) ---
    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "translateY(-5px)";
            card.style.boxShadow = "0 .5rem 1rem rgba(0,0,0,.15)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "";
        });
    });

    // 6. CREAR, INSERTAR Y ELIMINAR ELEMENTOS
    // Vamos a crear un elemento dinámico (un aviso flotante o banner de bienvenida) e insertarlo en el DOM
    const mainContainer = document.querySelector("main .container");
    if (mainContainer) {
        // CREAR elemento
        const alertBanner = document.createElement("div");
        alertBanner.className = "alert alert-primary alert-dismissible fade show mt-4 shadow-sm";
        alertBanner.innerHTML = `
            <i class="bi bi-info-circle-fill me-2"></i><strong>¡Aviso del Sistema!</strong> Script JS cargado correctamente desde <code>java.js</code>.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        // INSERTAR elemento al inicio del contenedor principal
        mainContainer.prepend(alertBanner);

        // Opcional: Demostración de ELIMINAR un elemento después de 10 segundos (si se desea automatizar)
        // setTimeout(() => { alertBanner.remove(); }, 10000);
    }
});