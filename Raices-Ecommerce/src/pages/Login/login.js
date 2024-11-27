//Validación de campos solo para ver si hay o no halgo escrito
function validarLogin(usuarioInput, contrasenaInput) { 
    
    if (usuarioInput === "") {
        Swal.fire({
          icon: "error",
          title: "Ingresa tu usuario",
          text: "Ingresa tu usuario",
        });
        return false;
      }
      
      if (contrasenaInput === "") {
        Swal.fire({
          icon: "error",
          title: "Ingresa tu contraseña",
          text: "Ingresa tu contraseña",
        });
        return false;
      }
}


//Validación usuario y contraseña correctos

const login = document.getElementById("loginButton");

login.onclick = (e) => {

    const usuarioInput = document.getElementById("inputNombreUsuario").value;
    const contrasenaInput = document.getElementById("inputContrasena").value;

    validarLogin(usuarioInput, contrasenaInput);

    e.preventDefault(); //Esto evita un comportamiento de 'default', y se envíe como tal la info.
    
    const getUsuario = localStorage.getItem("Usuario");
    const getContrasena = localStorage.getItem("Contrasena");

    if ((usuarioInput == "") || (contrasenaInput == "")){
        
    }
}