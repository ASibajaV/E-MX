/*-----------------------------------------------------------------------------------*/
// Función para inicializar los productos en el localStorage
/*-----------------------------------------------------------------------------------*/
function ProductosIniciales() {
    if (!localStorage.getItem('productos')) {
        const diezProductos = [
            {
                "id": 1, 
                "imagen": "https://raw.githubusercontent.com/Xamagora/Catalogo/refs/heads/main/Catalogo%20de%20la%20pagina/Bolsas/bolsa.webp", 
                "name":"Bolsa Henequen", 
                "precio":1500.00,
                "inventario": 2, 
                "categoría": "Bolsa", 
                "estado": "nuevo", 
                "descripcion":"Originaria de Yucatán"
            }, 
            {
                "id": 2, 
                "imagen": "https://raw.githubusercontent.com/Xamagora/Catalogo/refs/heads/main/Catalogo%20de%20la%20pagina/Bolsas/bolsa1.webp", 
                "name":"Bolsa Mostaza", 
                "precio":950.00, 
                "inventario": 5, 
                "categoría": "Bolsa", 
                "estado": "favoritos", 
                "descripcion":"Originaria de Yucatán"
            },
            {
                "id": 3, 
                "imagen": "https://raw.githubusercontent.com/Xamagora/Catalogo/refs/heads/main/Catalogo%20de%20la%20pagina/Caf%C3%A9/cafecien.webp", 
                "name":"Café Orgánico", 
                "precio":850.00, 
                "inventario": 4, 
                "categoría": "Cafe", 
                "estado": "tendencias", 
                "descripcion":"Originario de Chiapas"
            }, 
            {
                "id": 4, 
                "imagen": "https://raw.githubusercontent.com/Xamagora/Catalogo/refs/heads/main/Catalogo%20de%20la%20pagina/Joyer%C3%ADa/plata.webp", 
                "name":"Jaguar de Plata", 
                "precio":1650.00, 
                "inventario": 8,
                "categoría": "Joyeria",
                "estado": "descuentos", 
                "descripcion":"Originaria de Taxco"
            }, 
            {
                "id": 5, 
                "imagen": "https://raw.githubusercontent.com/Xamagora/Catalogo/refs/heads/main/Catalogo%20de%20la%20pagina/Miel/miel1.webp", 
                "name":"Miel de Manglar", 
                "precio":1150.00,
                "inventario": 5, 
                "categoría": "Miel", 
                "estado": "tendencias", 
                "descripcion":"Originaria de Campeche"
            }, 
            {
                "id": 6, 
                "imagen": "https://raw.githubusercontent.com/Xamagora/Catalogo/refs/heads/main/Catalogo%20de%20la%20pagina/Caf%C3%A9/cafecin.webp", 
                "name": "Café de altura", 
                "precio": 999.00, 
                "inventario": 6, 
                "categoría": "Cafe", 
                "estado": "nuevo", 
                "descripcion": "Originario de Oaxaca"
            },
            {
                "id": 7, 
                "imagen": "https://raw.githubusercontent.com/Xamagora/Catalogo/refs/heads/main/Catalogo%20de%20la%20pagina/Miel/miel.webp", 
                "name":"Paquete de Miel", 
                "precio":1700.00, 
                "inventario": 5, 
                "categoría": "Miel", 
                "estado": "favoritos", 
                "descripcion":"Originaria de Yucatán"
            },
            {
                "id": 8, 
                "imagen": "https://raw.githubusercontent.com/Xamagora/Catalogo/refs/heads/main/Catalogo%20de%20la%20pagina/Joyer%C3%ADa/sol.webp",
                "name": "Sol de Bronce",
                "precio":2100.00, 
                "inventario": 9, 
                "categoría": "Joyeria", 
                "estado": "descuentos", 
                "descripcion":"Originario de Guerrero"
            },
            {
                "id": 9, 
                "imagen": "https://raw.githubusercontent.com/Xamagora/Catalogo/refs/heads/main/Catalogo%20de%20la%20pagina/Miel/cat_Miel.webp", 
                "name":"Miel de Campanita", 
                "precio":900.00, 
                "inventario": 9, 
                "categoría": "Miel", 
                "estado": "tendencias", 
                "descripcion":"Originaria de Jalisco"
            },
            {
                "id": 10, 
                "imagen": "https://raw.githubusercontent.com/Xamagora/Catalogo/refs/heads/main/Catalogo%20de%20la%20pagina/Miel/mielAbeja.webp", 
                "name":"Miel de Melipona", 
                "precio":1100.00, 
                "inventario": 6, 
                "categoría": "Miel", 
                "estado": "nuevo", 
                "descripcion":"Originaria de Oaxaca"
            }
        ];
      
        // Guardamos los productos en localStorage
        localStorage.setItem('productos', JSON.stringify(diezProductos));
    }
}

/*-----------------------------------------------------------------------------------*/
// Lista de productos obtenida del localStorage o vacía
/*-----------------------------------------------------------------------------------*/
let listaDeProductos = JSON.parse(localStorage.getItem('productos')) || [];

/*-----------------------------------------------------------------------------------*/
// Función para mostrar los productos guardados
/*-----------------------------------------------------------------------------------*/
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
                        <p class="card-text">Estado: ${producto.estado}</p>
                        <p class="card-text">Inventario: ${producto.inventario}</p> 
                        <a href="#" class="btn btn-primary" onclick="updateData(${producto.id})">Editar</a>                    
                        <a href="#" class="btn btn-danger" onclick="eliminarProducto(${producto.id})">Eliminar</a>  
                    </center>
                </div>
            </div>
        `;
        productosContainer.appendChild(productoDiv);
    });
}

/*-----------------------------------------------------------------------------------*/
// Función para obtener los datos del formulario y convertirlos en formato JSON
/*-----------------------------------------------------------------------------------*/
const btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click', obtenerDatosFormulario);

function obtenerDatosFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    // Recuperar los datos del formulario
    const id = document.getElementById('id').value;
    const imagen = document.getElementById('imagen').value;
    const name = document.getElementById('name').value;
    const precio = document.getElementById('precio').value;
    const inventario = document.getElementById('inventario').value;
    const categoria = document.getElementById('categoria').value;
    const estado = document.getElementById('estado').value;
    const descripcion = document.getElementById('descripcion').value;

    // Validaciones (igual a las que tenías)
    // ...

    // Crear un objeto con los datos del formulario
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
    
    // Agregar el nuevo producto a la lista
    listaDeProductos.push(datosProducto);

    // Guardar la lista de productos actualizada en localStorage
    localStorage.setItem('productos', JSON.stringify(listaDeProductos));

    // Limpiar el formulario
    document.getElementById('formProduct').reset();

    // Mostrar los productos actualizados
    mostrarProductos();
}

/*-----------------------------------------------------------------------------------*/
// Función para eliminar un producto de la lista
/*-----------------------------------------------------------------------------------*/
function eliminarProducto(id) {
    // Filtrar el producto con el ID especificado
    listaDeProductos = listaDeProductos.filter(producto => producto.id !== id);

    // Guardar la lista actualizada en localStorage
    localStorage.setItem('productos', JSON.stringify(listaDeProductos));

    // Mostrar los productos actualizados
    mostrarProductos();
}

/*-----------------------------------------------------------------------------------*/
// Llamar a las funciones cuando la página cargue
/*-----------------------------------------------------------------------------------*/
window.onload = function() {
    ProductosIniciales(); // Cargar productos iniciales si no están en localStorage
    mostrarProductos(); // Mostrar los productos al cargar la página
};