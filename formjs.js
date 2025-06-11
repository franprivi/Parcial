document.getElementById("contactoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const errores = [];

    if (nombre === "") errores.push("El campo Nombre es obligatorio.");
    if (apellido === "") errores.push("El campo Apellido es obligatorio.");
    if (asunto === "") errores.push("El campo Asunto es obligatorio.");
    if (mensaje === "") errores.push("El campo Mensaje es obligatorio.");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errores.push("El Email ingresado no es válido.");
    }

    if (errores.length > 0) {
        alert(errores.join("\n"));
    } else {
        alert("¡Gracias por tu contacto, " + nombre + "! En breve te estaré respondiendo.");
        document.getElementById("contactoForm").reset();
    }
});
window.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleThemeBtn");
  const html = document.documentElement;

  // Asegurarse de que el botón exista
  if (!toggle) return;

  // Leer tema guardado
  const temaGuardado = localStorage.getItem("tema") || "light";

  // Aplicar el tema al html y al body
  html.setAttribute("data-bs-theme", temaGuardado);
  document.body.classList.toggle("dark-mode", temaGuardado === "dark");

  // Cambiar texto del botón al cargar
  toggle.textContent = temaGuardado === "dark" ? "Modo Claro" : "Modo Oscuro";

  // Evento click del botón
  toggle.addEventListener("click", () => {
    const actual = html.getAttribute("data-bs-theme") || "light";
    const nuevo = actual === "light" ? "dark" : "light";

    html.setAttribute("data-bs-theme", nuevo);
    localStorage.setItem("tema", nuevo);
    document.body.classList.toggle("dark-mode", nuevo === "dark");

    toggle.textContent = nuevo === "dark" ? "Modo Claro" : "Modo Oscuro";
  });
});