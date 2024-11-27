const listaDeProductos=[
    {
    "id": 1, "imagen": "./imagenes/cafeVertical.png", "name":"Cafe", "precio":"300.00","descripcion":"Some quick example text to build on the card title and make up the bulk of the card's content." ,"inventario": 5, "categoría": "Cafe"
    }, 
    {
    "id": 2, "imagen": "./imagenes/bolsa1.png", "name":"Bolsa Elegante", "precio":"300.00", "descripcion":"Some quick example text to build on the card title and make up the bulk of the card's content.", "inventario": 5, "categoría": "Bolsa"
    }, 
    {
    "id": 3, "imagen": "./imagenes/bolsa.png", "name":"Bolsa versatil", "precio":"300.00", "descripcion":"Some quick example text to build on the card title and make up the bulk of the card's content.", "inventario": 5, "categoría": "Bolsa"
    }, 
    {
    "id": 4, "imagen": "./imagenes/plata.png", "name":"Pulsera de plata", "precio":"300.00", "descripcion":"Some quick example text to build on the card title and make up the bulk of the card's content.", "inventario": 5, "categoría": "Joyeria"
    }, 
    {
    "id": 5, "imagen": "./imagenes/miel1.png", "name":"Miel de conserva", "precio":"300.00", "descripcion":"Some quick example text to build on the card title and make up the bulk of the card's content.", "inventario": 5, "categoría": "Miel"
    }, 
    {
    "id": 6, "imagen": "./imagenes/cafecien.png", "name":"Cafe de Veracruz", "precio":"300.00", "descripcion":"Some quick example text to build on the card title and make up the bulk of the card's content.", "inventario": 5, "categoría": "Cafe"
    },
    {
    "id": 7, "imagen": "./imagenes/sol.png", "name":"Collar de sol", "precio":"300.00", "descripcion":"Some quick example text to build on the card title and make up the bulk of the card's content.", "inventario": 5, "categoría": "Joyeria"
        }
    
]

//funcion pra mostrar los productos
function mostrarProductos() {
    const productosContainer = document.querySelector('.productos-container');
    productosContainer.innerHTML = ''; // Limpiar los productos antes de mostrar los nuevos

    listaDeProductos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('card');
        productoDiv.innerHTML = `

        <div class="card" style="width: 18rem;">
      <img src="${producto.imagen}" class="card-img-top" alt="${producto.name}">
      <div class="card-body">
        <h5 class="card-title">${producto.name}</h5>
        <p class="card-text">Precio: $${producto.precio}</p>
        <p class="card-text">${producto.descripcion}</p>
        <p class="card-text">Categoría: ${producto.categoría}</p>
        <p class="card-text">Categoría: ${producto.inventario}</p>
        <a href="#" class="btn btn-primary"> Editar </a>
        <a href="#" class="btn btn-primary"> Eliminar </a>
      </div>
    </div>
        `;
        productosContainer.appendChild(productoDiv);
    });
}
// funcion para agregar un nuevo elemento
function agregarProducto(){
    listaDeProductos.push({
        "id": 8, "imagen": "luna.png", "name":"Collar de luna", "precio":"300.00", "descripcion":"Some quick example text to build on the card title and make up the bulk of the card's content.", "inventario": 5, "categoría": "Joyeria"
            })
}
//funciones para editar un producto
//Cada función específica que se cambiará. Son invocadas desde la función modificarProducto.
function modificarProducto(eleccion, productoId, nuevoElemento){

    switch (eleccion){
        case 1:
            listaDeProductos[productoId].id = nuevoElemento;
            break;
        case 2:
            listaDeProductos[productoId].imagen = nuevoElemento;
            break;
        case 3:
            listaDeProductos[productoId].name = nuevoElemento;
            break;
        case 4:
            listaDeProductos[productoId].precio = nuevoElemento;
            break;
        case 5:
            listaDeProductos[productoId].descripcion = nuevoElemento;
            break;
        case 6:
            listaDeProductos[productoId].inventario = nuevoElemento;
            break;
        case 7:
            listaDeProductos[productoId].categoría = nuevoElemento;
            break;
        default:
            console.log("Opción no válida.");
            break;
    }
}
//Funcion para eliminar un producto
function eliminarProducto(id) {

    for (let i = 0; i < listaDeProductos.length; i++) {

        if (listaDeProductos[i].id === id) {

            listaDeProductos.splice(i, 1); // Elimina el producto

            console.log("Producto eliminado con ID:", id);

            return; // Sale de la función después de eliminar

        }

    }

    console.log("Producto no encontrado con ID:", id);

}

//Para eliminar todo el array 
function eliminarTodaLaLista() {

    listaDeProductos.length = 0; // Vacia el array

    console.log("Todos los productos han sido eliminados.");

}
//Función para obtener los datos del formulario y convertirlos en formato Json

const formulario = document.getElementById('formProduct');
const btnEnviar = document.getElementById('enviar');

// Función para obtener los datos y convertirlos a JSON
function obtenerDatosFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    // Recuperar los valores de los campos
    const id = document.getElementById('id').value;
    const imagen = document.getElementById('imagen').value; 
    const name = document.getElementById('name').value;
    const precio = document.getElementById('precio').value;
    const inventario = document.getElementById('inventario').value;
    const categoria = document.getElementById('categoria').value;
    const estado = document.getElementById('estado').value;
    const descripcion = document.getElementById('descripcion').value;

    if (id===""){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa id";
    }
    else if (imagen===""){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa imagen";
    }
    else if(name==="" || name.match(/[0-9]/g)){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa un nombre valido para tu producto";
    }
    else if(precio==="" || precio.match(/[a-z]/g)){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa un precio valido";
    }
    else if(descripcion===""){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa una descripción";
    } else {
        document.getElementById("mostrarJson").className= "alert alert-success";
        document.getElementById("mostrarJson").setAttribute("role","alert");

    // Crear un objeto con los datos
    const datosProducto = {
        id: id,
        imagen: imagen,
        name: name,
        precio: precio,
        inventario: inventario,
        categoria: categoria,
        estado: estado,
        descripcion: descripcion
    };

    // Convertir el objeto a formato JSON
    const datosJSON = JSON.stringify(datosProducto, null, 2);

    // Mostrar en consola (o hacer algo más con el JSON, como enviarlo a un servidor)
    console.log(datosJSON);

    const mostrarJson = document.getElementById('mostrarJson');
    mostrarJson.textContent = datosJSON; 
    

}

   
}



// Agregar el event listener al botón de envío
btnEnviar.addEventListener('click', obtenerDatosFormulario);
mostrarProductos();