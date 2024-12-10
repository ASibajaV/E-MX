// Lista de productos obtenida del localStorage o vacía
let listaDeProductos = JSON.parse(localStorage.getItem('productos')) || [];

// Función para mostrar los productos guardados
function mostrarProductos() {
    const productosContainer = document.querySelector('.productos-container');
    productosContainer.innerHTML = ''; // Limpiar los productos antes de mostrar los nuevos

    // Iterar sobre los productos y mostrarlos
    listaDeProductos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('card');
        productoDiv.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.name}">
                <div class="card-body">
                    <center><h5 class="card-title">${producto.name}</h5></center>
                    <p class="card-text">${producto.descripcion}</p>
                    <center>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <p class="card-text">Categoría: ${producto.categoria}</p>
                        <p class="card-text">Inventario: ${producto.inventario}</p>
                        <a href="#" class="btn btn-primary">Editar</a>
                        <a href="#" class="btn btn-danger" onclick="eliminarProducto(${producto.id})">Eliminar</a>
                    </center>
                </div>
            </div>
        `;
        productosContainer.appendChild(productoDiv);
    });
}
// Agregar el event listener al botón de envío
const btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click', obtenerDatosFormulario);

// Función para obtener los datos del formulario y convertirlos en formato JSON
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

    // Validación básica para evitar campos vacíos
    if (id===""){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa id";
        return;
    }
    else if (imagen===""){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa imagen";
        return;
    }
    else if(name==="" || name.match(/[0-9]/g)){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa un nombre valido para tu producto";
        return;
    }
    else if(precio==="" || precio.match(/[a-z]/g)){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa un precio valido";
        return;
    }
    else if(inventario===""){
        
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa numero de inventario";
        return;
    }
    
    /*Falta AGREGAR CATEGORIA Y ESTADO */
    else if(descripcion===""){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa una descripción";
        return;
    } else {
        



    // Crear un objeto con los datos
    const datosProducto = {
        id: parseInt(id), // Asegurarse de que el ID sea un número
        imagen: imagen,
        name: name,
        precio: parseFloat(precio), // Convertir el precio a número
        inventario: parseInt(inventario), // Convertir inventario a número
        categoria: categoria,
        estado: estado,
        descripcion: descripcion
    };
    
    // Guardar el producto en la lista de productos
    listaDeProductos.push(datosProducto);

    // Guardar la lista de productos en localStorage
    localStorage.setItem('productos', JSON.stringify(listaDeProductos));

    // Limpiar el formulario
    document.getElementById('formProduct').reset();

    // Mostrar los productos actualizados
    mostrarProductos();
}}

// Función para eliminar un producto de la lista
function eliminarProducto(id) {
    // Filtrar el producto que no se desea eliminar
    listaDeProductos = listaDeProductos.filter(producto => producto.id !== id);

    // Actualizar el localStorage
    localStorage.setItem('productos', JSON.stringify(listaDeProductos));

    // Mostrar los productos actualizados
    mostrarProductos();
}
const btnEliminarTodos = document.getElementById('eliminarTodos');
btnEliminarTodos.addEventListener('click', eliminarTodosLosProductos);
// Función para eliminar todos los productos
function eliminarTodosLosProductos() {
    // Limpiar el localStorage
    localStorage.removeItem('productos');
    
    // Vaciar la lista de productos en el array
    listaDeProductos = [];
    
    // Actualizar la interfaz de usuario
    mostrarProductos();
}






// Mostrar los productos cuando se carga la página
mostrarProductos();