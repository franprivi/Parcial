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
  const iconLuna = document.getElementById("iconLuna");
  const iconSol = document.getElementById("iconSol");

  // Cargar tema guardado
  const temaGuardado = localStorage.getItem("tema") || "light";
  html.setAttribute("data-bs-theme", temaGuardado);
  if (temaGuardado === "dark") {
    document.body.classList.add("dark-mode");
    iconLuna.style.display = "none";
    iconSol.style.display = "inline";
  }

  toggle.addEventListener("click", () => {
    const actual = html.getAttribute("data-bs-theme") || "light";
    const nuevo = actual === "light" ? "dark" : "light";
    html.setAttribute("data-bs-theme", nuevo);
    localStorage.setItem("tema", nuevo);

    if (nuevo === "dark") {
      document.body.classList.add("dark-mode");
      iconLuna.style.display = "none";
      iconSol.style.display = "inline";
    } else {
      document.body.classList.remove("dark-mode");
      iconLuna.style.display = "inline";
      iconSol.style.display = "none";
    }
  });
});