localStorage.setItem("Usuario1", "Contra1");
localStorage.setItem("alexSibaja", "micontraseña");

//Validación de campos solo para ver si hay o no halgo escrito, 
function validarLogin(usuarioInput, contrasenaInput) { 
    
    if (usuarioInput === "") {
        Swal.fire({
          icon: "error",
          title: "Ingresa tu usuario",
          timer: 2000, // Tiempo en milisegundos (2 segundos)
        });
        return false;
      }
      
      if (contrasenaInput === "") {
        Swal.fire({
          icon: "error",
          title: "Ingresa tu contraseña",
          timer: 2000, // Tiempo en milisegundos (2 segundos)
        });
        return false;
      }
}


//Validación usuario y contraseña correctos
const login = document.getElementById("loginButton");

login.onclick = (e) => {

    const usuarioInput = document.getElementById("inputNombreUsuario").value;//Funciona tener las constantes dentro del evento, mas que globales.
    const contrasenaInput = document.getElementById("inputContrasena").value;

    validarLogin(usuarioInput, contrasenaInput);

    e.preventDefault(); //Esto evita un comportamiento de 'default', y se envíe como tal la info.
    
    //La siguiente const trae del localStorage el valor de la clave (usuario), mas abajo se ocupa para validar el input de la contraseña, asegurando que sea igual al del local storage.
    const validarContrasena = localStorage.getItem(usuarioInput);

    //Test exitoso. !!!!Falta que lleve al usuario a la página de inicio.
    if(validarContrasena === contrasenaInput){
      Swal.fire({
        icon: "success",
        title: "Bienvenidx, " + usuarioInput,
        timer: 2500, // Tiempo en milisegundos (2.5 segundos)
        });
      setTimeout(() => {
          window.location.href = "../Inicio/index.html"; //Para llevar al usuarix a la página de inicio después de un login existoso.
      }, 3000);
      
    //Con este else if evita el mensaje "Usuario y/o contraseña erroneo" de abajo si el usuarix no puso usuario ni contraseña
    }else if((contrasenaInput === "")||(usuarioInput === "")){
      console.log("NO INPUTS");

    }else{
      Swal.fire({
        icon: "error",
        title: "Usuario y/o contraseña erroneo",
        timer: 2000, // Tiempo en milisegundos (2 segundos)
        
      });
    }

}