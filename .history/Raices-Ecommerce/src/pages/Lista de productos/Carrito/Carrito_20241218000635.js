// Cargar productos desde localStorage
const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];

// Variables
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Seleccionar elementos del DOM
const productosDOM = document.getElementById('productos');
const carritoDOM = document.getElementById('carrito');

function mostrarProductos() {
  // productosDOM.innerHTML = ''; 

  if (productosGuardados.length === 0) {
    productosDOM.innerHTML = '<p>No hay productos disponibles.</p>';
    return;
  }

  productosGuardados.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${producto.imagen}" class="card-img-top" alt="${producto.name}">
      <div class="card-body">
        <center><h5 class="card-title">${producto.name}</h5></center>
        <p class="card-text">${producto.descripcion}</p>
        <center>
        <p class="card-text">Precio: $${producto.precio}</p>
        <a href="#" class="btn btn-danger" onclick="agregarAlCarrito(${producto.id})">Comprar </a>
      </div>
    </div>
  `;;
    productosDOM.appendChild(div);
  });
}

function mostrarCarrito() {
  carritoDOM.innerHTML = ''; // Limpiar contenido previo

  if (carrito.length === 0) {
    carritoDOM.innerHTML = '<p>Tu carrito está vacío</p>';
    return;
  }

  // Crear la tabla
  const table = document.createElement('table');
  table.classList.add('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Agregar encabezado de la tabla
  thead.innerHTML = `
    <tr>
      <th>Producto</th>
      <th>Precio</th>
      <th>Cantidad</th>
      <th>Acciones</th>
    </tr>
  `;
  table.appendChild(thead);

  // Recorrer los productos en el carrito y agregar filas a la tabla
  carrito.forEach((producto) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${producto.name}</td>
      <td>$${producto.precio}</td>
      <td>
        <button class="btn btn-primary" onclick="menosCantidad(${producto.id})" >-</button>
        ${producto.cantidad}
        <button class="btn btn-success" onclick="masCantidad(${producto.id})">+</button>
      </td>
      <td>
        <button class="btn btn-warning" onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Agregar el cuerpo de la tabla a la tabla principal
  table.appendChild(tbody);
  carritoDOM.appendChild(table);

  // Calcular el total con un bucle for
  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    const item = carrito[i];
    total += item.precio * item.cantidad;
  }

  // Mostrar el total en la interfaz
  const totalDiv = document.createElement('div');
  totalDiv.innerHTML = `<h3>Total: $${total}</h3>
  <a href="#" class="btn btn-danger" onclick="totalAPagar(${total})">Pagar</a>`;
  
  carritoDOM.appendChild(totalDiv);
}
// Agregar producto al carrito
function agregarAlCarrito(id) {
  const producto = productosGuardados.find((p) => p.id === id);

  if (!producto) return;

  // Verificar si ya está en el carrito
  const productoEnCarrito = carrito.find((p) => p.id === id);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardarCarrito();
  mostrarCarrito();
}

// Menos producto del carrito
function menosCantidad(id) {
  // Buscar el producto en el carrito
  const productoEnCarrito = carrito.find((producto) => producto.id === id);

  if (productoEnCarrito) {
    // Disminuir la cantidad si es mayor a 1
    if (productoEnCarrito.cantidad > 1) {
      productoEnCarrito.cantidad -= 1;
    } else {
      // Si la cantidad es 1, eliminar el producto del carrito
      carrito = carrito.filter((producto) => producto.id !== id);
    }
  }

  // Guardar el carrito actualizado en localStorage
  guardarCarrito();

  // Mostrar los productos actualizados en el carrito
  mostrarCarrito();
}
function masCantidad(id) {
  const productoEnCarrito = carrito.find((producto) => producto.id === id);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad += 1;
  }

  // Guardar el carrito actualizado en localStorage
  guardarCarrito();

  // Mostrar los productos actualizados en el carrito
  mostrarCarrito();
}
function eliminarDelCarrito(id) {
  // Filtrar el producto que no se desea eliminar
  carrito = carrito.filter((producto) => producto.id !== id);

  // Guardar el carrito actualizado en localStorage
  guardarCarrito();

  // Mostrar los productos actualizados en el carrito
  mostrarCarrito();
}
// Guardar carrito en localStorage
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Inicializar la tienda
mostrarProductos();
mostrarCarrito();



