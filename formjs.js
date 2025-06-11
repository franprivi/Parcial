
document.getElementById("contactForm").addEventListener("submit", function(event) {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !apellido || !asunto || !email || !mensaje) {
        alert("Por favor, completá todos los campos.");
        event.preventDefault(); // Detiene el envío del formulario
    }
});
