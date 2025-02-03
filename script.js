document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("formResponse");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita la recarga de la página

        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            responseMessage.textContent = "¡Gracias! Tu mensaje ha sido enviado.";
            responseMessage.style.color = "green";
            responseMessage.style.display = "block";
            form.reset(); // Borra los campos después de enviar el mensaje
        })
        .catch(error => {
            responseMessage.textContent = "Hubo un error al enviar el mensaje. Inténtalo de nuevo.";
            responseMessage.style.color = "red";
            responseMessage.style.display = "block";
        });
    });
});
// Inicializar la animación AOS
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000, // Duración de las animaciones (en milisegundos)
        once: true, // La animación solo se ejecuta una vez
    });
});
