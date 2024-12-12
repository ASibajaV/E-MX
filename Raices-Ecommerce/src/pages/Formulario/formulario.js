document.addEventListener("DOMContentLoaded", () => {
    const estados = ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Coahuila", "Colima"," Chiapas", "Chihuahua", "Durango", "Ciudad de México", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán","Zacatecas"];
    const inputState = document.getElementById("inputState");

    estados.forEach(estado => {
        const option = document.createElement("option");
        option.value = estado;
        option.textContent = estado;
        inputState.appendChild(option);
    });
});

// Para recuperar los datos del formulario
const nombre = document.getElementById('nombre').value;
const apellido = document.getElementById('apellido').value;
const email4 = document.getElementById('inputEmail4').value;
const password = document.getElementById('inputPassword4').value;
const passPassword = document.getElementById('inputPassword4').value;
const address = document.getElementById('inputAddress').value;
const address2 = document.getElementById('inputAddress2').value;
const city = document.getElementById('inputCity').value;
const estado = document.getElementById('inputState').value;
const cp = document.getElementById('inputZip').value;
const tyc = document.getElementById('gridCheck').value;
const promo = document.getElementById('promociones').value;



// Crear un objeto con los datos
const datosComprador = {      
        nombre: nombre,
        apellido: apellido,
        email4: email4,
        password: password,
        address: address,
        address2: address2,
        city: city,
        estado: estado,
        cp: cp,
        tyc: tyc,
        promo: promo    
        };

    // Convertir el objeto a formato JSON
    const datosJSON = JSON.stringify(datosComprador, null, 2);
    console.log(datosJSON);
