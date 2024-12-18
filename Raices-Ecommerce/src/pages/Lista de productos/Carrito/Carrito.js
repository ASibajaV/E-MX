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

// Control de inventario
function agregarAlCarrito(id) {
  const producto = productosGuardados.find((p) => p.id === id);

  if (!producto) return;

  if (producto.stock && producto.stock <= 0) {
    alert('El producto no está disponible.');
    return;
  }

  const productoEnCarrito = carrito.find((p) => p.id === id);

  if (productoEnCarrito) {
    if (producto.stock && productoEnCarrito.cantidad >= producto.stock) {
      alert('No hay suficiente stock disponible.');
    } else {
      productoEnCarrito.cantidad += 1;
    }
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardarCarrito();
  mostrarCarrito();
}

//Actualizar Cantidad de productos
function actualizarCantidad(id, incremento) {
  const productoEnCarrito = carrito.find((producto) => producto.id === id);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad += incremento;

    if (productoEnCarrito.cantidad <= 0) {
      carrito = carrito.filter((producto) => producto.id !== id);
    }
  }

  guardarCarrito();
  mostrarCarrito();
}

// Reemplaza las funciones específicas:
function menosCantidad(id) {
  actualizarCantidad(id, -1);
}

function masCantidad(id) {
  actualizarCantidad(id, 1);
}

//Confirmación antes de eliminar
function eliminarDelCarrito(id) {
  if (confirm('¿Estás seguro de que deseas eliminar este producto del carrito?')) {
    carrito = carrito.filter((producto) => producto.id !== id);
    guardarCarrito();
    mostrarCarrito();
  }
}


//Envío del carrito al backend
async function totalAPagar(total) {
  try {
    const response = await fetch('http://localhost:8080/api/orders/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        carrito,
        total,
      }),
    });

    if (response.ok) {
      Swal.fire({
        title: '¡Éxito!',
        text: 'Compra realizada con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });

      // Vaciar el carrito
      carrito = [];
      guardarCarrito();
      mostrarCarrito();
    } else {
      // Mostrar error del servidor si no responde correctamente
      const errorData = await response.json();
      Swal.fire({
        title: 'Error',
        text: errorData.message || 'Hubo un problema al procesar tu compra.',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo',
      });
    }
  } catch (error) {
    // Mostrar error si la solicitud falla (problemas de red, etc.)
    Swal.fire({
      title: 'Error',
      text: 'No se pudo conectar con el servidor. Por favor, inténtalo más tarde.',
      icon: 'error',
      confirmButtonText: 'Aceptar',
    });

    console.error('Error:', error); // Mantén el error en consola para depuración
  }
}



// Aviso con sweetalert de si estas seguro de eliminar un producto
function eliminarDelCarrito(id) {
  // Mostrar la alerta de confirmación con SweetAlert
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'El producto será eliminado del carrito.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      // Filtrar el producto que no se desea eliminar
      carrito = carrito.filter((producto) => producto.id !== id);

      // Guardar el carrito actualizado en localStorage
      guardarCarrito();

      // Mostrar los productos actualizados en el carrito
      mostrarCarrito();

      // Mostrar una alerta de éxito
      Swal.fire(
        'Eliminado',
        'El producto ha sido eliminado del carrito.',
        'success'
      );
    }
  });
}
