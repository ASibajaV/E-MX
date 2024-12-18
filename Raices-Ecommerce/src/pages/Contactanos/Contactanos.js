/* const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_u3126dx';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
}); */

document.getElementById("button").addEventListener("click",function(event)
{   event.preventDefault();
  const name= document.getElementById("name").value.trim();
  const correo= document.getElementById("email").value.trim();
  const telefono=document.getElementById("phone").value.trim(); 
  const comentario=document.getElementById("message").value.trim();
    const soloLetrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s'-]+$/;;
   const telefonoRegex = /^[0-9]{10,}$/;
    let condicion1;
    let condicion2;
    let condicion3;
    let condicion4;
    let condicion5;
    if(!name&&!correo&&!telefono&&!comentario){
      document.getElementById("mensajeError").style.visibility="visible";
       condicion1=0;
       Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Llena todos los campos",
      }); 
    } else {document.getElementById("mensajeError").style.visibility="hidden" 
      condicion1=1;
    } 
    if(name==""||!soloLetrasRegex.test(name)){
      document.getElementById("mensajeError1").style.visibility="visible";
       Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Ingrese un nombre valido",
      });
      condicion2=0;
    } else{document.getElementById("mensajeError1").style.visibility="hidden"
      condicion2=1;
    }
    if(!correo.includes("@")|| correo==""){
      document.getElementById("mensajeError2").style.visibility="visible";
       Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Ingrese un correo valido",
      }); 
       condicion3=0;
    }else{document.getElementById("mensajeError2").style.visibility="hidden" 
      condicion3=1;
    } 
     if(!telefonoRegex.test(telefono) ||telefono==""){
      document.getElementById("mensajeError3").style.visibility="visible";
       Swal.fire({
        icon: "error",
        title: "Oops..",
        text: "Ingrese un telefono valido",
      });  
      condicion4=0;
    } else{document.getElementById("mensajeError3").style.visibility="hidden" 
      condicion4=1;
    } 
    if(comentario==""){
      document.getElementById("mensajeError").style.visibility="visible";
        Swal.fire({
         icon: "error",
         title: "Oops..",
         text: "Llena todos los campos",
       }); 
      condicion5=0;} 
       else  {document.getElementById("mensajeError").style.visibility="hidden"
        condicion5=1;
       }
       if(condicion1===1 && condicion2===1 && condicion3===1 && condicion4===1 && condicion5===1){
        /* sendEmail(); */
        sendEmail2();
        document.getElementById("mensajeError").style.visibility="hidden"
        document.getElementById("mensajeError1").style.visibility="hidden"
        document.getElementById("mensajeError2").style.visibility="hidden"
        document.getElementById("mensajeError3").style.visibility="hidden"
        setTimeout(()=>{
          document.getElementById("form").reset();
      },2000)
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
        timer: 2000
      });
    }
  } 
);
}
function sendEmail2(){
  const serviceID = 'default_service';
   const templateID = 'template_u3126dx';

   emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu mensaje ha sido enviado",
        showConfirmButton: false,
        timer: 2000
      });
    }, (err) => {
      alert(JSON.stringify(err));
    });
}
