<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
    const estados = ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Coahuila", "Colima"," Chiapas", "Chihuahua", "Durango", "Ciudad de México", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán","Zacatecas"];
    const inputState = document.getElementById("inputState");

    estados.forEach(estado => {
        const option = document.createElement("option");
        option.value = estado;
        option.textContent = estado;
        inputState.appendChild(option);
    });
});

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const codigoPostal = document.getElementById("cp").value.trim
    ();
    const terminos = document.getElementById("gridCheck");
    const soloLetrasRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const direccionRegex = /[0-9]/;
    const telefonoRegex = /^[0-9]{10,}$/;
    const codigoPostalRegex = /^[0-9]{5}$/;

    // Validar nombre
    if (nombre === "") {
      Swal.fire({
        icon: "error",
        title: "Campo vacío",
        text: "El campo de Nombre no puede estar vacío",
      });
      return false;
    } else if (!soloLetrasRegex.test(nombre)) {
      Swal.fire({
        icon: "error",
        title: "Formato incorrecto",
        text: "El Nombre solo debe contener letras y espacios",
      });
      return false;
    }
  
    // Validar apellido
    if (apellido === "") {
      Swal.fire({
        icon: "error",
        title: "Campo vacío",
        text: "El campo de Apellido no puede estar vacío",
      });
      return false;
    } else if (!soloLetrasRegex.test(apellido)) {
      Swal.fire({
        icon: "error",
        title: "Formato incorrecto",
        text: "El Apellido solo debe contener letras y espacios",
      });
      return false;
    }
  
    // Validar email
    if (email === "") {
      Swal.fire({
        icon: "error",
        title: "Campo vacío",
        text: "El campo de Email no puede estar vacío",
      });
      return false;
    } else if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Formato incorrecto",
        text: "El Email debe ser válido (contener '@' y un dominio)",
      });
      return false;
    }
  
    // Validar contraseña
    if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Contraseña insegura",
        text: "La contraseña debe tener al menos 8 caracteres",
      });
      return false;
    }
  
    // Validar dirección
    if (direccion === "") {
      Swal.fire({
        icon: "error",
        title: "Campo vacío",
        text: "El campo de Dirección no puede estar vacío",
      });
      return false;
    } else if (!direccionRegex.test(direccion)) {
      Swal.fire({
        icon: "error",
        title: "Formato incorrecto",
        text: "La Dirección debe contener al menos un número",
      });
      return false;
    }

    // Validar C.P
    if (!codigoPostalRegex.test(codigoPostal)) {
      Swal.fire({
        icon: "error",
        title: "Formato incorrecto",
        text: "El código postal debe contener 5 dígitos",
      });
      return false;
    }
  
    // Validar teléfono
    if (telefono === "") {
      Swal.fire({
        icon: "error",
        title: "Campo vacío",
        text: "El campo de Teléfono no puede estar vacío",
      });
      return false;
    } else if (!telefonoRegex.test(telefono)) {
      Swal.fire({
        icon: "error",
        title: "Formato incorrecto",
        text: "El Teléfono debe ser válido (solo números y al menos 10 dígitos)",
      });
      return false;
    }
  
    // Validar términos y condiciones 
    if (!terminos.checked) {
      Swal.fire({
          icon: "error",
          title: "Debes aceptar los Términos y Condiciones",
          text: "Por favor, marca la casilla para continuar.",
      });
      return false;
  }

    // Si todas las validaciones pasan
    Swal.fire({
      icon: "success",
      title: "Formulario válido",
      text: "¡Tu formulario ha sido enviado exitosamente!",
      timer: 5000, // Tiempo en milisegundos (5 segundos)
      timerProgressBar: true, // Muestra una barra de progreso
    showConfirmButton: false // Oculta el botón para que se cierre automáticamente
    });
  
    return true;
  }
=======
document.addEventListener("DOMContentLoaded", () => {
    const estados = ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Coahuila", "Colima"," Chiapas", "Chihuahua", "Durango", "Ciudad de México", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán","Zacatecas"];
    const inputState = document.getElementById("inputState");

    estados.forEach(estado => {
        const option = document.createElement("option");
        option.value = estado;
        option.textContent = estado;
        inputState.appendChild(option);
    });
});

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const codigoPostal = document.getElementById("cp").value.trim
    ();
    const terminos = document.getElementById("gridCheck");
    const soloLetrasRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const direccionRegex = /[0-9]/;
    const telefonoRegex = /^[0-9]{10,}$/;
    const codigoPostalRegex = /^[0-9]{5}$/;

    // Validar nombre
    if (nombre === "") {
      Swal.fire({
        icon: "error",
        title: "Campo vacío",
        text: "El campo de Nombre no puede estar vacío",
      });
      return false;
    } else if (!soloLetrasRegex.test(nombre)) {
      Swal.fire({
        icon: "error",
        title: "Formato incorrecto",
        text: "El Nombre solo debe contener letras y espacios",
      });
      return false;
    }
  
    // Validar apellido
    if (apellido === "") {
      Swal.fire({
        icon: "error",
        title: "Campo vacío",
        text: "El campo de Apellido no puede estar vacío",
      });
      return false;
    } else if (!soloLetrasRegex.test(apellido)) {
      Swal.fire({
        icon: "error",
        title: "Formato incorrecto",
        text: "El Apellido solo debe contener letras y espacios",
      });
      return false;
    }
  
    // Validar email
    if (email === "") {
      Swal.fire({
        icon: "error",
        title: "Campo vacío",
        text: "El campo de Email no puede estar vacío",
      });
      return false;
    } else if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Formato incorrecto",
        text: "El Email debe ser válido (contener '@' y un dominio)",
      });
      return false;
    }
  
    // Validar contraseña
    if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Contraseña insegura",
        text: "La contraseña debe tener al menos 8 caracteres",
      });
      return false;
    }
  
    // Validar dirección
    if (direccion === "") {
      Swal.fire({
        icon: "error",
        title: "Campo vacío",
        text: "El campo de Dirección no puede estar vacío",
      });
      return false;
    } else if (!direccionRegex.test(direccion)) {
      Swal.fire({
        icon: "error",
        title: "Formato incorrecto",
        text: "La Dirección debe contener al menos un número",
      });
      return false;
    }

    // Validar C.P
    if (!codigoPostalRegex.test(codigoPostal)) {
      Swal.fire({
        icon: "error",
        title: "Formato incorrecto",
        text: "El código postal debe contener 5 dígitos",
      });
      return false;
    }
  
    // Validar teléfono
    if (telefono === "") {
      Swal.fire({
        icon: "error",
        title: "Campo vacío",
        text: "El campo de Teléfono no puede estar vacío",
      });
      return false;
    } else if (!telefonoRegex.test(telefono)) {
      Swal.fire({
        icon: "error",
        title: "Formato incorrecto",
        text: "El Teléfono debe ser válido (solo números y al menos 10 dígitos)",
      });
      return false;
    }
  
    // Validar términos y condiciones 
    if (!terminos.checked) {
      Swal.fire({
          icon: "error",
          title: "Debes aceptar los Términos y Condiciones",
          text: "Por favor, marca la casilla para continuar.",
      });
      return false;
  }

    // Si todas las validaciones pasan
    Swal.fire({
      icon: "success",
      title: "Formulario válido",
      text: "¡Tu formulario ha sido enviado exitosamente!",
      timer: 5000, // Tiempo en milisegundos (5 segundos)
      timerProgressBar: true, // Muestra una barra de progreso
    showConfirmButton: false // Oculta el botón para que se cierre automáticamente
    });
  
    return true;
  }
  
// Función para enviar un correo con los datos 
  function sendEmail(){
    const name= document.getElementById("nombre").value.trim();
    const correo= document.getElementById("email").value.trim();
    const telefono=document.getElementById("telefono").value.trim(); 
    const mensaje= `Nombre Completo: ${name}<br> Email: ${email}<br> Telefono: ${telefono} `
    Email.send({
      SecureToken :"1a1a5808-4ed8-4982-8750-a86e4536262e",
      To : 'abigailfloresvilleda@gmail.com',
      From : "abigailfloresvilleda@gmail.com",
      Subject : "Contacto",
      Body : mensaje,
  }).then(
    message => {
      if(message==="OK"){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tu mensaje ha sido enviado",
          showConfirmButton: false,
          timer: 1000
        });
      }
    } 
  );
  }
>>>>>>> 5b4056f31d561fe0f2a1398069a31b1fbe2f1da5
  