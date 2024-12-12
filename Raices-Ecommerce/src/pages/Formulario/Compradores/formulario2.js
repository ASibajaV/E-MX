// funcion para el json
function generarObjetoCliente() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const ciudad = document.getElementById("inputCity").value.trim();
    const estadoSeleccionado = document.getElementById("inputState").value;
    const codigoPostal = document.getElementById("cp").value.trim();
    const tipoUsuario = "cliente";
    
    

    // Crear un objeto JavaScript con los datos del formulario
    const cliente = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        direccion: direccion,
        ciudad: ciudad,
        telefono: telefono,
        codigoPostal: codigoPostal,
        estado: estadoSeleccionado,
        tipoUsuario: tipoUsuario,
    };

    // Convertir el objeto en formato JSON
    const clienteJSON = JSON.stringify(cliente, null, 2); // Formateado para mejor visualización (opcional)
    
    // Mostrar el JSON en la consola para pruebas
    console.log(clienteJSON);

    // return clienteJSON; // Devolver el JSON por si necesitas usarlo en otro lugar
    localStorage.setItem(email,clienteJSON);
}

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const passPassword = document.getElementById("passPassword").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const ciudad = document.getElementById("inputCity").value.trim();
    const estadoSeleccionado = document.getElementById("inputState").value;
    const codigoPostal = document.getElementById("cp").value.trim();
    const terminos = document.getElementById("gridCheck");
    const soloLetrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s'-]+$/;
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
    } else {document.getElementById("nombre").className="form-control pt-2 pb-2"}

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
    else {document.getElementById("apellido").className="form-control pt-2 pb-2"}

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
    else {document.getElementById("email").className="form-control pt-2 pb-2"}

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
    else {document.getElementById("password").className="form-control pt-2 pb-2"}
    // Valir que sea igual la contraseña
    if(password!==passPassword){
        Swal.fire({
            icon: "error",
            title: "Contraseña incorrecta",
            text: "La contraseña debe ser exactamente igual",
        });
        return false;
    }
    else {document.getElementById("password").className="form-control pt-2 pb-2"}
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
    else {document.getElementById("telefono").className="form-control pt-2 pb-2"}
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
    else {document.getElementById("direccion").className="form-control pt-2 pb-2"}
    // Validar ciudad
    if (ciudad === "") {
        document.getElementById("inputCity").className="form-control alert alert-danger pt-2 pb-2";
        document.getElementById("nombre").setAttribute("role", "alert");
        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "El campo de Ciudad no puede estar vacío",
        });
        return false;
    } else if (!soloLetrasRegex.test(ciudad)) {
        document.getElementById("inputCity").className="form-control alert alert-danger pt-2 pb-2";
        document.getElementById("inputCity").setAttribute("role", "alert");
        Swal.fire({
            icon: "error",
            title: "Formato incorrecto",
            text: "Ciudad solo debe contener letras",
        });
        return false;
    } else {document.getElementById("inputCity").className="form-control pt-2 pb-2"}
    // Validar estado
    if (estadoSeleccionado === "Elige") {
        // document.getElementById("inputState").className="alert alert-danger pt-2 pb-2";
        document.getElementById("inputState").setAttribute("role", "alert");
        Swal.fire({
            icon: "error",
            title: "Estado no seleccionado",
            text: "Por favor, selecciona un estado válido",
        });
        return false;
    }
    else {document.getElementById("direccion").className="form-control pt-2 pb-2"}
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
    else {document.getElementById("cp").className="form-control pt-2 pb-2"}
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
    generarObjetoCliente();
    document.getElementById("nombre").className="form-control  pt-2 pb-2";
    document.getElementById("apellido").className="form-control  pt-2 pb-2";
    document.getElementById("email").className="form-control  pt-2 pb-2";
    document.getElementById("password").className="form-control  pt-2 pb-2";
    document.getElementById("direccion").className="form-control  pt-2 pb-2";
    document.getElementById("telefono").className="form-control  pt-2 pb-2";
    document.getElementById("cp").className="form-control  pt-2 pb-2";
    setTimeout(()=>{
        document.getElementById("miFormulario").reset();
    },2000)
    Swal.fire({
        icon: "success",
        title: "Formulario válido",
        text: "¡Tu formulario ha sido enviado exitosamente!",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    });

    return true;
}
}

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
            option.disabled = false; // Deshabilitar "Elige" por defecto
        }

        inputState.appendChild(option);
    });
});

document.getElementById("registro").addEventListener("click",(evento)=>{
    evento.preventDefault();
   validarFormulario();
})