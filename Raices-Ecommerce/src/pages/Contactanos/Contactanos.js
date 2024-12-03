document.getElementById("enviar").addEventListener("click",function(event)
{   event.preventDefault();
    const name= document.getElementById("nombre").value.trim();
    const correo= document.getElementById("correo").value.trim();
    const telefono=document.getElementById("telefono").value.trim(); 
    const comentario=document.getElementById("comentario").value.trim();
    if(!name&&!correo&&!telefono&&!comentario){
       let error1= "Favor de llenar todos los espacios"
       document.getElementById("mensajeError").innerHTML=error1;
       document.getElementById("mensajeError").style.color="black";
       document.getElementById("mensajeError").style.fontSize="14px";
       document.getElementById("mensajeError").style.fontFamily="Fjalla One";
       document.getElementById("mensajeError").style.marginBottom="0";
       Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Llena todos los campos",
      });
    } else  if(name==""||name.match(/[0-9]/g)){
        let error2= "Ingrese un nombre valido ";
        document.getElementById("mensajeError1").innerHTML=error2;
       document.getElementById("mensajeError1").style.color="black";
       document.getElementById("mensajeError1").style.fontSize="14px";
       document.getElementById("mensajeError1").style.fontFamily="Fjalla One";
       document.getElementById("mensajeError1").style.marginBottom="0";
       Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Ingrese un nombre valido",
      });
    }else if(!correo.includes("@")){
        let error3= "Ingrese un correo valido";
        document.getElementById("mensajeError2").innerHTML=error3;
       document.getElementById("mensajeError2").style.color="black";
       document.getElementById("mensajeError2").style.fontSize="14px";
       document.getElementById("mensajeError2").style.fontFamily="Fjalla One";
       document.getElementById("mensajeError2").style.marginBottom="0";
       Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Ingrese un correo valido",
      });
    }else if(telefono.length!=10 || telefono.match(/[a-z]/g)){
        let error4= "Ingrese un telefono valido";
        document.getElementById("mensajeError3").innerHTML=error4;
       document.getElementById("mensajeError3").style.color="black";
       document.getElementById("mensajeError3").style.fontSize="14px";
       document.getElementById("mensajeError3").style.fontFamily="Fjalla One";
       document.getElementById("mensajeError3").style.marginBottom="0";
       Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Ingrese un telefono valido",
      });
    }else if(comentario==""){
        let error1= "Favor de llenar todos los espacios"
        document.getElementById("mensajeError").innerHTML=error1;
        document.getElementById("mensajeError").style.color="black";
        document.getElementById("mensajeError").style.fontSize="14px";
        document.getElementById("mensajeError").style.fontFamily="Fjalla One";
        document.getElementById("mensajeError").style.marginBottom="0";
        Swal.fire({
         icon: "error",
         title: "Oops..",
         text: "Llena todos los campos",
       });
      } else {
        sendEmail();
        document.querySelectorAll("p").reset();
        setTimeout(()=>{
          document.getElementById("form").reset();
      },1500)}
});
function sendEmail(){
  const name= document.getElementById("nombre").value.trim();
  const correo= document.getElementById("correo").value.trim();
  const telefono=document.getElementById("telefono").value.trim(); 
  const comentario=document.getElementById("comentario").value.trim();
  const mensaje= `Nombre Completo: ${name}<br> Email: ${correo}<br> Telefono: ${telefono}<br> Comentario: ${comentario} `
  Email.send({
    SecureToken :"1a1a5808-4ed8-4982-8750-a86e4536262e",
    To : 'xamitlhernandez@gmail.com',
    From : "xamitlhernandez@gmail.com",
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
