document.getElementById("enviar").addEventListener("click",function(event)
{   event.preventDefault();
    const name= document.getElementById("nombre").value.trim();
    const correo= document.getElementById("correo").value.trim();
    const telefono=document.getElementById("telefono").value.trim(); 
    const comentario=document.getElementById("comentario").value.trim();
    if(!name||!correo||!telefono||!comentario){
    if(!name&&!correo&&!telefono&&!comentario){
      document.getElementById("mensajeError").style.visibility="visible";
       Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Llena todos los campos",
      });
    } else {document.getElementById("mensajeError").style.visibility="hidden"} 
    if(name==""||name.match(/[0-9]/g)){
      document.getElementById("mensajeError1").style.visibility="visible";
       Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Ingrese un nombre valido",
      });
    } else{document.getElementById("mensajeError1").style.visibility="hidden"}
    if(!correo.includes("@")){
      document.getElementById("mensajeError2").style.visibility="visible";
       Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Ingrese un correo valido",
      });
    }else{document.getElementById("mensajeError2").style.visibility="hidden"} 
     if(telefono.length!=10 || telefono.match(/[a-z]/g)){
      document.getElementById("mensajeError3").style.visibility="visible";
       Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Ingrese un telefono valido",
      });
    } else{document.getElementById("mensajeError3").style.visibility="hidden"} 
    if(comentario==""){
      document.getElementById("mensajeError").style.visibility="visible";
        Swal.fire({
         icon: "error",
         title: "Oops..",
         text: "Llena todos los campos",
       });} else {document.getElementById("mensajeError").style.visibility="hidden"};
      } else if(name&&correo&&telefono&&comentario) {
        sendEmail();
        document.getElementById("mensajeError").style.visibility="hidden"
        document.getElementById("mensajeError1").style.visibility="hidden"
        document.getElementById("mensajeError2").style.visibility="hidden"
        document.getElementById("mensajeError3").style.visibility="hidden"
        setTimeout(()=>{
          document.getElementById("form").reset();
      },1000)
    }
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
