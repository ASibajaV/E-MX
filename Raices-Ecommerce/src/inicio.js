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

function mostrarProductos(productos) {
    const contenedorProductos = document.querySelector("#cartas_productos");
    contenedorProductos.innerHTML = ''; // Limpiamos el contenedor
  
    productos.forEach(producto => {
        addItem(producto);
    });
}
// se puede borrar
function filtrarProductos(productos, estado) {
    if (!estado) {
      return productos; // Si no hay categoría, muestra todos los productos
    }
    return productos.filter(producto => producto.estado === estado);
}

// Obtener los productos desde el archivo JSON
fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    productos = data; // Guarda los productos en una variable global
    mostrarProductos(productos);
  });

const categoriaFavoritos = document.getElementById("catFavoritos");
const categoriaTendencias = document.getElementById("catTendencias"); 
const categoriaDescuentos = document.getElementById("catDescuentos");
const categoriaNuevo = document.getElementById("catNuevo");

categoriaFavoritos.addEventListener('click', () => {
    const productosFiltrados = filtrarProductos(productos, 'favoritos');
    mostrarProductos(productosFiltrados);
  });
  categoriaTendencias.addEventListener('click', () => {
    const productosFiltrados = filtrarProductos(productos, 'tendencias');
    mostrarProductos(productosFiltrados);
  });
  
  categoriaDescuentos.addEventListener('click', () => {
    const productosFiltrados = filtrarProductos(productos, 'descuentos');
    mostrarProductos(productosFiltrados);
  });
  
  categoriaNuevo.addEventListener('click', () => {
    const productosFiltrados = filtrarProductos(productos, 'nuevo');
    mostrarProductos(productosFiltrados);
  });