
// funcion para el json
    function generarObjetoUsuario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const codigoPostal = document.getElementById("cp").value.trim();
    const estadoSeleccionado = document.getElementById("inputState").value;

    // Crear un objeto JavaScript con los datos del formulario
    const usuario = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        direccion: direccion,
        telefono: telefono,
        codigoPostal: codigoPostal,
        estado: estadoSeleccionado,
    };

    // Convertir el objeto en formato JSON
    const usuarioJSON = JSON.stringify(usuario, null, 2); // Formateado para mejor visualización (opcional)
    
    // Mostrar el JSON en la consola para pruebas
    console.log(usuarioJSON);

    return usuarioJSON; // Devolver el JSON por si necesitas usarlo en otro lugar
}

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const passPassword = document.getElementById("passPassword").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const codigoPostal = document.getElementById("cp").value.trim();
    const estadoSeleccionado = document.getElementById("inputState").value;
    const terminos = document.getElementById("gridCheck");
    const soloLetrasRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const direccionRegex = /[0-9]/;
    const telefonoRegex = /^[0-9]{10,}$/;
    const codigoPostalRegex = /^[0-9]{5}$/;


    // Validar nombre
    if (nombre === "") {
        document.getElementById("nombre").className="form-control alert alert-danger pt-2 pb-2";
        document.getElementById("nombre").setAttribute("role", "alert");
        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "El campo de Nombre no puede estar vacío",
        });
        return false;
    } else if (!soloLetrasRegex.test(nombre)) {
        document.getElementById("nombre").className="form-control alert alert-danger pt-2 pb-2";
        document.getElementById("nombre").setAttribute("role", "alert");
        Swal.fire({
            icon: "error",
            title: "Formato incorrecto",
            text: "El Nombre solo debe contener letras y espacios",
        });
        return false;
    }

    // Validar apellido
    if (apellido === "") {
        document.getElementById("apellido").className="form-control alert alert-danger pt-2 pb-2";
        document.getElementById("apellido").setAttribute("role", "alert");
        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "El campo de Apellido no puede estar vacío",
        });
        return false;
    } else if (!soloLetrasRegex.test(apellido)) {
        document.getElementById("apellido").className="form-control alert alert-danger pt-2 pb-2";
        document.getElementById("apellido").setAttribute("role", "alert");
        Swal.fire({
            icon: "error",
            title: "Formato incorrecto",
            text: "El Apellido solo debe contener letras y espacios",
        });
        return false;
    }

    // Validar email
    if (email === "") {
        document.getElementById("email").className="form-control alert alert-danger pt-2 pb-2";
        document.getElementById("email").setAttribute("role", "alert");
        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "El campo de Email no puede estar vacío",
        });
        return false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("email").className="form-control alert alert-danger pt-2 pb-2";
        document.getElementById("email").setAttribute("role", "alert");
        Swal.fire({
            icon: "error",
            title: "Formato incorrecto",
            text: "El Email debe ser válido (contener '@' y un dominio)",
        });
        return false;
    }

    // Validar contraseña
    if (password.length < 8) {
        document.getElementById("password").className="form-control alert alert-danger pt-2 pb-2";
        document.getElementById("password").setAttribute("role", "alert");
        Swal.fire({
            icon: "error",
            title: "Contraseña insegura",
            text: "La contraseña debe tener al menos 8 caracteres",
        });
        return false;
    }
    // Valir que sea igual la contraseña
    if(password!==passPassword){
        Swal.fire({
            icon: "error",
            title: "Contraseña incorrecta",
            text: "La contraseña debe ser exactamente 'Password'",
        });
        return false;
    }

    // Validar dirección
    if (direccion === "") {
        document.getElementById("direccion").className="form-control alert alert-danger pt-2 pb-2";
        document.getElementById("direccion").setAttribute("role", "alert");
        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "El campo de Dirección no puede estar vacío",
        });
        return false;
    } else if (!direccionRegex.test(direccion)) {
        document.getElementById("direccion").className="form-control alert alert-danger pt-2 pb-2";
        document.getElementById("direccion").setAttribute("role", "alert");
        Swal.fire({
            icon: "error",
            title: "Formato incorrecto",
            text: "La Dirección debe contener al menos un número",
        });
        return false;
    }

    // Validar estado
    if (estadoSeleccionado === "Elige") {
        document.getElementById("inputState").className="alert alert-danger pt-2 pb-2";
        document.getElementById("inputState").setAttribute("role", "alert");
        Swal.fire({
            icon: "error",
            title: "Estado no seleccionado",
            text: "Por favor, selecciona un estado válido",
        });
        return false;
    }

    // Validar C.P
    if (!codigoPostalRegex.test(codigoPostal)) {
        document.getElementById("cp").className="form-control alert alert-danger pt-2 pb-2";
        document.getElementById("cp").setAttribute("role", "alert");
        Swal.fire({
            icon: "error",
            title: "Formato incorrecto",
            text: "El código postal debe contener 5 dígitos",
        });
        return false;
    }

    // Validar teléfono
    if (telefono === "") {
        document.getElementById("telefono").className="form-control alert alert-danger pt-2 pb-2";
        document.getElementById("telefono").setAttribute("role", "alert");
        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "El campo de Teléfono no puede estar vacío",
        });
        return false;
    } else if (!telefonoRegex.test(telefono)) {
        document.getElementById("telefono").className="form-control alert alert-danger pt-2 pb-2";
        document.getElementById("telefono").setAttribute("role", "alert");
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
    } else {

    // Si todas las validaciones pasan
    generarObjetoUsuario();

    Swal.fire({
        icon: "success",
        title: "Formulario válido",
        text: "¡Tu formulario ha sido enviado exitosamente!",
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
    });

    return true;
}
}


document.getElementById("registro").addEventListener("click",(evento)=>{
    evento.preventDefault();
   validarFormulario();
})

// Para validar solo que seleccione un estado de la lista
document.addEventListener("DOMContentLoaded", () => {
    const estados = ["Elige", "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Coahuila", "Colima", "Chiapas", "Chihuahua", "Durango", "Ciudad de México", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"];
    const inputState = document.getElementById("inputState");

    estados.forEach((estado, index) => {
        const option = document.createElement("option");
        option.value = estado;
        option.textContent = estado;

        // Si es el primer elemento, agrégalo como predeterminado
        if (index === 0) {
            option.selected = true;
            option.disabled = true; // Deshabilitar "Elige" por defecto
        }

        inputState.appendChild(option);
    });
});
