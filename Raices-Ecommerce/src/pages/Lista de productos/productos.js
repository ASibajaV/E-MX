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

categoriaCafe.addEventListener('click', () => {
  const productosFiltrados = filtrarProductos(productos, 'Cafe');
  mostrarProductos(productosFiltrados);
});
categoriaMiel.addEventListener('click', () => {
  const productosFiltrados = filtrarProductos(productos, 'Miel');
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


