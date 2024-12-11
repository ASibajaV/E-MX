localStorage.setItem("admin", "contra"); //usuario defaul, posiblemente usuario con todos los poderes de artesano y comprador
const login = document.getElementById("loginButton");

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
    
    const usuarioData = JSON.parse(localStorage.getItem(emailInput));; //Recibe password en localStorage

    validarLogin(emailInput, passwordInput); //Function para validar que hay algo 

    e.preventDefault(); //Esto evita un comportamiento de 'default', y se envíe como tal la info.

    //EMPIEZA NUEVA VALIDACIóN

    //Crear validación de usuario admin
    if (usuarioData.password === passwordInput){
      console.log("Success!");
      localStorage.setItem("login_success", (usuarioData.tipoUsuario)); //se crea un objeto que le dirá al sistema que esta inciada la sesión, y aun podemos recuperar elementos del objeto
      Swal.fire({
        icon: "success",
        title: "Bienvenidx, " + usuarioData.nombre,
        showConfirmButton: false,
        timer: 2000,
        });
      setTimeout(() => {
          window.location.href = "/Raices-Ecommerce/src/inicio.html"; //Para llevar al usuarix a la página de inicio después de un login existoso.
      }, 2000);
    }else if (emailInput.password != passwordInput && passwordInput != "" && emailInput != ""){ //else if puesto para para que no sobrescriba el swal.fire de validarLogin
      console.log("Failure!");
      console.log("email: " +emailInput);
      console.log("password: " +passwordInput);
      Swal.fire({
        icon: "error",
        title: "Usuario y/o contraseña erroneo",
        timer: 2000,    
      });
    }
    //TERMINA NUEVA VALIDACIóN
}