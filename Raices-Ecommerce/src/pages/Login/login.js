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
    }else if (contrasenaInput === "") {
        Swal.fire({
          icon: "error",
          title: "Ingresa tu contraseña",
          timer: 2000,
        });
        return false;
      }else{
        return true; //solo para que se vea en el click que sí de be intentar validar el login.
      }
}

let esCliente;

//EVENTO DE CLICK
const login = document.getElementById("loginButton");
login.onclick = (e) => {

    const emailInput = document.getElementById("inputEmail").value; //Recibe bien los valores
    const passwordInput = document.getElementById("inputContrasena").value; //Recibe bien los valores

    let url; let tipoUsuarioError;

      if (document.getElementById('soyCliente').checked){
        url = `http://localhost:8080/api/v1/cliente/email/${emailInput}`;
        tipoUsuarioError = "cliente";
      }else if (document.getElementById('soyArtesana').checked){
        url = `http://localhost:8080/api/v1/artesano/email/${emailInput}`;
        tipoUsuarioError = "vendedor/a";
      }else{
        console.log("Error con check de artesana/cliente");
        Swal.fire({
          icon: "error",
          title: "Marca la casilla de cliente o de vendedor/a, dependiendo de cómo estés iniciando sesión.",
          timer: 5000,    
        });
        
      }
       
    let nombreFetch;
    let correoFetch;
    let passwordFetch;
    let tipoUsuarioFetch;

    validarLogin(emailInput, passwordInput);

    e.preventDefault();
    
    //Que el fetch no corra si faltan campos por llenar
    if (validarLogin && (document.getElementById('soyCliente').checked || document.getElementById('soyArtesana').checked)){

      fetch(url)
          .then(response => response.json())
          .then(data => {
            nombreFetch = data.nombre;//nombre del usuario, para mostrarlo en el login exitoso
            correoFetch = data.correo; //Busca el correo, ya sea de artesano o cliente
            if(document.getElementById('soyCliente').checked){
              passwordFetch = data.contrasena; //!!!!Artesano guarda la variable como password, y cliente como contrasena, suiero cambiar lo de cliente a Password
            }else{
              passwordFetch = data.password; //!!!!Artesano guarda la variable como password, y cliente como contrasena, suiero cambiar lo de cliente a Password
            }
            tipoUsuarioFetch = data.tipoUsuario; //Tipo de usuario, que determina si el usuario verá el carrito de compras o formulario de producto
            console.log(data)
          })
          .catch(error => { 
           /* //Para no decir al usuario que el correo no existe se muestra lo mismo a que si hubiera introducido una contraseña incorrecta
            Swal.fire({
              icon: "error",
              title: "Usuario y/o contraseña erroneo",
              timer: 2000,    
            }); */  
            console.error(error)                    
          })
      
      /*LOCAL STORAGE CODE----------------------------------------------------- to be deleted
      const usuarioData = JSON.parse(localStorage.getItem(emailInput)); //Recibe password en localStorage
      if (usuarioData === null){
        console.log("Failure!");
        console.log("email: " + emailInput);
        console.log("password: " + passwordInput);
        Swal.fire({
          icon: "error",
          title: "Usuario y/o contraseña erroneo",
          timer: 2000,    
        });
      }*/

      //VALIDACIóN CORRREO-PASSWORD
      
      setTimeout(() => {
        console.log(passwordInput)
        console.log(passwordFetch)
        if (passwordInput == passwordFetch){ //Login exitoso!
          console.log("Success!");
          localStorage.setItem("login_success", tipoUsuarioFetch); //se crea un objeto que le dirá al sistema que esta inciada la sesión y mostrar que tipo de usuario es para mostrar carrito o formulario
          Swal.fire({
            icon: "success",
            title: "Bienvenidx, " + nombreFetch,
            showConfirmButton: false,
            timer: 1000,
            });
          setTimeout(() => {
              window.location.href = "/Raices-Ecommerce/src/inicio.html"; //Para llevar al usuarix a la página de inicio después de un login existoso.
          }, 1000);
        }else{ //En este punto sabemos que el correo sí es correcto, pero la contraseña no y tipo de usuario no. Aun así se indica al usuario el mensaje de abajo para no dar pista de qué está mal
          Swal.fire({
            icon: "error",
            title: "Usuario y/o contraseña erroneo. Verifica que la casilla marcada como " +tipoUsuarioError+ ", tu correo y contraseña sean correctos.",
            timer: 5000,    
          });
        }

      }, 1000);

      console.log("Antes de terminar función de click")
      
   }
}

    /*VERSION LOCALSTORAGE---------------------------------------------------- to be deleted
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
      Swal.fire({
        icon: "error",
        title: "Usuario y/o contraseña erroneo",
        timer: 2000,    
      });
    }
}*/
