//Consumimos una Api para obtener todos lo productos.
const url = "http://localhost:8080/api/v1/producto/getall";

fetch(url)
  .then(response => response.json())
  .then(data => {
    
    mostrarProductos(data);
    
    // Se añade en esta parte los filtros
    document.getElementById("catCafe").addEventListener("click", () => filtrarPorCategoria(data, 'cafe'));
    document.getElementById("catBolsas").addEventListener("click", () => filtrarPorCategoria(data, 'bolsa'));
    document.getElementById("catJoyeria").addEventListener("click", () => filtrarPorCategoria(data, 'joyerias'));
    document.getElementById("catMiel").addEventListener("click", () => filtrarPorCategoria(data, 'miel'));
    document.getElementById("allProd").addEventListener("click", () => mostrarProductos(data));
  })
  .catch(error => {
    console.error(error);
  });

// Función para añadir los items de los productos en el html
function cartaProductos(data) {
  const itemHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${data.imagen_url}" class="card-img-top" alt="${data.nombre}">
      <div class="card-body">
        <center><h5 class="card-title">${data.nombre}</h5></center>
        <p class="card-text">${data.descripcion}</p>
        <center>
        <p class="card-text">Precio: $${data.precio}</p>
        <a href="#" class="btn btn-primary">Comprar</a></center>
      </div>
    </div>
  `;
  
  const contenedorProductos = document.querySelector("#cartas_productos");
  contenedorProductos.innerHTML += itemHTML;
}

// Función para mostrar productos
function mostrarProductos(data) {
  const contenedorProductos = document.querySelector("#cartas_productos");
  contenedorProductos.innerHTML = ''; 
  
  // Mostrar todos los productos
  data.forEach(producto => {
    cartaProductos(producto);
  });
}

//función de filtrar por categoria
function filtrarPorCategoria(data, categoria) {
  
  const productosFiltrados = data.filter(producto => producto.imagen_url.toLowerCase().includes(categoria.toLowerCase()));
  mostrarProductos(productosFiltrados);
}
 
