localStorage.setItem("Usuario1", "Contra1"); //Ajustarlo a que sea objeto del json, o agregarlo ahí

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
    const validarContrasena = localStorage.getItem(usuarioInput);

    validarLogin(usuarioInput, contrasenaInput);

    e.preventDefault(); //Esto evita un comportamiento de 'default', y se envíe como tal la info.

    /*//EMPIEZA NUEVA VALIDACIóN
    const emailInput = document.querySelector("inputEmail").value;
    const passwordInput = document.getElementById("inputContrasena").value;

    const usuarioLogin = JSON.parse(localStorage.getItem("usuario")); //"usuario" es el array del json

    //!!!!checar acceso a elemntos del objeto
    const validacion = usuario.find(usuario => usuario.email === emailInput && usuario.password === passwordInput);//Es true cuando encuentra email y password son los mismos de un objeto

    //Crear validación de usuario admin
    if (validacion){
      localStorage.setItem("login_success", JSON.stringify(usuarioLogin)); //se crea un objeto que le dirá al sistema que esta inciada la sesión, y aun podemos recuperar elementos del objeto
      const.log(usuarioLogin.tipoUsuario); //!!!Solo para revisar el tipo de usuario
      Swal.fire({
        icon: "success",
        title: "Bienvenidx, " + usuarioLogin.name,
        timer: 2000,
        });
      setTimeout(() => {
          window.location.href = "/Raices-Ecommerce/src/inicio.html"; //Para llevar al usuarix a la página de inicio después de un login existoso.
      }, 2000);
    }else{
      Swal.fire({
        icon: "error",
        title: "Usuario y/o contraseña erroneo",
        timer: 2000,    
      });
    }
    //TERMINA NUEVA VALIDACIóN

    
    //La siguiente const trae del localStorage el valor de la clave (usuario), mas abajo se ocupa para validar el input de la contraseña, asegurando que sea igual al del local storage.
    const validarContrasena = localStorage.getItem(usuarioInput);*/

    //Test exitoso.
    if(validarContrasena === contrasenaInput){
      localStorage.setItem("login_success", "test"); //!!!posiblemente no se quede, SOLO PARA TEST DE CERRAR SESION
      Swal.fire({
        icon: "success",
        title: "Bienvenidx, " + usuarioInput,
        timer: 2000,
        });
      setTimeout(() => {
          window.location.href = "/Raices-Ecommerce/src/inicio.html"; //Para llevar al usuarix a la página de inicio después de un login existoso.
      }, 2000);
      
    //Con este else if evita el mensaje "Usuario y/o contraseña erroneo" de abajo si el usuarix no puso usuario ni contraseña
    }else if((contrasenaInput === "")||(usuarioInput === "")){
      console.log("NO INPUTS");

    }else{
      Swal.fire({
        icon: "error",
        title: "Usuario y/o contraseña erroneo",
        timer: 2000,        
      });
    }

}