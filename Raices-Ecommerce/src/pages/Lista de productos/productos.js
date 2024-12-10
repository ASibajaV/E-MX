const listaDeProductos=[
  {
  "id": 1, "imagen": "lele.png", "name":"Muñeca Lele", "precio":"300.00","descripcion":"Some quick example text to build on the card title and make up the bulk of the card's content." ,"inventario": 5, "categoría": "Bolsas"
  }, 
  {
  "id": 2, "imagen": "bolsa1.png", "name":"Bolsa Elegante", "precio":"300.00", "descripcion":"Some quick example text to build on the card title and make up the bulk of the card's content.", "inventario": 5, "categoría": "Bolsa"
  }, 
  {
  "id": 3, "imagen": "bolsa.png", "name":"Bolsa versatil", "precio":"300.00", "descripcion":"Some quick example text to build on the card title and make up the bulk of the card's content.", "inventario": 5, "categoría": "Bolsa"
  }, 
  {
  "id": 4, "imagen": "plata.png", "name":"Pulsera de plata", "precio":"300.00", "descripcion":"Some quick example text to build on the card title and make up the bulk of the card's content.", "inventario": 5, "categoría": "Joyeria"
  }, 
  {
  "id": 5, "imagen": "miel1.png", "name":"Miel de conserva", "precio":"300.00", "descripcion":"Some quick example text to build on the card title and make up the bulk of the card's content.", "inventario": 5, "categoría": "Miel"
  }, 
  {
  "id": 6, "imagen": "cafecien.png", "name":"Cafe de Veracruz", "precio":"300.00", "descripcion":"Some quick example text to build on the card title and make up the bulk of the card's content.", "inventario": 5, "categoría": "Cafe"
  },
  {
  "id": 7, "imagen": "sol.png", "name":"Collar de sol", "precio":"300.00", "descripcion":"Some quick example text to build on the card title and make up the bulk of the card's content.", "inventario": 5, "categoría": "Joyeria"
      }
]

//Funcion que agregue objetos al arreglo.
function agregarProducto(){
  listaDeProductos.push({
      "id": 8, "imagen": "luna.png", "name":"Collar de luna", "precio":"300.00", "descripcion":"Some quick example text to build on the card title and make up the bulk of the card's content.", "inventario": 5, "categoría": "Joyeria"
          })
}
// Funcion que elimina un producto 
function eliminarProducto(id){
  for (let i=0;i<listaDeProductos.length;i++){
      if (listaDeProductos[i].id===id){
          listaDeProductos.splice(i,1);
          console.log("Producto eliminado con ID: ", id);
          return;
      }
  }
  console.log("Producto no encontrado con ID:",id);
}
// Funcion eliminar toda la lista
function eliminarTodaLaLista(){
  listaDeProductos.length=0;
  console.log("Todos los productos han sido eliminados.");
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

function addItem(item) {
  const itemHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${item.imagen}" class="card-img-top" alt="${item.name}">
      <div class="card-body">
        <center><h5 class="card-title">${item.name}</h5></center>
        <p class="card-text">${item.descripcion}</p>
        <center>
        <p class="card-text">Precio: $${item.precio}</p>
        <a href="#" class="btn btn-primary"> Comprar </a></center>
      </div>
    </div>
  `;
  const contenedorProductos = document.querySelector("#cartas_productos");
  contenedorProductos.innerHTML += itemHTML;
  }

// Función para mostrar las tarjetas en el DOM
/* function fetchProductos() {

  fetch('productos.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(producto => {
        addItem(producto);
      });
    })
    .catch(error => {
      console.error('Error al obtener los productos:', error);
    });
} */
// Función para mostrar las tarjetas en el html
// function fetchProductos() 

/* https://www.youtube.com/watch?v=DP7Hkr2ss_I*/

// Mejorando función para que no se dupliquen los datos.
function mostrarProductos(productos) {
  const contenedorProductos = document.querySelector("#cartas_productos");
  contenedorProductos.innerHTML = ''; // Limpiamos el contenedor

  productos.forEach(producto => {
      addItem(producto);
  });
}
// se puede borrar
function filtrarProductos(productos, categoria) {
  if (!categoria) {
    return productos; // Si no hay categoría, muestra todos los productos
  }
  return productos.filter(producto => producto.categoría === categoria);
}

// Obtener los productos desde el archivo JSON
fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    productos = data; // Guarda los productos en una variable global (no es la mejor práctica, pero simplifica el ejemplo)
    mostrarProductos(productos);
  });

// Seleccionar las imágenes de categoría y agregar eventos de clic
const categoriaCafe = document.getElementById("catCafe");
const categoriaMiel = document.getElementById("catMiel"); 
const categoriaTodos = document.getElementById("allProd");
const categoriaBolsas = document.getElementById("catBolsas");
const categoriaJoyeria = document.getElementById("catJoyeria");

categoriaCafe.addEventListener('click', () => {
  const productosFiltrados = filtrarProductos(productos, 'Cafe');
  mostrarProductos(productosFiltrados);
});
categoriaMiel.addEventListener('click', () => {
  const productosFiltrados = filtrarProductos(productos, 'Miel');
  mostrarProductos(productosFiltrados);
});

categoriaBolsas.addEventListener('click', () => {
  const productosFiltrados = filtrarProductos(productos, 'Bolsa');
  mostrarProductos(productosFiltrados);
});

categoriaJoyeria.addEventListener('click', () => {
  const productosFiltrados = filtrarProductos(productos, 'Joyeria');
  mostrarProductos(productosFiltrados);
});

categoriaTodos.addEventListener('click', () => {
  mostrarProductos(productos); // Mostrar todos los productos
});




/* Muestra podructos */

/*fetch('productos.json')
    .then(response => response.json())
    .then(data => {
      mostrarProductos(data);
  })
/* categorías */
/*const categoriaCafe = document.getElementById(catCafe);
const categoriaTodos = document.getElementById(catMiel);
categoriaCafe.addEventListener('click', ()=> {
  const productosFiltrados =filtrarProductos(productos, 'Cafe');
mostrarProductos(productosFiltrados);
});

categoriaTodos.addEventListener('click', ()=>{
  mostrarProductos(productos);
})*/


