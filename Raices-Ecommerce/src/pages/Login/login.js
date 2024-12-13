const login = document.getElementById("loginButton");

//Valida si un usuario ya esta en sesión. No deberia tener existir la posibilidad, pero previene el error.
if  (localStorage.getItem("login_success")){
  Swal.fire({
    icon: "error",
    title: "Cierra sesión antes de iniciar sesión de nuevo.",
    showConfirmButton: false,
    timer: 2500,
    });
    setTimeout(() => {
      window.location.href = "/Raices-Ecommerce/src/inicio.html"; //Para llevar a la página de inicio después de sugerir que cierre sesión.
  }, 2400);
}

//Validación de campos solo para ver si hay o no algo escrito.
function validarLogin(usuarioInput, contrasenaInput) { 
    
    if (usuarioInput === "") {
        Swal.fire({
          icon: "error",
          title: "Ingresa tu usuario",
          timer: 2000,
        });
        return false;
      }
      
      if (contrasenaInput === "") {
        Swal.fire({
          icon: "error",
          title: "Ingresa tu contraseña",
          timer: 2000,
        });
        return false;
      }
}

//Validación usuario y contraseña correctos
login.onclick = (e) => {

    const emailInput = document.getElementById("inputEmail").value; //Recibe bien los valores
    const passwordInput = document.getElementById("inputContrasena").value; //Recibe bien los valores
    
    const usuarioData = JSON.parse(localStorage.getItem(emailInput)); //Recibe password en localStorage
    if (usuarioData === null){
      console.log("Failure!");
      console.log("email: " +emailInput);
      console.log("password: " +passwordInput);
      Swal.fire({
        icon: "error",
        title: "Usuario y/o contraseña erroneo",
        timer: 2000,    
      });
    }

    validarLogin(emailInput, passwordInput); //Function para validar que hay algo 

    e.preventDefault();


    //Crear validación de usuario admin
    if (usuarioData === null && (passwordInput != "" && emailInput != "")){ //Para que no genere error un null de usuarioData
      console.log("Failure!");
      console.log("email: " +emailInput);
      console.log("password: " +passwordInput);
      Swal.fire({
        icon: "error",
        title: "Usuario y/o contraseña erroneo",
        timer: 2000,    
      });
    }else if (usuarioData.password === passwordInput){
      console.log("Success!");
      localStorage.setItem("login_success", usuarioData.tipoUsuario); //se crea un objeto que le dirá al sistema que esta inciada la sesión, y aun podemos recuperar elementos del usuarix
      localStorage.setItem("user_logged", usuarioData.email); // en caso de que querramos acceder a los datos del usuario que se loggeo, esto se borra al cerrar sesion. E.g.: const miApellido JSON.parse(localStorage.getItem("user_logged")).apellido
      Swal.fire({
        icon: "success",
        title: "Bienvenidx, " + usuarioData.nombre,
        showConfirmButton: false,
        timer: 2000,
        });
      setTimeout(() => {
          window.location.href = "/Raices-Ecommerce/src/inicio.html"; //Para llevar al usuarix a la página de inicio después de un login existoso.
      }, 2000);
    }else if (emailInput.password != passwordInput || (passwordInput != "" && emailInput != "")){ //else if puesto para para que no sobrescriba el swal.fire de validarLogin
      console.log("Failure!");
      console.log("email: " +emailInput);
      console.log("password: " +passwordInput);
      Swal.fire({
        icon: "error",
        title: "Usuario y/o contraseña erroneo",
        timer: 2000,    
      });
    }
}
