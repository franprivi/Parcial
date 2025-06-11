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

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("themeToggle");
  const html = document.documentElement;
  const iconLuna = document.getElementById("icon-luna");
  const iconSol = document.getElementById("icon-sol");

  // Restaurar tema guardado
  const temaGuardado = localStorage.getItem("tema");
  if (temaGuardado) {
    html.setAttribute("data-bs-theme", temaGuardado);
    iconLuna.style.display = temaGuardado === "dark" ? "none" : "inline";
    iconSol.style.display = temaGuardado === "dark" ? "inline" : "none";
  }

  // Toggle modo oscuro
  toggle.addEventListener("click", () => {
    const actual = html.getAttribute("data-bs-theme") || "light";
    const nuevo = actual === "light" ? "dark" : "light";
    html.setAttribute("data-bs-theme", nuevo);
    localStorage.setItem("tema", nuevo);

    iconLuna.style.display = nuevo === "dark" ? "none" : "inline";
    iconSol.style.display = nuevo === "dark" ? "inline" : "none";
  });
});