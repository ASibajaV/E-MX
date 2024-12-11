document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loginButton").onclick = (e) => {
      e.preventDefault(); // Evita el comportamiento predeterminado del botón

      // Recupera los valores del formulario
      const emailInput = document.getElementById("inputEmail").value.trim();
      const passwordInput = document.getElementById("inputContrasena").value.trim();

      if (!emailInput || !passwordInput) {
          Swal.fire({
              icon: "error",
              title: "Por favor, completa todos los campos",
              timer: 2000,
          });
          return;
      }

      // Recupera los datos del usuario del localStorage
      const usuarioData = JSON.parse(localStorage.getItem("cliente"));

      if (!usuarioData) {
          Swal.fire({
              icon: "error",
              title: "Usuario no encontrado",
              timer: 2000,
          });
          return;
      }

      // Valida las credenciales
      if (usuarioData.email === emailInput && usuarioData.password === passwordInput) {
          console.log("¡Inicio de sesión exitoso!");
          localStorage.setItem("login_success", emailInput);
          Swal.fire({
              icon: "success",
              title: `Bienvenidx, ${usuarioData.nombre}`,
              timer: 2000,
          });
          setTimeout(() => {
              window.location.href = "/Raices-Ecommerce/src/inicio.html";
          }, 2000);
      } else {
          console.log("¡Inicio de sesión fallido!");
          Swal.fire({
              icon: "error",
              title: "Usuario y/o contraseña incorrectos",
              timer: 2000,
          });
      }
  };
});

console.log(localStorage.getItem("cliente"));
